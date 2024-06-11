import type { IndicatorProps } from "@crazysammich/react-components-lib";
import { Carousel as Cs } from "@crazysammich/react-components-lib";
import { ComponentType } from "react";

interface CarouselProps {
  items: JSX.Element[];
  className?: string;
  Indicator?: ComponentType<IndicatorProps>;
  type?: "horizontal" | "vertical";
  autoPlay?: {
    auto: boolean;
    delay?: number;
    direction?: "forward" | "backward";
  };
  onIndictClick?: (index: number) => void;
}

function Carousel({
  items,
  className,
  type,
  Indicator,
  autoPlay,
  onIndictClick,
}: CarouselProps) {
  return (
    <Cs
      className={className || ""}
      items={items}
      type={type}
      Indicator={Indicator}
      autoPlay={autoPlay}
      onIndictClick={onIndictClick}
    />
  );
}

export default Carousel;
