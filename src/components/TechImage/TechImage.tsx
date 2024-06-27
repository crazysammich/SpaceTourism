import { Image, Spinner } from "@crazysammich/react-components-lib";
import { TechType } from "../../types";
import classes from "./TechImage.module.css";
import { useState } from "react";

interface TechImageProps {
  currentSlide: TechType;
}

function TechImage(props: TechImageProps) {
  const { currentSlide } = props;
  const [isLoading, setIsLoading] = useState(true);

  function handleOnImgLoad() {
    setIsLoading(false);
  }

  return (
    <div className={classes.techImgWrapper}>
      {isLoading && <Spinner />}
      <picture>
        <source
          media="(min-width: 1280px)"
          srcSet={currentSlide.images.portrait}
        />
        <Image
          className={`${classes.techImg} fade-in`}
          src={currentSlide.images.landscape}
          alt={`image of ${currentSlide.name}`}
          onLoad={handleOnImgLoad}
        />
      </picture>
    </div>
  );
}

export default TechImage;
