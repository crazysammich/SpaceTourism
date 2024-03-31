import { useState } from "react";
import classes from "./Header.module.css";
import { Logo, MainNav, MainNavButton } from "../components";
function Header() {
  const [isMainNavOpen, setIsMainNavOpen] = useState(false);

  return (
    <header className={classes.header}>
      <div className={classes.navContainer}>
        <Logo />
        <MainNavButton isNavOpen={isMainNavOpen} onOpenNav={setIsMainNavOpen} />
        <MainNav isNavOpen={isMainNavOpen} onNavClick={setIsMainNavOpen} />
      </div>
    </header>
  );
}

export default Header;
