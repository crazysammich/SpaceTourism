import { Carousel } from "../../lib/";
import type { CrewType } from "../../types";
import classes from "./CrewCarousel.module.css";
import CrewCarouselItem from "./CrewCarouselItem";

interface CrewCarouselProps {
  crew: CrewType[];
  onCarouselChange: (i: number) => void;
}

function CrewCarousel({ crew, onCarouselChange }: CrewCarouselProps) {
  function handleOnIndictClick(i: number) {
    onCarouselChange(i);
  }
  const crewItems = crew.map((c) => <CrewCarouselItem key={c.name} crew={c} />);
  return (
    <Carousel
      className={classes.crewCarousel}
      items={crewItems}
      onIndictClick={handleOnIndictClick}
    />
  );
}

export default CrewCarousel;
