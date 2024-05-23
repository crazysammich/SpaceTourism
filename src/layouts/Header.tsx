import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components";
import classes from "./Header.module.css";
function Header() {
  const headerRef = useRef<HTMLElement>(null);
  const lastKnownScrollY = useRef<number>(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  useEffect(() => {
    const onPageScroll = throttle(() => {
      if (window.scrollY < lastKnownScrollY.current) {
        setIsHeaderVisible(true);
        lastKnownScrollY.current = window.scrollY;
      } else {
        setIsHeaderVisible(false);
        lastKnownScrollY.current = window.scrollY;
      }
    }, 0.25);
    document.addEventListener("scroll", onPageScroll);
    return () => {
      document.removeEventListener("scroll", onPageScroll);
    };
  }, [isHeaderVisible]);

  return (
    <header
      className={`${classes.header} ${isHeaderVisible ? classes.visible : ""}`}
      ref={headerRef}
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
