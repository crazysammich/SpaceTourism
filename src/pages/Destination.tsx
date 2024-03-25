import type { Destination } from "../types";
import { useLoaderData } from "react-router-dom";
import { DestinationsTabs } from "../components";
import { useState } from "react";

import classes from "./Destination.module.css";

function Destination() {
  const [currDestination, setCurrDestination] = useState("Moon");
  const destinations = useLoaderData() as Destination[];
  const destinationImg = destinations.filter(
    (dest) => dest.name === currDestination
  )[0].images.png;

  function handleOnDestChange(dest: string) {
    setCurrDestination(dest);
  }

  return (
    <main>
      <h1 className="heading-5 page-heading">
        <span>01</span> pick your destination
      </h1>
      <div className={`grid ${classes.destinationContainer} `}>
        <div
          className={`${classes.destinationImg} fade-in`}
          key={currDestination}
        >
          <img
            src={destinationImg}
            alt={`an image of the ${currDestination}`}
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
