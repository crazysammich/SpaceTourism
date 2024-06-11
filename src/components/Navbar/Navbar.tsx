import { useEffect, useRef, useState } from "react";
import classes from "./Navbar.module.css";
import { Logo } from "../Logo";
import { MainNav } from "../MainNav";
import NavMenuToggle from "./NavMenuToggle";

function Navbar() {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const navRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (isNavMenuOpen) {
      navRef.current?.focus();
    }
  }, [isNavMenuOpen]);

  function handleOnNavMenuClick() {
    setIsNavMenuOpen(false);
  }

  return (
    <nav className={classes.navbar} aria-label="Main">
      <Logo />
      <NavMenuToggle isNavOpen={isNavMenuOpen} onOpenNav={setIsNavMenuOpen} />
      <div
        className={`${classes.navbarMenu} ${
          isNavMenuOpen ? classes.navbarMenuOpen : ""
        }`}
        onClick={handleOnNavMenuClick}
      >
        <MainNav ref={navRef} />
      </div>
    </nav>
  );
}

export default Navbar;
