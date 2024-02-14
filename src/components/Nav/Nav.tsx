import { ReactNode } from "react";
import NavItem from "./NavItem";
import classes from "./Nav.module.css";

interface NavProps {
  children?: ReactNode;
  className?: string;
}

function Nav({ children, className, ...props }: NavProps) {
  return (
    <nav className={`${classes.nav} ${className ? className : ""}`} {...props}>
      <ul>{children}</ul>
    </nav>
  );
}

Nav.item = NavItem;

export default Nav;
