import { Link } from "react-router-dom";
import logoImg from "../../assets/shared/logo.svg";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <div className={classes.logoWrapper}>
      <Link to="home">
        <img src={logoImg} alt="space tourism logo" />
      </Link>
    </div>
  );
}

export default Logo;
