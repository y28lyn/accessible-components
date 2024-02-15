import { type JSX, type KeyboardEventHandler } from "react";

import { useTabs } from ".";

type Props = Omit<
  JSX.IntrinsicElements["div"],
  "onChange" | "role" | "tabIndex"
> & {
  onChange?: (tabId: string) => void;
};

const List = ({ children, onChange = () => undefined, ...rest }: Props) => {
  const context = useTabs();

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    switch (event.key) {
      case "ArrowLeft": {
        event.preventDefault();

        context.setState((state) => {
          const index = state.tabs.findIndex(
            (tab) => tab.id === state.activeTabId,
          );

          if (index > 0) {
            return {
              ...state,
              activeTabId: state.tabs[index - 1].id,
            };
          }

          return state;
        });
        break;
      }

      case "ArrowRight": {
        event.preventDefault();

        context.setState((state) => {
          const index = state.tabs.findIndex(
            (tab) => tab.id === state.activeTabId,
          );

          if (index !== -1 && index < state.tabs.length - 1) {
            return {
              ...state,
              activeTabId: state.tabs[index + 1].id,
            };
          }

          return state;
        });
        break;
      }

      case "End":
      case "Home": {
        event.preventDefault();
      }
    }
  };

  const handleKeyUp: KeyboardEventHandler<HTMLDivElement> = (event) => {
    switch (event.key) {
      case "End": {
        event.preventDefault();

        context.setState((state) => {
          const id = state.tabs[state.tabs.length - 1].id;

          if (state.activeTabId !== id) {
            return {
              ...state,
              activeTabId: id,
            };
          }

          return state;
        });
        break;
      }

      case "Home": {
        event.preventDefault();

        context.setState((state) => {
          const id = state.tabs[0].id;

          if (state.activeTabId !== id) {
            return {
              ...state,
              activeTabId: id,
            };
          }

          return state;
        });
        break;
      }
    }
  };

  return (
    <div
      onKeyDownCapture={handleKeyDown}
      onKeyUp={handleKeyUp}
      role="tablist"
      tabIndex={-1}
      {...rest}
    >
      {children}
    </div>
  );
};

export default List;
