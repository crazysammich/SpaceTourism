import type { Destination } from "../../types";
import classes from "./DestinationItem.module.css";
interface DestinationItemProps {
  destination: Destination;
}
function DestinationItem({ destination }: DestinationItemProps) {
  return (
    <article>
      <h2 className="heading-2">{destination.name}</h2>
      <p>{destination.description}</p>
      <section className={classes.details}>
        <div>
          <h3 className={`subheading-2 ${classes.label}`}>avg. distance</h3>
          <p className="subheading-1">{destination.distance}</p>
        </div>
        <div>
          <h3 className={`subheading-2 ${classes.label}`}>est. travel time</h3>
          <p className="subheading-1">{destination.travel}</p>
        </div>
      </section>
    </article>
  );
}

export default DestinationItem;
