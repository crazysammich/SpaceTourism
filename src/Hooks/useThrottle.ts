import { useRef } from "react";

function useThrottle() {
  const lastExecTime = useRef(0);
  const pendingArgs = useRef<[]>([]);
  const throttledFn = (cb: () => void, delay = 1) => {
    return (...args: []) => {
      const now = Date.now();
      const a = pendingArgs.current.length > 0 ? pendingArgs.current : args;
      if (now - lastExecTime.current >= delay * 1000) {
        cb(...a);
        lastExecTime.current = now;
      } else {
        pendingArgs.current = args;
      }
    };
  };
  return throttledFn;
}

export default useThrottle;
