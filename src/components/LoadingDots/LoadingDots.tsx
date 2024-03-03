import classes from "./LoadingDots.module.css";

function LoadingDots() {
  return (
    <div className={classes.loadingDots}>
      <svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">
        <g fill="grey">
          <circle cx="10" cy="50" r="10" />
          <circle cx="40" cy="50" r="10" />
          <circle cx="70" cy="50" r="10" />
          <circle
            cx="70"
            cy="50"
            r="10"
            fill="white"
            className={classes.mainDot}
          />
        </g>
      </svg>
    </div>
  );
}

export default LoadingDots;
