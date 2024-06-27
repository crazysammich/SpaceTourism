import type { IndicatorProps } from "@crazysammich/react-components-lib";
import classes from "./TechCarouselIndicator.module.css";
interface TechCarouselIndicatorProps extends IndicatorProps {}

function TechCarouselIndicator(props: TechCarouselIndicatorProps) {
  const { className, index, onClick } = props;
  return (
    <button
      className={`${className || ""} ${classes.techCarouselIndic}`}
      onClick={onClick}
    >
      {index + 1}
    </button>
  );
}

export default TechCarouselIndicator;
