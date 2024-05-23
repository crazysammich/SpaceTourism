import { ComponentPropsWithRef, SyntheticEvent, useState } from "react";
import classes from "./Image.module.css";

interface ImageProps extends ComponentPropsWithRef<"img"> {
  alt: string;
  className?: string;
  src: string;
  height?: number;
  width?: number;
}
type ImgDimensions = { width: number; height: number };

function Image({ alt, className, src, height, width, ...props }: ImageProps) {
  const [imgDimensions, setImgDimensions] = useState<ImgDimensions>({
    width: 0,
    height: 0,
  });

  function handleOnImgLoad(e: SyntheticEvent<HTMLImageElement>) {
    const img = e.currentTarget;
    setImgDimensions({ width: img.naturalWidth, height: img.naturalHeight });
    props.onLoad && props?.onLoad(e);
  }

  return (
    <img
      className={`${classes.img} ${className || ""}`}
      src={src}
      alt={alt}
      width={width ?? imgDimensions.width}
      height={height ?? imgDimensions.height}
      onLoad={handleOnImgLoad}
      {...props}
    />
  );
}

export default Image;
