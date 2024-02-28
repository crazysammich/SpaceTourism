import classes from "./Nav.module.css";
import { ReactNode } from "react";

interface NavProps {
  children?: ReactNode;
  className?: string;
}

function Nav({ children, className }: NavProps) {
  return (
    <nav className={`${classes.nav} ${className ? className : ""}`}>
      <ul>{children}</ul>
    </nav>
  );
}

export default Nav;
