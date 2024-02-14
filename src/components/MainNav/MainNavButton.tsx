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
      onClick={handleOnClick}
    ></button>
  );
}

export default MainNavButton;
