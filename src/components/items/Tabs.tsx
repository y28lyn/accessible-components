import UITabs from "../ui/Tabs";

const Tabs = () => {
  const tabs = [
    {
      tabId: "tab1",
      tabContent: "Tab 1",
      panelId: "panel1",
      panelContent: <div>Tab 1 contents</div>,
    },
    {
      tabId: "tab2",
      tabContent: "Tab 2",
      panelId: "panel2",
      panelContent: <div>Tab 2 contents</div>,
    },
    {
      tabId: "tab3",
      tabContent: "Tab 3",
      panelId: "panel3",
      panelContent: <div>Tab 3 contents</div>,
    },
  ];

  return (
    <section className="p-6">
      <UITabs>
        <UITabs.List className="bg-gray-50 rounded p-4">
          {tabs.map((tab) => (
            <UITabs.Tab
              // active={activeTab === tab.id}
              key={tab.tabId}
              // tabIndex={activeTab === tab.tabId ? 0 : -1}
              // className="px-4 font-semibold bg-gray-50 text-gray-700"
              panelId={tab.panelId}
              tabId={tab.tabId}
            >
              {tab.tabContent}
            </UITabs.Tab>
          ))}
        </UITabs.List>

        {tabs.map((tab) => (
          <UITabs.Panel
            // active={activeTab === tab.id}
            // className="p-4 border border-gray-800 bg-gray-50 text-gray-700"
            key={tab.panelId}
            panelId={tab.panelId}
            tabId={tab.tabId}
          >
            {tab.panelContent}
          </UITabs.Panel>
        ))}
      </UITabs>
    </section>
  );
};

export default Tabs;
