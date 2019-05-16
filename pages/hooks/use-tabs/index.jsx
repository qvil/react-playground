import React, { useState } from "react";

const tabs = [
  { title: "Tab 1", content: "I'm the one" },
  { title: "Tab 2", content: "I'm the two" }
];

const useTabs = (initialTab, allTabs) => {
  const [index, setIndex] = useState(initialTab);

  return {
    currentTab: allTabs[index],
    changeTab: setIndex
  };
};

function UseTabs() {
  const { currentTab, changeTab } = useTabs(0, tabs);

  return (
    <>
      <h2>Use Tabs</h2>
      {tabs.map((tab, index) => (
        <button key={index} onClick={() => changeTab(index)}>
          {tab.title}
        </button>
      ))}
      <div>{currentTab.content}</div>
    </>
  );
}

export default UseTabs;
