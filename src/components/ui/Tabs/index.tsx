import {
  createContext,
  useContext,
  useEffect,
  // useRef,
  useState,
  type Dispatch,
  type JSX,
  type SetStateAction,
} from "react";

import List from "./List";
import Panel, { type State as PanelState } from "./Panel";
import Tab, { type State as TabState } from "./Tab";

type Context = {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
} | null;

type Props = JSX.IntrinsicElements["div"];

type State = {
  tabs: Tab[];
};

type Tab = {
  panel: {
    id: string;
    panelId: string;
    setState: Dispatch<SetStateAction<PanelState>>;
  };
  tab: {
    id: string;
    setState: Dispatch<SetStateAction<TabState>>;
    tabId: string;
  };
};

const TabsContext = createContext<Context>(null);

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (context === null) {
    throw new Error("This component must be used inside the Tabs component");
  }

  return context;
};

const Tabs = ({ children, ...rest }: Props) => {
  const [state, setState] = useState<State>({ tabs: [] });

  // const [activeTab, setActiveTab] = useState<string | null>(null);
  // const tabListRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (tabListRef.current) {
  //     const tabs = tabListRef.current.querySelectorAll('[role="tab"]');
  //     if (tabs.length > 0) {
  //       (tabs[0] as HTMLButtonElement).focus();
  //       setActiveTab(tabs[0].getAttribute("aria-controls"));
  //     }
  //   }
  // }, []);

  // const handleTabClick = (tabId: string) => {
  //   setActiveTab(tabId);
  // };

  // const handleKeyDown = (event: React.KeyboardEvent) => {
  //   const index = tabs.findIndex((tab) => tab.id === activeTab);
  //   const lastIndex = tabs.length - 1;

  //   switch (event.key) {
  //     case "ArrowRight":
  //       event.preventDefault();
  //       setActiveTab(tabs[(index + 1) % tabs.length].id);
  //       break;
  //     case "ArrowLeft":
  //       event.preventDefault();
  //       setActiveTab(tabs[(index - 1 + tabs.length) % tabs.length].id);
  //       break;
  //     case "Home":
  //       event.preventDefault();
  //       setActiveTab(tabs[0].id);
  //       break;
  //     case "End":
  //       event.preventDefault();
  //       setActiveTab(tabs[lastIndex].id);
  //       break;
  //     default:
  //       break;
  //   }
  // };

  useEffect(() => {
    // TODO
  });

  return (
    <div {...rest}>
      {/* <div role="tablist" ref={tabListRef} className={containerStyle}>
        {tabs.map((tab) => (
          <Tab
            key={tab.id}
            id={tab.id}
            active={activeTab === tab.id}
            onClick={() => handleTabClick(tab.id)}
            onKeyDown={handleKeyDown}
            tabIndex={activeTab === tab.id ? 0 : -1}
            titleStyle={titleStyle}
          >
            {tab.label}
          </Tab>
        ))}

        {tabs.map((tab) => (
          <Panel
            active={activeTab === tab.id}
            aria-labelledby={tab.id}
            contentStyle={contentStyle}
            key={tab.id}
            id={tab.id}
          >
            {tab.content}
          </Panel>
        ))}
      </div> */}

      <TabsContext.Provider value={{ state, setState }}>
        {children}
      </TabsContext.Provider>
    </div>
  );
};

Tabs.List = List;
Tabs.Panel = Panel;
Tabs.Tab = Tab;

export default Tabs;
