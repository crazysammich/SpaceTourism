import { HomeButton } from "../../components";
import classes from "./Home.module.css";

function Home() {
  return (
    <main className={`grid ${classes.home}`}>
      <div className={classes.homeContentContainer}>
        <h1 className="heading-1">
          <span className="heading-5">so, you want to travel to</span> space
        </h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className={classes.homeBtnContainer}>
        <HomeButton />
      </div>
    </main>
  );
}

export default Home;
