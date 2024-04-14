import { Carousel as Cs } from "@ravenwaven/react-components-lib";
import { ComponentType } from "react";
import type { IndicatorProps } from "@ravenwaven/react-components-lib";

interface CarouselProps {
  className?: string;
  items: JSX.Element[];
  Indicator?: ComponentType<IndicatorProps>;
  autoPlay?: { isEnabled?: boolean; delay?: number };
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
    <>
      <Cs
        className={className ? className : ""}
        items={items}
        Indicator={Indicator}
        autoPlay={autoPlay}
        onIndictClick={onIndictClick}
      />
    </>
  );
}

export default Carousel;
