import { cn } from "../../utils/cn";

const BombSelection = ({
  showBombSelection,
  bombCound,
  setBombCound,
  setShowBombSelection,
}) => {
  return (
    <div className={cn("custom_selector_cl", showBombSelection && "active")}>
      <ul>
        {Array.from({ length: 24 }).map((_, index) => {
          return (
            <li
              onClick={() => {
                setBombCound(index + 1);
                setShowBombSelection(false);
              }}
              key={index}
            >
              <div
                className={cn(
                  "custom_selector_item",
                  bombCound === index + 1 && "active"
                )}
              >
                {index + 1}
                <img
                  src="data:image/svg+xml,%3csvg%20width='16'%20height='17'%20viewBox='0%200%2016%2017'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.36643%2012.2166C6.27754%2012.2166%206.19421%2012.2026%206.11643%2012.1746C6.03865%2012.1466%205.96643%2012.0995%205.89976%2012.0333L3.0331%209.1666C2.91088%209.04438%202.85243%208.88593%202.85776%208.69127C2.8631%208.4966%202.9271%208.33838%203.04976%208.2166C3.17199%208.09438%203.32754%208.03327%203.51643%208.03327C3.70532%208.03327%203.86088%208.09438%203.9831%208.2166L6.36643%2010.5999L12.0164%204.94993C12.1386%204.82771%2012.2971%204.7666%2012.4917%204.7666C12.6864%204.7666%2012.8446%204.82771%2012.9664%204.94993C13.0886%205.07216%2013.1497%205.2306%2013.1497%205.42527C13.1497%205.61993%2013.0886%205.77816%2012.9664%205.89994L6.8331%2012.0333C6.76643%2012.0999%206.69421%2012.1473%206.61643%2012.1753C6.53865%2012.2033%206.45532%2012.217%206.36643%2012.2166Z'%20fill='%23FFDDAC'/%3e%3c/svg%3e"
                  alt="tick img"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BombSelection;
