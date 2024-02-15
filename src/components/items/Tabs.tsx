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
        <UITabs.Manager>
          <UITabs.List className="bg-gray-50 rounded p-4">
            {tabs.map((tab, index) => (
              <UITabs.Tab
                active={index === 0}
                className="px-4 font-semibold bg-gray-50 text-gray-700 rounded aria-selected:border-[1.5px] aria-selected:bg-slate-400"
                key={tab.tabId}
                panelId={tab.panelId}
                tabId={tab.tabId}
              >
                {tab.tabContent}
              </UITabs.Tab>
            ))}
          </UITabs.List>

          {tabs.map((tab) => (
            <UITabs.Panel
              className="p-4 border border-gray-800 bg-gray-50 text-gray-700 rounded mt-2"
              key={tab.panelId}
              panelId={tab.panelId}
              tabId={tab.tabId}
            >
              {tab.panelContent}
            </UITabs.Panel>
          ))}
        </UITabs.Manager>
      </UITabs>
    </section>
  );
};

export default Tabs;
