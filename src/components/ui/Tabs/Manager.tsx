import { useEffect, type PropsWithChildren } from "react";

import { useTabs } from ".";

const Manager = ({ children }: PropsWithChildren) => {
  const context = useTabs();

  // const context = {
  //   activeTabId: ":r0:",
  //   tabs: [
  //     {
  //       id: ":r0:",
  //       panelId: "panel1",
  //       tabId: "tab1",
  //       // setState,
  //     },
  //     {
  //       id: ":r0:",
  //       panelId: "panel2",
  //       tabId: "tab2",
  //       // setState,
  //     },
  //   ],
  //   panels: [
  //     {
  //       id: ":r1:",
  //       panelId: "panel1",
  //       tabId: "tab1",
  //       // setState,
  //     },
  //     {
  //       id: ":r1:",
  //       panelId: "panel2",
  //       tabId: "tab2",
  //       // setState,
  //     },
  //   ],
  // };

  useEffect(() => {
    for (const tab of Object.values(context.state.tabs)) {
      tab.setState((state) => {
        const panel = context.state.panels.find(
          (panel) => panel.panelId === tab.panelId,
        );

        const active = tab.id === context.state.activeTabId;
        const domPanelId = panel?.id;

        if (state.controls !== domPanelId || state.selected !== active) {
          return {
            ...state,
            controls: domPanelId,
            selected: active,
          };
        }

        return state;
      });
    }

    for (const panel of Object.values(context.state.panels)) {
      panel.setState((state) => {
        const tab = context.state.tabs.find((tab) => tab.tabId === panel.tabId);

        const domTabId = tab?.id;

        if (state.labelledby !== domTabId) {
          return {
            ...state,
            labelledby: domTabId,
          };
        }

        return state;
      });
    }
  }, [context.state.activeTabId, context.state.panels, context.state.tabs]);

  return <>{children}</>;
};

export default Manager;
