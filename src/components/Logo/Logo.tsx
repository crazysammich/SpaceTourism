import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logoWrapper}>
      <Link to="home">
        <img src="/assets/shared/logo.svg" alt="Go to home page" />
      </Link>
    </div>
  );
}

export default Logo;
