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
      const impulseAmplitude = 20;
      const damp = 1;
      const dampIncrease = 0.03;
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
        curPoints.push(p.createVector(width + 5, lineHeight));
        amps.push(0);
      };

      p.draw = () => {
        p.clear();

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
              (damp * (i * dampIncrease + 1)) +
            lineHeight;
        }

        // Shift the amplitude values
        for (let i = amps.length - 1; i > 0; i--) {
          amps[i] = amps[i - 1];
        }

        // Draw Sun
        p.fill("#908a76");
        p.stroke("#908a76");
        p.circle(p.width / 2, lineHeight - 25, 200);
        amps[0] = baseAmplitude;

        // Draw the waveform
        p.stroke(255, 244, 214);
        p.strokeWeight(3);
        p.fill(0, 180);
        p.beginShape();

        for (let i = 0; i < curPoints.length; i++) {
          p.vertex(curPoints[i].x, curPoints[i].y);
        }
        p.vertex(curPoints[curPoints.length - 1].x, p.height + 10);
        p.vertex(curPoints[0].x - 10, p.height + 10);

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
        curPoints.push(p.createVector(width + 5, lineHeight));
        amps.push(0);
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
    setTimeout(() => (isLoadingRef.current = isLoading), isLoading ? 0 : 1000); // turn OFF after 1s of loading complete
  }, [isLoading]);

  return (
    <div
      ref={sketchRef}
      className="absolute md:bottom-0 left-0 w-full h-1/2 overflow-hidden md:z-[-1] md:opacity-20 pointer-events-none opacity-25 bottom-[calc(0px-5.4rem)]"
    ></div>
  );
};

export default LoadingWave;
