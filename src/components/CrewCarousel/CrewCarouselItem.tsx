import { CrewType } from "../../types";
import classes from "./CrewCarouselItem.module.css";

interface CrewCarouselItemProps {
  className?: string;
  crew: CrewType;
}

function CrewCarouselItem({ className, crew }: CrewCarouselItemProps) {
  return (
    <article
      className={`flex ${classes.crewCarouselItem} ${className || ""} fade-in`}
    >
      <h2 className={`heading-4 ${classes.crewRole}`}>{crew.role}</h2>
      <h3 className="heading-3">{crew.name}</h3>
      <p className={classes.crewBio}>{crew.bio}</p>
    </article>
  );
}

export default CrewCarouselItem;
