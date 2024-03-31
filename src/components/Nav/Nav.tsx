import classes from "./Nav.module.css";
import { MouseEventHandler, ReactNode } from "react";

interface NavProps {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

function Nav({ children, className, onClick }: NavProps) {
  return (
    <nav
      className={`${classes.nav} ${className ? className : ""}`}
      onClick={onClick}
    >
      <ul>{children}</ul>
    </nav>
  );
}

export default Nav;
