import UITabs from "../ui/UITabs";

const Tabs = () => {
  const tabs = [
    {
      id: "tab1",
      label: "Tab 1",
      content: <div>Tab 1 contents</div>,
    },
    {
      id: "tab2",
      label: "Tab 2",
      content: <div>Tab 2 contents</div>,
    },
    {
      id: "tab3",
      label: "Tab 3",
      content: <div>Tab 3 contents</div>,
    },
    {
      id: "tab4",
      label: "Tab 4",
      content: <div>Tab 4 contents</div>,
    },
  ];

  return (
    <section className="p-6">
      <UITabs
        containerStyle="bg-gray-50 rounded p-4"
        contentStyle="p-4 border border-gray-800 bg-gray-50 text-gray-700"
        titleStyle="px-4 font-semibold bg-gray-50 text-gray-700"
        tabs={tabs}
      />
    </section>
  );
};

export default Tabs;
