import MainNavItem from "./MainNavItem";
import classes from "./MainNav.module.css";
import { MouseEventHandler, forwardRef } from "react";

interface MainNavProps {
  className?: string;
  onClick?: MouseEventHandler;
}

type Ref = HTMLUListElement;

const MainNav = forwardRef<Ref, MainNavProps>(({ className, onClick }, ref) => {
  const items = ["home", "destination", "crew", "technology"];

  return (
    <ul
      className={`${classes.mainNav} ${className ? className : ""}`}
      onClick={onClick}
      ref={ref}
    >
      {items.map((item, i) => (
        <MainNavItem key={i} linkTo={item}>
          <span>0{i}</span>
          {item}
        </MainNavItem>
      ))}
    </ul>
  );
});

export default MainNav;
