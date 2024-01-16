import { useState, useRef, useEffect } from "react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const tabListRef = useRef<HTMLDivElement | null>(null);

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
    <section className="p-6">
      <div
        role="tablist"
        aria-labelledby="tabs-label"
        ref={tabListRef}
        className="bg-gray-50 rounded p-4"
      >
        {tabs.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-controls={tab.id}
            aria-selected={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
            onKeyDown={handleKeyDown}
            tabIndex={activeTab === tab.id ? 0 : -1}
            className={`
            ${activeTab === tab.id ? "border-2 border-gray-800" : "border-1"}
            ${activeTab === tab.id ? "h-12" : "h-8"} px-4
            font-semibold bg-gray-50 text-gray-700
          `}
          >
            <span
              style={{
                outline: "0",
                display: "inline-block",
                border: "0",
                padding: "2px",
              }}
            >
              {tab.label}
            </span>
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
            } p-4 border border-gray-800 bg-gray-50 text-gray-700`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tabs;
