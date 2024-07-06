import { useRef } from "react";

function useThrottle() {
  const lastExecTime = useRef(0);
  const pendingArgs = useRef<[]>();
  const throttledFn = (cb: () => void, delay = 1) => {
    return (...args: []) => {
      const now = Date.now();
      if (now - lastExecTime.current >= delay * 1000) {
        if (pendingArgs.current) {
          cb(...pendingArgs.current);
        } else {
          cb(...args);
        }
        lastExecTime.current = now;
      } else {
        pendingArgs.current = args;
      }
    };
  };

  return throttledFn;
}

export default useThrottle;
