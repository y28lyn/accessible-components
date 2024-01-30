import {
  createContext,
  useState,
  type Dispatch,
  type JSX,
  type KeyboardEventHandler,
  type SetStateAction,
} from "react";

import Button from "./Button";
import Item from "./Item";
import Popup from "./Popup";

type Context = {
  state: State;
  setState: Dispatch<SetStateAction<State>>;
} | null;

type Props = JSX.IntrinsicElements["div"] & {
  defaultExpanded?: boolean;
  items: string[];
  wrapping?: boolean;
};

type State = {
  expanded: boolean;
  focusedIndex: number;
  items: Props["items"];
  wrapping: Required<Props["wrapping"]>;
};

export const MenuContext = createContext<Context>(null);

const Menu = ({
  children,
  defaultExpanded = false,
  items,
  onKeyDownCapture = () => undefined,
  onKeyUp = () => undefined,
  wrapping = false,
  ...rest
}: Props) => {
  const [state, setState] = useState<State>({
    expanded: defaultExpanded,
    focusedIndex: 0,
    items,
    wrapping,
  });

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyDownCapture(event);

    if (event.key === "Escape") {
      event.preventDefault();
    }
  };

  const handleKeyUp: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyUp(event);

    if (event.key === "Escape") {
      event.preventDefault();

      setState((state) => ({
        ...state,
        expanded: false,
      }));
    }
  };

  return (
    <div
      onKeyDownCapture={handleKeyDown}
      onKeyUp={handleKeyUp}
      role="none"
      {...rest}
    >
      <MenuContext.Provider
        value={{
          state,
          setState,
        }}
      >
        {children}
      </MenuContext.Provider>
    </div>
  );
};

Menu.Button = Button;
Menu.Item = Item;
Menu.Popup = Popup;

export default Menu;
