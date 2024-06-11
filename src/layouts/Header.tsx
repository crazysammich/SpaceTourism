import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components";
import classes from "./Header.module.css";
function Header() {
  const prevScrollPos = useRef<number>(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const onPageScroll = throttle(() => {
      const currentScrollPos = window.scrollY;
      setIsHeaderVisible(
        currentScrollPos < prevScrollPos.current || currentScrollPos < 20
      );
      prevScrollPos.current = currentScrollPos;
    }, 0.3);
    document.addEventListener("scroll", onPageScroll);
    return () => {
      document.removeEventListener("scroll", onPageScroll);
    };
  }, [isHeaderVisible]);

  return (
    <header
      className={`${classes.header} ${isHeaderVisible ? classes.visible : ""}`}
    >
      <Navbar />
    </header>
  );
}

function throttle(cb: () => void, delay = 1) {
  let isWaiting = false;
  let pendingArgs: [] | null = null;
  const timeoutFunc = () => {
    if (!pendingArgs) {
      isWaiting = false;
    } else {
      cb(...pendingArgs);
      pendingArgs = null;
      setTimeout(timeoutFunc, delay * 1000);
    }
  };
  return function (...args: []) {
    if (isWaiting) {
      pendingArgs = args;
      return;
    }
    cb(...args);
    isWaiting = true;
    setTimeout(timeoutFunc, delay * 1000);
  };
}

export default Header;
