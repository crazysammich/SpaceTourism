import { useState } from "react";
import classes from "./DestinationsTabs.module.css";

type Tab = {
  title: string;
  content: JSX.Element | string;
};

interface DestinationsTabs {
  className?: string;
  tabs: Tab[];
  onDestChange: (dest: string) => void;
}

function DestinationsTabs({ tabs, className, onDestChange }: DestinationsTabs) {
  const [activeTab, setActiveTab] = useState(0);

  function handleOnTabClick(index: number) {
    setActiveTab(index);
    onDestChange(tabs[index].title);
  }

  return (
    <div className={`${classes.tabsContainer} ${className ? className : ""}`}>
      <ul className={classes.tabs}>
        {tabs.map((tab, i) => (
          <li
            key={i}
            className={`${classes.tab} ${
              i === activeTab ? classes.active : ""
            }`}
          >
            <button onClick={() => handleOnTabClick(i)}>{tab.title}</button>
          </li>
        ))}
      </ul>
      <div className={`${classes.tabContent}`}>{tabs[activeTab].content}</div>
    </div>
  );
}

export default DestinationsTabs;
