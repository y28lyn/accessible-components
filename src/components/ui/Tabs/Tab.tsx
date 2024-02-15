import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type JSX,
  type MouseEventHandler,
} from "react";

import { useTabs } from ".";

type Props = Omit<
  JSX.IntrinsicElements["button"],
  "aria-controls" | "aria-selected" | "id" | "role" | "tabIndex"
> & {
  active?: boolean;
  panelId: string;
  tabId: string;
};

export type State = {
  controls: string | undefined;
  selected: boolean;
};

const Tab = ({
  active = false,
  children,
  onClick = () => undefined,
  panelId,
  tabId,
  ...rest
}: Props) => {
  const id = useId();

  const ref = useRef<HTMLButtonElement>(null);

  const [state, setState] = useState<State>({
    controls: undefined,
    selected: active,
  });

  const context = useTabs();

  const activate = useCallback(() => {
    context.setState((state) => {
      if (state.activeTabId !== id) {
        ref.current?.focus();

        return { ...state, activeTabId: id };
      }

      return state;
    });
  }, [context, id]);

  const registerTab = useCallback(() => {
    context.setState((state) => {
      const tab = state.tabs.find((tab) => tab.id === id);

      if (tab === undefined) {
        return {
          ...state,
          tabs: [
            ...state.tabs,
            {
              id,
              panelId,
              setState,
              tabId,
            },
          ],
        };
      }

      return state;
    });
  }, [context, id, panelId, tabId]);

  const handleClick: MouseEventHandler<HTMLButtonElement> = (event) => {
    onClick(event);

    activate();
  };

  useEffect(() => {
    if (active) {
      activate();
    }

    registerTab();
  }, []);

  return (
    <button
      aria-controls={state.controls}
      aria-selected={state.selected}
      id={id}
      onClick={handleClick}
      ref={ref}
      role="tab"
      tabIndex={state.selected ? 0 : -1}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Tab;
