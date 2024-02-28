import { Nav, NavItem } from "../Nav";
import classes from "./MainNav.module.css";

interface MainNavProps {
  isNavOpen: boolean;
}

function MainNav({ isNavOpen }: MainNavProps) {
  const items = ["home", "destination", "crew", "technology"];

  return (
    <Nav className={`${classes.mainNav} ${isNavOpen ? classes.open : ""}`}>
      {items.map((item, i) => (
        <NavItem key={i} linkTo={item}>
          <span>0{i}</span>
          {item}
        </NavItem>
      ))}
    </Nav>
  );
}

export default MainNav;
