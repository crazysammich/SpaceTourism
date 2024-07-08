import { useEffect, useRef, useState } from "react";
import { Navbar } from "../components";
import classes from "./Header.module.css";
import { useThrottle } from "@crazysammich/react-components-lib";

function Header() {
  const prevScrollPos = useRef<number>(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const onPageScrollThrottled = useThrottle(onPageScroll, 0.25);

  function onPageScroll() {
    const currentScrollPos = window.scrollY;
    setIsHeaderVisible(
      currentScrollPos < prevScrollPos.current || currentScrollPos < 20
    );
    prevScrollPos.current = currentScrollPos;
  }

  useEffect(() => {
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
