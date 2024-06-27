import { useState } from "react";
import { TechCarousel, TechImage } from "../../components";
import { useLoaderData } from "react-router-dom";
import { TechType } from "../../types";
import classes from "./Technology.module.css";

function Technology() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const techData = useLoaderData() as TechType[];

  function handleOnTechChange(i: number) {
    setCurrentSlide(i);
  }

  return (
    <main>
      <h1 className={`heading-5 page-heading ${classes.techPageHeading}`}>
        <span>03</span> space launch 101
      </h1>
      <div className={`grid ${classes.techSectionWrapper}`}>
        <TechImage key={currentSlide} currentSlide={techData[currentSlide]} />
        <TechCarousel techData={techData} onTechChange={handleOnTechChange} />
      </div>
    </main>
  );
}

export default Technology;
