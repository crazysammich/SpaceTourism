import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavItem.module.css";

interface MainNavItem {
  children?: ReactNode;
  className?: string;
  linkTo: string;
}

function MainNavItem({ linkTo, children, className }: MainNavItem) {
  return (
    <li className={`subheading-3 ${classes.mainNavItem} ${className || ""}`}>
      <NavLink to={`/${linkTo}` || ""}>{children}</NavLink>
    </li>
  );
}

export default MainNavItem;
