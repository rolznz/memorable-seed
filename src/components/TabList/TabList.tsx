import classnames from "classnames";
import { Fragment, useState } from "react";
import { OfflineTab } from "../OfflineTab/OfflineTab";
import { TrialAndErrorTab } from "../TrialAndErrorTab/TrialAndErrorTab";

const tabs: { title: string; component: React.ReactNode }[] = [
  { title: "WEB APP OFFLINE GENERATOR", component: <OfflineTab /> }, // FIXME:
  { title: "HARDWARE WALLET TRIAL & ERROR", component: <TrialAndErrorTab /> },
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
