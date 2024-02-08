import { useEffect, useId, useState, type JSX } from "react";

import { useTabs } from ".";

type Props = Omit<
  JSX.IntrinsicElements["button"],
  "aria-controls" | "aria-selected" | "id" | "role" | "tabIndex"
> & {
  // active: boolean;
  // tabIndex: number;
  panelId: string;
  tabId: string;
};

export type State = {
  panelId: string;
};

const Tab = ({
  // active,
  children,
  // onClick,
  // onKeyDown,
  panelId,
  // tabIndex,
  tabId,
  ...rest
}: Props) => {
  const id = useId();

  const [state, setState] = useState<State>({
    panelId: "",
  });

  const context = useTabs();

  useEffect(() => {
    const tab = context.state.tabs.find(
      (item) => item.panel.id === panelId && item.tab.id === tabId,
    );

    if (tab !== undefined) {
      tab.panel.setState((state) => ({ ...state, tabId: id }));
      setState((state) => ({ ...state, panelId: tab.panel.id }));
    } else {
      context.setState((state) => ({
        ...state,
        tabs: context.state.tabs.toSpliced(0, 0, {
          panel: {
            id: "",
            panelId,
            setState: () => undefined,
          },
          tab: {
            id,
            setState,
            tabId,
          },
        }),
      }));
    }
  }, [context, id, panelId, tabId]);

  return (
    <button
      aria-controls={state.panelId}
      // aria-selected={active}
      // className={`${active ? "border-[1.5px] border-gray-800 rounded" : "border-0"} ${titleStyle}`}
      id={id}
      // onClick={onClick}
      // onKeyUp={onKeyDown}
      role="tab"
      // tabIndex={tabIndex}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Tab;
