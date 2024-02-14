import { Outlet, useLocation } from "react-router-dom";
import classes from "./AppLayout.module.css";
import Header from "./Header";

function AppLayout() {
  const pathname = useLocation().pathname.replace("/", "");
  return (
    <div
      className={`${classes.pageWrapper} ${
        pathname ? classes[`page-${pathname}`] : ""
      }`}
    >
      <Header />
      <div className="mainWrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
