import { useState } from "react";
import { CrewType } from "../../types";
import classes from "./CrewImage.module.css";
import { Image, Spinner } from "@crazysammich/react-components-lib";

interface CrewItemProps {
  className?: string;
  currentCrew: CrewType;
}

function CrewImage({ className, currentCrew, ...otherProps }: CrewItemProps) {
  const [isImgLoading, setIsImgLoading] = useState(true);

  function handleOnImgLoad() {
    setIsImgLoading(false);
  }
  return (
    <div className={`${classes.crewImgWrapper} ${className ? className : ""}`}>
      {isImgLoading && <Spinner />}
      <Image
        {...otherProps}
        className={`fade-in ${classes.crewImg}`}
        src={currentCrew.images.webp}
        alt={`an image of ${currentCrew.role}. ${currentCrew.name}`}
        onLoad={handleOnImgLoad}
      />
    </div>
  );
}

export default CrewImage;
