import { Link } from "react-router-dom";
import classes from "./HomeButton.module.css";

function HomeButton() {
  return (
    <Link to="/destination" className={classes.homeBtn}>
      explore
    </Link>
  );
}

export default HomeButton;
