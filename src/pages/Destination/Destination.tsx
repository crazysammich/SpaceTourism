import type { DestinationType } from "../../types";
import { useLoaderData } from "react-router-dom";
import { DestinationsTabs } from "../../components";
import { useState } from "react";

import classes from "./Destination.module.css";
import { Image, Spinner } from "@crazysammich/react-components-lib";

function Destination() {
  const [currDestination, setCurrDestination] = useState("Moon");
  const [isImgLoading, setIsImgLoading] = useState(true);
  const destinations = useLoaderData() as DestinationType[];
  const destinationImg = destinations.filter(
    (dest) => dest.name === currDestination
  )[0].images.png;

  function handleOnDestChange(dest: string) {
    setCurrDestination(dest);
  }

  function handleOnDestImgLoad() {
    setIsImgLoading(false);
  }

  return (
    <main>
      <h1 className="heading-5 page-heading">
        <span>01</span> pick your destination
      </h1>
      <div className={`grid ${classes.destinationContainer} `}>
        <div
          className={`${classes.destinationImgContainer} fade-in`}
          key={currDestination}
        >
          {isImgLoading && <Spinner />}
          <Image
            src={destinationImg}
            alt={`an image of the ${currDestination}`}
            onLoad={handleOnDestImgLoad}
          />
        </div>
        <DestinationsTabs
          destinations={destinations}
          onDestChange={handleOnDestChange}
        />
      </div>
    </main>
  );
}

export default Destination;
