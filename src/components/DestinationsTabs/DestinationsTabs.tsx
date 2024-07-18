import { useState } from "react";
import type { DestinationType } from "../../types";
import classes from "./DestinationsTabs.module.css";
import { DestinationItem } from "./DestinationItem";

interface DestinationsTabs {
  className?: string;
  destinations: DestinationType[];
  onDestChange: (dest: string) => void;
}

function DestinationsTabs({
  className,
  destinations,
  onDestChange,
}: DestinationsTabs) {
  const [activeTab, setActiveTab] = useState(0);
  const destinationItems = destinations.map((dest) => {
    return {
      title: dest.name,
      content: <DestinationItem key={dest.name} destination={dest} />,
    };
  });

  function handleOnTabClick(index: number) {
    setActiveTab(index);
    onDestChange(destinationItems[index].title);
  }

  return (
    <div className={`${classes.tabsContainer} ${className ? className : ""}`}>
      <ul className={classes.tabs}>
        {destinationItems.map((tab, i) => (
          <li
            key={tab.title}
            className={`border-expand ${classes.tab} ${
              i === activeTab ? "active" : ""
            }`}
          >
            <button onClick={() => handleOnTabClick(i)}>{tab.title}</button>
          </li>
        ))}
      </ul>
      <div className={`${classes.tabContent}`}>
        {destinationItems[activeTab].content}
      </div>
    </div>
  );
}

export default DestinationsTabs;
