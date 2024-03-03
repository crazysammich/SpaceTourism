import { Link } from "react-router-dom";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logoWrapper}>
      <Link to="home">
        <img src="/assets/shared/logo.svg" alt="space tourism logo" />
      </Link>
    </div>
  );
}

export default Logo;
