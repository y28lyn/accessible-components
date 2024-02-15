import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type PropsWithChildren,
  type SetStateAction,
} from "react";

import List from "./List";
import Manager from "./Manager";
import Panel, { type State as PanelState } from "./Panel";
import Tab, { type State as TabState } from "./Tab";

type Context =
  | {
      state: State;
      setState: Dispatch<SetStateAction<State>>;
    }
  | undefined;

export type Panel = {
  id: string;
  panelId: string;
  tabId: string;
  setState: Dispatch<SetStateAction<PanelState>>;
};

type State = {
  activeTabId: string;
  panels: Panel[];
  tabs: Tab[];
};

export type Tab = {
  id: string;
  panelId: string;
  tabId: string;
  setState: Dispatch<SetStateAction<TabState>>;
};

const TabsContext = createContext<Context>(undefined);

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (context === undefined) {
    throw new Error("This component must be used inside the Tabs component");
  }

  return context;
};

const Tabs = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<State>({
    activeTabId: "",
    panels: [],
    tabs: [],
  });

  return (
    <TabsContext.Provider
      value={{
        state,
        setState,
      }}
    >
      {children}
    </TabsContext.Provider>
  );
};

Tabs.List = List;
Tabs.Manager = Manager;
Tabs.Panel = Panel;
Tabs.Tab = Tab;

export default Tabs;
