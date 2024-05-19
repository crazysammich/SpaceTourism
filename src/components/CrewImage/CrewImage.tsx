import { useEffect, useState } from "react";
import { CrewType } from "../../types";
import classes from "./CrewImage.module.css";

interface CrewItemProps {
  className?: string;
  currentCrew: CrewType;
}

type CrewImgSeizesType = {
  width: number;
  height: number;
};
function CrewImage({ className, currentCrew }: CrewItemProps) {
  const [crewImgSizes, setCrewImgSizes] = useState<CrewImgSeizesType>({
    width: 0,
    height: 0,
  });
  const crewImg = new Image();
  crewImg.src = currentCrew.images.webp;

  useEffect(() => {
    crewImg.onload = () => {
      setCrewImgSizes({ width: crewImg.width, height: crewImg.height });
    };
  }, []);

  return (
    <div className={`${classes.crewImgWrapper} ${className ? className : ""}`}>
      <img
        className={`${classes.crewImg} fade-in`}
        src={crewImg.src}
        alt={`an image of ${currentCrew.role}. ${currentCrew.name}`}
        height={crewImgSizes.height}
        width={crewImgSizes.width}
        srcSet={`${crewImg.src} `}
      />
    </div>
  );
}

export default CrewImage;
