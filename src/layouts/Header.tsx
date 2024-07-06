import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components";
// import { throttle } from "../utils";
import classes from "./Header.module.css";
import { useThrottle } from "../Hooks";
function Header() {
  const prevScrollPos = useRef<number>(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const throttle = useThrottle();
  const onPageScroll = () => {
    const currentScrollPos = window.scrollY;
    setIsHeaderVisible(currentScrollPos < prevScrollPos.current);
    prevScrollPos.current = currentScrollPos;
  };

  useEffect(() => {
    const onPageScrollThrottled = throttle(onPageScroll, 0.3);
    document.addEventListener("scroll", onPageScrollThrottled);
    return () => {
      document.removeEventListener("scroll", onPageScrollThrottled);
    };
  }, []);

  return (
    <header
      className={`${classes.header} ${isHeaderVisible ? classes.visible : ""}`}
    >
      <Navbar />
    </header>
  );
}

export default Header;
