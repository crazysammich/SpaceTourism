import type { IndicatorProps } from "@crazysammich/react-components-lib";
import { Carousel as Cs } from "@crazysammich/react-components-lib";
import { ComponentType, SyntheticEvent } from "react";

type OnHandlerFn<T = SyntheticEvent> = (i: number, e?: T) => void;
interface CarouselProps {
  items: JSX.Element[];
  autoPlay?: {
    auto: boolean;
    delay?: number;
    direction?: "forward" | "backward";
  };
  animationType?: "slide" | "fade";
  className?: string;
  currentIndexArg?: number;
  direction?: "horizontal" | "vertical";
  Indicator?: ComponentType<IndicatorProps>;
  type?: "controls" | "indicator" | "both";
  onCarouselChange?: (i: number) => void;
  onIndictClick?: OnHandlerFn;
  onControlsClick?: OnHandlerFn;
  onSwipe?: OnHandlerFn;
}

function Carousel(props: CarouselProps) {
  const {
    items,
    autoPlay,
    animationType,
    className,
    currentIndexArg,
    direction,
    Indicator,
    type,
    onCarouselChange,
    onIndictClick,
    onControlsClick,
    onSwipe,
  } = props;
  return (
    <Cs
      items={items}
      autoPlay={autoPlay}
      animationType={animationType}
      className={className || ""}
      currentIndexArg={currentIndexArg}
      type={type}
      direction={direction}
      Indicator={Indicator}
      onCarouselChange={onCarouselChange}
      onIndictClick={onIndictClick}
      onControlsClick={onControlsClick}
      onSwipe={onSwipe}
    />
  );
}

export default Carousel;
