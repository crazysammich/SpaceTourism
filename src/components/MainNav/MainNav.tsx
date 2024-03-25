import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { Nav, NavItem } from "../Nav";
import classes from "./MainNav.module.css";

interface MainNavProps {
  isNavOpen: boolean;
  onNavClick: Dispatch<SetStateAction<boolean>>;
}

function MainNav({ isNavOpen, onNavClick }: MainNavProps) {
  const items = ["home", "destination", "crew", "technology"];
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (isNavOpen) {
      navRef.current?.focus();
    }
  }, [isNavOpen]);

  function handleOnNavClick() {
    onNavClick(false);
  }

  return (
    <div className={classes.mainNavWrapper} onClick={handleOnNavClick}>
      <div
        className={`${classes.mainNavClickArea} ${
          isNavOpen ? classes.active : ""
        }`}
      ></div>
      <Nav
        className={`${classes.mainNav} ${isNavOpen ? classes.open : ""}`}
        ref={navRef}
      >
        {items.map((item, i) => (
          <NavItem key={i} linkTo={item}>
            <span>0{i}</span>
            {item}
          </NavItem>
        ))}
      </Nav>
    </div>
  );
}

export default MainNav;
