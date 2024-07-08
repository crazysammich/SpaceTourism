import type { TechType } from "../../types";
import { TouchEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { useTouchSwipe } from "@crazysammich/react-components-lib";
import { TechCarousel, TechImage } from "../../components";
import classes from "./Technology.module.css";

function Technology() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const techData = useLoaderData() as TechType[];
  const bind = useTouchSwipe(handleOnTouchSwipeLeft, handleOnTouchSwipeRight);

  function handleOnTouchSwipeLeft(e?: TouchEvent) {
    e?.preventDefault();
    setCurrentSlide((p) => (p === 0 ? 0 : p - 1));
  }
  function handleOnTouchSwipeRight(e?: TouchEvent) {
    e?.preventDefault();
    setCurrentSlide((p) =>
      p === techData.length - 1 ? techData.length - 1 : p + 1
    );
  }

  function handleOnTechChange(i: number) {
    setCurrentSlide(i);
  }

  return (
    <main>
      <h1 className={`heading-5 page-heading ${classes.techPageHeading}`}>
        <span>03</span> space launch 101
      </h1>
      <div className={`grid ${classes.techSectionWrapper}`}>
        <TechImage
          key={currentSlide}
          currentSlide={techData[currentSlide]}
          {...bind}
        />
        <TechCarousel
          currentSlide={currentSlide}
          techData={techData}
          onTechChange={handleOnTechChange}
        />
      </div>
    </main>
  );
}

export default Technology;
