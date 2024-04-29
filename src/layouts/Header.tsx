import { Navbar } from "../components";
import classes from "./Header.module.css";
function Header() {
  return (
    <header className={classes.header}>
      <Navbar />
    </header>
  );
}

export default Header;
