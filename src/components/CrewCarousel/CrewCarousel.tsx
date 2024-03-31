import Carousel from "../../lib/";
import type { CrewType } from "../../types";
import classes from "./CrewCarousel.module.css";
import { CrewCarouselItem } from "./CrewCarouselItem";

interface CrewCarouselProps {
  crew: CrewType[];
}

function CrewCarousel({ crew }: CrewCarouselProps) {
  const crewItems = crew.map((c) => (
    <CrewCarouselItem
      key={c.name}
      name={c.name}
      role={c.role}
      image={c.images.png}
      bio={c.bio}
    />
  ));
  return <Carousel className={classes.crewCarousel} items={crewItems} />;
}

export default CrewCarousel;
