import classnames from "classnames";
import { Fragment, useState } from "react";
import { BrowserTab } from "../BrowserTab/BrowserTab";
import { HWTrialAndErrorTab } from "../HWTrialAndErrorTab/HWTrialAndErrorTab";

const tabs: { title: string; component: React.ReactNode }[] = [
  { title: "BROWSER WIPEABLE", component: <BrowserTab /> },
  { title: "HW TRIAL & ERROR", component: <HWTrialAndErrorTab /> },
];

export function TabList() {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  return (
    <>
      <div className="tabs tabs-boxed mb-2">
        {tabs.map((tab, index) => (
          <Fragment key={tab.title}>
            <button
              className={classnames([
                "tab tab-sm md:tab-md",
                { "tab-active": index === selectedTabIndex },
              ])}
              onClick={() => setSelectedTabIndex(index)}
            >
              {tab.title}
            </button>
          </Fragment>
        ))}
      </div>
      <div className="flex flex-col items-center gap-y-4 w-full px-4">
        {tabs[selectedTabIndex].component}
      </div>
    </>
  );
}
