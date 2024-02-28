import type { Destination } from "../types";
import { useLoaderData } from "react-router-dom";
import { DestinationItem, DestinationsTabs } from "../components";
import { useState } from "react";

import classes from "./Destination.module.css";

function Destination() {
  const [currDestination, setCurrDestination] = useState("Moon");
  const destinations = useLoaderData() as Destination[];
  const destinationImg = destinations.filter(
    (dest) => dest.name === currDestination
  )[0].images.png;

  const destinationItems = destinations.map((dest) => {
    return {
      title: dest.name,
      content: <DestinationItem destination={dest} />,
    };
  });

  function handleOnDestChange(dest: string) {
    setCurrDestination(dest);
  }

  return (
    <main>
      <h1 className={`heading-5 ${classes.destinationHeading}`}>
        <span>01</span> pick your destination
      </h1>
      <div className={`grid ${classes.destinationContainer} `}>
        <div className={classes.destinationImg}>
          <img
            src={destinationImg}
            alt={`an image of the ${currDestination}`}
          />
        </div>
        <DestinationsTabs
          tabs={destinationItems}
          onDestChange={handleOnDestChange}
        />
      </div>
    </main>
  );
}

async function loader() {
  try {
    const res = await fetch("data.json");
    const { destinations } = await res.json();
    return destinations;
  } catch (error) {
    if (typeof error === "string") {
      throw new Error(error);
    }
  }
}

export { loader as destinationLoader };
export default Destination;
