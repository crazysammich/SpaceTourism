import { Carousel as Cs } from "@ravenwaven/react-components-lib";
import { ComponentType } from "react";
import type { IndicatorProps } from "@ravenwaven/react-components-lib";

interface CarouselProps {
  className?: string;
  items: JSX.Element[];
  Indicator?: ComponentType<IndicatorProps>;
}

function Carousel({ className, items, Indicator }: CarouselProps) {
  return (
    <>
      <Cs
        className={className ? className : ""}
        items={items}
        Indicator={Indicator}
      />
    </>
  );
}

export default Carousel;
