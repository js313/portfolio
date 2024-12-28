import React, { useRef, useEffect } from "react";
import p5 from "p5";

interface LoadingWaveProps {
  isLoading: boolean; // Prop to control the loading state
}

const LoadingWave: React.FC<LoadingWaveProps> = ({ isLoading }) => {
  const sketchRef = useRef<HTMLDivElement>(null);
  const isLoadingRef = useRef(isLoading);

  useEffect(() => {
    let canvas: p5;

    const Sketch = (p: p5) => {
      const res = 100;
      const baseAmplitude = 3;
      const impulseAmplitude = 15;
      const damp = 1;
      const freq = 0.1; // Initial frequency value
      const noiseStepMult = 0.1;

      let lineHeight: number; // Will be dynamically calculated
      let curPoints: p5.Vector[] = [];
      let amps: number[] = [];
      let impulseStrength = 0;

      p.setup = () => {
        const parent = sketchRef.current;
        if (!parent) return;

        // Use parent width and height
        const width = parent.offsetWidth;
        const height = parent.offsetHeight;

        lineHeight = height / 2;

        p.createCanvas(width, height).parent(parent);
        curPoints.push(p.createVector(0, lineHeight));

        for (let i = 1; i <= res; i++) {
          curPoints.push(p.createVector((i * width) / res, lineHeight));
          amps.push(0);
        }
      };

      p.draw = () => {
        p.clear();

        amps[0] = baseAmplitude;

        // Smoothly interpolate the impulse strength
        if (isLoadingRef.current) {
          impulseStrength = p.lerp(impulseStrength, impulseAmplitude, 0.05);
        } else {
          impulseStrength = p.lerp(impulseStrength, 0, 0.05);
        }

        amps[0] += impulseStrength;
        amps[0] += (p.noise(p.frameCount * noiseStepMult) * amps[0]) / 2;

        // Update the points based on the sine wave
        for (let i = 0; i <= res; i++) {
          curPoints[i].y =
            (p.sin((p.frameCount - i) * freq) * amps[i]) /
              (damp * (i / 20 + 1)) +
            lineHeight;
        }

        // Shift the amplitude values
        for (let i = amps.length - 1; i > 0; i--) {
          amps[i] = amps[i - 1];
        }

        // Draw the waveform
        p.stroke(255, 244, 214);
        p.strokeWeight(3);
        p.noFill();
        p.beginShape();

        for (let i = 0; i < curPoints.length; i++) {
          p.vertex(curPoints[i].x, curPoints[i].y);
        }

        p.endShape();
      };

      p.windowResized = () => {
        const parent = sketchRef.current;
        if (!parent) return;

        // Resize canvas to match parent dimensions
        const width = parent.offsetWidth;
        const height = parent.offsetHeight;

        lineHeight = height / 2;
        p.resizeCanvas(width, height);

        curPoints = [];
        for (let i = 0; i <= res; i++) {
          curPoints.push(p.createVector((i * width) / res, lineHeight));
          amps.push(0);
        }
      };
    };

    if (sketchRef.current) {
      canvas = new p5(Sketch, sketchRef.current);
    }

    return () => {
      canvas.remove(); // Cleanup p5 instance on component unmount
    };
  }, []);

  useEffect(() => {
    // Update the ref when isLoading changes
    isLoadingRef.current = isLoading;
  }, [isLoading]);

  return (
    <div
      ref={sketchRef}
      className="absolute top-2/3 left-0 w-full h-1/4 overflow-hidden z-[-1] opacity-15"
    ></div>
  );
};

export default LoadingWave;
