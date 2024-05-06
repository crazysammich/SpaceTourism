import { Dispatch, SetStateAction } from "react";
import classes from "./NavMenuToggle.module.css";

interface NavMenuToggle {
  isNavOpen: boolean;
  onOpenNav: Dispatch<SetStateAction<boolean>>;
}

function NavMenuToggle({ isNavOpen, onOpenNav }: NavMenuToggle) {
  function handleOnClick() {
    onOpenNav((prev) => !prev);
  }
  return (
    <button
      className={`${classes.navMenuToggle} ${isNavOpen ? classes.active : ""}`}
      aria-label="navigation menu button"
      aria-controls="main-nav"
      aria-expanded={isNavOpen}
      aria-roledescription="opens the main navigation menu of the website"
      onClick={handleOnClick}
    ></button>
  );
}

export default NavMenuToggle;
