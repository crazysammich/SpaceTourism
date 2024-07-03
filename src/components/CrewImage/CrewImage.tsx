import { CrewType } from "../../types";
import classes from "./CrewImage.module.css";
import { Image } from "@crazysammich/react-components-lib";

interface CrewItemProps {
  className?: string;
  currentCrew: CrewType;
}

function CrewImage({ className, currentCrew }: CrewItemProps) {
  return (
    <div className={`${classes.crewImgWrapper} ${className ? className : ""}`}>
      <Image
        className={`fade-in ${classes.crewImg}`}
        src={currentCrew.images.webp}
        alt={`an image of ${currentCrew.role}. ${currentCrew.name}`}
      />
    </div>
  );
}

export default CrewImage;
