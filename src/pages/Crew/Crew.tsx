import { useLoaderData } from "react-router-dom";
import { CrewCarousel, CrewImage } from "../../components";
import { CrewType } from "../../types";
import { useState } from "react";
import classes from "./Crew.module.css";

function Crew() {
  const crew = useLoaderData() as CrewType[];
  const [currentSlide, setCurrentSlide] = useState(0);

  function handleOnCarouselChange(i: number) {
    setCurrentSlide(i);
  }

  return (
    <main>
      <h1 className="heading-5 page-heading">
        <span>02</span> meet your crew
      </h1>
      <div className={`grid ${classes.crewSectionWrapper}`}>
        <CrewCarousel crew={crew} onCarouselChange={handleOnCarouselChange} />
        <CrewImage key={currentSlide} currentCrew={crew[currentSlide]} />
      </div>
    </main>
  );
}

export default Crew;
