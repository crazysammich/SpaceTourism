import { Carousel } from "../../lib";
import { TechType } from "../../types";
import { TechCarouselIndicator } from "./TechCarouselIndicator";
import TechCarouselItem from "./TechCarouselItem";
import classes from "./TechCarousel.module.css";
import { useEffect, useState } from "react";

interface TechCarouselProps {
  techData: TechType[];
  onTechChange: (index: number) => void;
}

function TechCarousel({ techData, onTechChange }: TechCarouselProps) {
  const items = techData.map((item) => <TechCarouselItem techItem={item} />);
  const [carouselType, setCarouselType] = useState<"vertical" | "horizontal">(
    "vertical"
  );

  function handleOnCarouselChange(i: number) {
    onTechChange(i);
  }

  useEffect(() => {
    function onPageResize(entry: ResizeObserverEntry) {
      setCarouselType(
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
      type={carouselType}
      className={classes.techCarousel}
      items={items}
      Indicator={TechCarouselIndicator}
      onIndictClick={handleOnCarouselChange}
    />
  );
}

export default TechCarousel;
