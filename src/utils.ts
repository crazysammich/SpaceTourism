function throttle(cb: () => void, delay = 1) {
  let isWaiting = false;
  let pendingArgs: [] | null = null;
  const timeout = () => {
    if (!pendingArgs) {
      isWaiting = false;
    } else {
      cb(...pendingArgs);
      setTimeout(timeout, delay * 1000);
    }
  };

  return (...args: []) => {
    if (isWaiting) {
      pendingArgs = args;
      return;
    }
    cb(...args);
    isWaiting = true;
    setTimeout(timeout, delay * 1000);
  };
}

export { throttle };
