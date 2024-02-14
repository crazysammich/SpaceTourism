import Nav from "../Nav";
import classes from "./MainNav.module.css";

interface MainNavProps {
  isNavOpen: boolean;
}

function MainNav({ isNavOpen }: MainNavProps) {
  return (
    <Nav className={`${classes.mainNav} ${isNavOpen ? classes.open : ""}`}>
      <Nav.item linkTo="home">
        <span>00</span>home
      </Nav.item>
      <Nav.item linkTo="destination">
        <span>01</span>destination
      </Nav.item>
      <Nav.item linkTo="crew">
        <span>02</span>crew
      </Nav.item>
      <Nav.item linkTo="technology">
        <span>03</span>technology
      </Nav.item>
    </Nav>
  );
}

export default MainNav;
