import { useEffect, useId, useState, type JSX } from "react";

import { useTabs } from ".";

type Props = Omit<
  JSX.IntrinsicElements["div"],
  "aria-labelledby" | "id" | "role" | "tabIndex"
> & {
  // active: boolean;
  // tabIndex: -1 | 0;
  panelId: string;
  tabId: string;
};

export type State = {
  tabId: string;
};

const Panel = ({ active, children, panelId, tabId, ...rest }: Props) => {
  const id = useId();

  const [state, setState] = useState<State>({
    tabId: "",
  });

  const context = useTabs();

  useEffect(() => {
    const tab = context.state.tabs.find(
      (item) => item.panel.id === panelId && item.tab.id === tabId,
    );

    if (tab !== undefined) {
      tab.tab.setState((state) => ({ ...state, panelId: id }));
      setState((state) => ({ ...state, tabId: tab.tab.id }));
    } else {
      context.setState((state) => ({
        ...state,
        tabs: context.state.tabs.toSpliced(0, 0, {
          panel: {
            id,
            panelId,
            setState,
          },
          tab: {
            id: "",
            setState: () => undefined,
            tabId,
          },
        }),
      }));
    }
  }, [context, id, panelId, tabId]);

  return (
    <div
      aria-labelledby={state.tabId}
      // className={`${active ? "block" : "hidden"} ${contentStyle}`}
      id={id}
      role="tabpanel"
      {...rest}
    >
      {children}
    </div>
  );
};

export default Panel;
