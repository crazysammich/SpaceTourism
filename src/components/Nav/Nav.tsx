import classes from "./Nav.module.css";
import { MouseEventHandler, ReactNode, forwardRef } from "react";

interface NavProps {
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler;
}

type Ref = HTMLElement;

const Nav = forwardRef<Ref, NavProps>(
  ({ children, className, onClick }, ref) => {
    return (
      <nav
        className={`${classes.nav} ${className ? className : ""}`}
        onClick={onClick}
        ref={ref}
      >
        <ul>{children}</ul>
      </nav>
    );
  }
);

export default Nav;
