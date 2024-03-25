import { Dispatch, SetStateAction } from "react";
import classes from "./MainNavButton.module.css";

interface MainNavButtonProps {
  isNavOpen: boolean;
  onOpenNav: Dispatch<SetStateAction<boolean>>;
}

function MainNavButton({ isNavOpen, onOpenNav }: MainNavButtonProps) {
  function handleOnClick() {
    onOpenNav((prev) => !prev);
  }
  return (
    <button
      className={`${classes.mainNavBtn} ${isNavOpen ? classes.active : ""}`}
      aria-label="main-navigation-button"
      aria-controls="main-navigation"
      aria-roledescription="opens the main navigation menu of the website"
      aria-description="opens the main navigation menu of the website"
      onClick={handleOnClick}
    ></button>
  );
}

export default MainNavButton;
