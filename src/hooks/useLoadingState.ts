import { useCallback, useRef, useState } from "react";

interface Timer {
  id: NodeJS.Timeout | null;
  startTime: number;
  duration: number;
}

const getTimeLeftInPrevTimeout = (prevTimeout: Timer) => {
  if (prevTimeout.id === null) return 0;
  return prevTimeout.startTime + prevTimeout.duration - Date.now();
};

export const useLoadingState = () => {
  const [impulseAmplitude, setImpulseAmplitude] = useState<number>(0);
  const prevTimeoutRef = useRef<Timer>({ id: null, startTime: 0, duration: 0 });

  const startLoading = useCallback(
    (amplitude: number, duration: number | null) => {
      setImpulseAmplitude(amplitude);

      if (
        duration !== null &&
        getTimeLeftInPrevTimeout(prevTimeoutRef.current) < duration
      ) {
        if (prevTimeoutRef.current.id) clearTimeout(prevTimeoutRef.current.id);

        const newTimeout = setTimeout(() => {
          prevTimeoutRef.current = { id: null, startTime: 0, duration: 0 };
          setImpulseAmplitude(0);
        }, duration);
        prevTimeoutRef.current = {
          id: newTimeout,
          startTime: Date.now(),
          duration,
        };
      }
    },
    []
  );

  const stopLoading = useCallback(() => {
    if (prevTimeoutRef.current.id === null) {
      setImpulseAmplitude(0);
    }
  }, []);

  return {
    impulseAmplitude,
    startLoading,
    stopLoading,
  };
};
