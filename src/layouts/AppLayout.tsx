import { Outlet, useLocation, useNavigation } from "react-router-dom";
import classes from "./AppLayout.module.css";
import Header from "./Header";
import { LoadingDots } from "../components";
import { Image } from "@crazysammich/react-components-lib";

function AppLayout() {
  const pathname = useLocation().pathname.replace("/", "");
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <div className={classes.pageWrapper}>
        <picture>
          <source
            media="(max-width: 375px)"
            srcSet={`/assets/${pathname}/background-${pathname}-mobile.jpg`}
          />
          <source
            media="(max-width: 768px)"
            srcSet={`/assets/${pathname}/background-${pathname}-tablet.jpg`}
          />
          <Image
            loading="lazy"
            role="presentation"
            alt=""
            src={`/assets/${pathname}/background-${pathname}-desktop.jpg`}
          />
        </picture>
        {isLoading && <LoadingDots />}
        <Header />
        <div className="main-wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AppLayout;
