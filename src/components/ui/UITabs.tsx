import { useState, useRef, useEffect } from "react";

type Tab = {
  id: string;
  label: string;
  content: React.ReactNode;
  containerStyle: string;
  titleStyle: string;
  contentStyle: string;
};

type TabsProps = {
  tabs: Tab[];
};

const UITabs = ({
  tabs,
  containerStyle,
  titleStyle,
  contentStyle,
}: TabsProps & Tab) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const tabListRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabListRef.current) {
      const tabs = tabListRef.current.querySelectorAll('[role="tab"]');
      if (tabs.length > 0) {
        (tabs[0] as HTMLButtonElement).focus();
        setActiveTab(tabs[0].getAttribute("aria-controls"));
      }
    }
  }, []);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    const index = tabs.findIndex((tab) => tab.id === activeTab);
    const lastIndex = tabs.length - 1;

    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        setActiveTab(tabs[(index + 1) % tabs.length].id);
        break;
      case "ArrowLeft":
        event.preventDefault();
        setActiveTab(tabs[(index - 1 + tabs.length) % tabs.length].id);
        break;
      case "Home":
        event.preventDefault();
        setActiveTab(tabs[0].id);
        break;
      case "End":
        event.preventDefault();
        setActiveTab(tabs[lastIndex].id);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div role="tablist" ref={tabListRef} className={containerStyle}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-controls={tab.id}
            aria-selected={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
            onKeyUp={handleKeyDown}
            tabIndex={activeTab === tab.id ? 0 : -1}
            className={`${activeTab === tab.id ? "border-[1.5px] border-gray-800 rounded" : "border-0"}
            ${titleStyle}`}
          >
            {tab.label}
          </button>
        ))}

        {tabs.map((tab) => (
          <div
            key={tab.id}
            role="tabpanel"
            aria-labelledby={tab.id}
            tabIndex={0}
            className={`${
              activeTab === tab.id ? "block" : "hidden"
            } ${contentStyle}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default UITabs;
