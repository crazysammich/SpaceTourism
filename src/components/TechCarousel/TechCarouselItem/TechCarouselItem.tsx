import { TechType } from "../../../types";
import classes from "./TechCarouselItem.module.css";

interface TechCarouselItemProps {
  techItem: TechType;
}
function TechCarouselItem({ techItem }: TechCarouselItemProps) {
  return (
    <article className={classes.techCarouselItem}>
      <h2>the terminology...</h2>
      <h3 className="heading-3">{techItem.name}</h3>
      <p>{techItem.description}</p>
    </article>
  );
}

export default TechCarouselItem;
