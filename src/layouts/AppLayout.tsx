import { Outlet, useLocation, useNavigation } from "react-router-dom";
import classes from "./AppLayout.module.css";
import Header from "./Header";
import { LoadingDots } from "../components";

function AppLayout() {
  const pathname = useLocation().pathname.replace("/", "");
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div
      className={`${classes.pageWrapper} ${
        pathname ? classes[`page-${pathname}`] : ""
      }`}
    >
      {isLoading && <LoadingDots />}
      <Header />
      <div className="mainWrapper">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
