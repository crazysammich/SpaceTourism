import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.css";

interface NavItemProps {
  children?: ReactNode;
  className?: string;
  linkTo: string;
}

function NavItem({ linkTo, children, className }: NavItemProps) {
  return (
    <li className={`${classes.navItem}`}>
      <NavLink className={`${className ? className : ""}`} to={linkTo}>
        {children}
      </NavLink>
    </li>
  );
}

export default NavItem;
