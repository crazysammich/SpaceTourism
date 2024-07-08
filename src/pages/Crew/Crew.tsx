import { useLoaderData } from "react-router-dom";
import { CrewCarousel, CrewImage } from "../../components";
import { CrewType } from "../../types";
import { TouchEvent, useState } from "react";
import classes from "./Crew.module.css";
import { useTouchSwipe } from "@crazysammich/react-components-lib";

function Crew() {
  const crew = useLoaderData() as CrewType[];
  const [currentSlide, setCurrentSlide] = useState(0);
  const bind = useTouchSwipe(handleOnTouchSwipeLeft, handleOnTouchSwipeRight);

  function handleOnTouchSwipeLeft(e?: TouchEvent) {
    e?.preventDefault();
    setCurrentSlide((p) => (p === 0 ? 0 : p - 1));
  }
  function handleOnTouchSwipeRight(e?: TouchEvent) {
    e?.preventDefault();
    setCurrentSlide((p) => (p === crew.length - 1 ? crew.length - 1 : p + 1));
  }

  function handleOnCrewChange(i: number) {
    setCurrentSlide(i);
  }

  return (
    <main>
      <h1 className="heading-5 page-heading">
        <span>02</span> meet your crew
      </h1>
      <div className={`grid ${classes.crewSectionWrapper}`}>
        <CrewCarousel
          crew={crew}
          currentSlide={currentSlide}
          onCrewChange={handleOnCrewChange}
        />
        <CrewImage
          key={currentSlide}
          currentCrew={crew[currentSlide]}
          {...bind}
        />
      </div>
    </main>
  );
}

export default Crew;
