import type { IndicatorProps } from "@crazysammich/react-components-lib";
import { Carousel as Cs } from "@crazysammich/react-components-lib";
import { ComponentType } from "react";

interface CarouselProps {
  items: JSX.Element[];
  autoPlay?: {
    auto: boolean;
    delay?: number;
    direction?: "forward" | "backward";
  };
  animationType?: "slide" | "fade";
  className?: string;
  direction?: "horizontal" | "vertical";
  Indicator?: ComponentType<IndicatorProps>;
  type?: "controls" | "indicator" | "both";
  onIndictClick?: (index: number) => void;
}

function Carousel(props: CarouselProps) {
  const {
    items,
    autoPlay,
    animationType,
    className,
    direction,
    Indicator,
    type,
    onIndictClick,
  } = props;
  return (
    <Cs
      items={items}
      autoPlay={autoPlay}
      animationType={animationType}
      className={className || ""}
      type={type}
      direction={direction}
      Indicator={Indicator}
      onIndictClick={onIndictClick}
    />
  );
}

export default Carousel;
