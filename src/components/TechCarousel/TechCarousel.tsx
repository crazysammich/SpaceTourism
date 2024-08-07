import { Carousel } from "../../lib";
import { TechType } from "../../types";
import { TechCarouselIndicator } from "./TechCarouselIndicator";
import TechCarouselItem from "./TechCarouselItem";
import classes from "./TechCarousel.module.css";
import { useEffect, useState } from "react";

interface TechCarouselProps {
  currentSlide: number;
  techData: TechType[];
  onTechChange: (index: number) => void;
}

function TechCarousel(props: TechCarouselProps) {
  const { currentSlide, techData, onTechChange } = props;
  const items = techData.map((item) => <TechCarouselItem techItem={item} />);
  const [slideDirection, setSlideDirection] = useState<
    "vertical" | "horizontal"
  >("vertical");

  function handleOnCarouselChange(i: number) {
    onTechChange(i);
  }

  useEffect(() => {
    function onPageResize(entry: ResizeObserverEntry) {
      setSlideDirection(
        entry.contentRect.width <= 1024 ? "horizontal" : "vertical"
      );
    }
    const resizeObs = new ResizeObserver((entries) => {
      entries.forEach(onPageResize);
    });
    resizeObs.observe(document.querySelector("html") as Element);
    return () => {
      resizeObs.disconnect();
    };
  }, []);

  return (
    <Carousel
      items={items}
      className={classes.techCarousel}
      currentIndexArg={currentSlide}
      direction={slideDirection}
      Indicator={TechCarouselIndicator}
      type="indicator"
      onCarouselChange={handleOnCarouselChange}
    />
  );
}

export default TechCarousel;
