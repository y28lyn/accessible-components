import { useCallback, useEffect, useId, useState, type JSX } from "react";

import { useTabs } from ".";

type Props = Omit<
  JSX.IntrinsicElements["div"],
  "aria-label" | "aria-labelledby" | "id" | "role"
> & {
  panelId: string;
  tabId: string;
};

export type State = {
  labelledby: string | undefined;
};

const Panel = ({ children, panelId, tabId, tabIndex = 0, ...rest }: Props) => {
  const id = useId();

  const [state, setState] = useState<State>({
    labelledby: undefined,
  });

  const context = useTabs();

  const tab = context.state.tabs.find((tab) => tab.tabId === tabId);

  const registerPanel = useCallback(() => {
    context.setState((state) => {
      const panel = state.panels.find((panel) => panel.id === id);

      if (panel === undefined) {
        return {
          ...state,
          panels: [
            ...state.panels,
            {
              id,
              panelId,
              tabId,
              setState,
            },
          ],
        };
      }

      return state;
    });
  }, [context, id, panelId, tabId]);

  useEffect(() => {
    registerPanel();
  }, []);

  return (
    <div
      aria-labelledby={state.labelledby}
      hidden={tab?.id !== context.state.activeTabId}
      id={id}
      role="tabpanel"
      tabIndex={tabIndex}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Panel;
