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
      aria-label="main-navigation-button"
      aria-controls="main-navigation"
      aria-roledescription="opens the main navigation menu of the website"
      aria-description="opens the main navigation menu of the website"
      onClick={handleOnClick}
    ></button>
  );
}

export default NavMenuToggle;
