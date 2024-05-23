import { Carousel as Cs } from "@crazysammich/react-components-lib";
import { ComponentType } from "react";
import type { IndicatorProps } from "@crazysammich/react-components-lib";

interface CarouselProps {
  className?: string;
  items: JSX.Element[];
  Indicator?: ComponentType<IndicatorProps>;
  autoPlay?: {
    auto: boolean;
    delay?: number;
    direction?: "forward" | "backward";
  };
  onIndictClick?: (index: number) => void;
}

function Carousel({
  className,
  items,
  Indicator,
  autoPlay,
  onIndictClick,
}: CarouselProps) {
  return (
    <Cs
      className={className ? className : ""}
      items={items}
      Indicator={Indicator}
      autoPlay={autoPlay}
      onIndictClick={onIndictClick}
    />
  );
}

export default Carousel;
