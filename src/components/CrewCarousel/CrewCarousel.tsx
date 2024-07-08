import { Carousel } from "../../lib/";
import type { CrewType } from "../../types";
import classes from "./CrewCarousel.module.css";
import CrewCarouselItem from "./CrewCarouselItem";

interface CrewCarouselProps {
  crew: CrewType[];
  currentSlide: number;
  onCrewChange: (i: number) => void;
}

function CrewCarousel({ crew, currentSlide, onCrewChange }: CrewCarouselProps) {
  const crewItems = crew.map((c) => <CrewCarouselItem key={c.name} crew={c} />);
  console.log(currentSlide);

  return (
    <Carousel
      items={crewItems}
      currentIndexArg={currentSlide}
      className={classes.crewCarousel}
      type="indicator"
      onCarouselChange={onCrewChange}
    />
  );
}

export default CrewCarousel;
