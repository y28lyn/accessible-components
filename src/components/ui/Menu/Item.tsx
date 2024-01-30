import {
  useContext,
  useEffect,
  useRef,
  type JSX,
  type KeyboardEventHandler,
  type MouseEventHandler,
} from "react";

import { MenuContext } from ".";

type Props = Omit<JSX.IntrinsicElements["div"], "role" | "tabIndex"> & {
  disabled?: boolean;
  index: number;
};

const Item = ({
  children,
  disabled = false,
  index,
  onClick = () => undefined,
  onKeyDownCapture = () => undefined,
  onKeyUp = () => undefined,
  ...rest
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const context = useContext(MenuContext);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    onClick(event);

    closeMenu();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyDownCapture(event);

    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
    }
  };

  const handleKeyUp: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyUp(event);

    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();

      closeMenu();
    }
  };

  const closeMenu = () => {
    context?.setState((state) => ({
      ...state,
      expanded: false,
    }));
  };

  useEffect(() => {
    if (context?.state.focusedIndex === index) {
      ref.current?.focus();
    }
  }, [context?.state.focusedIndex, index]);

  return (
    <div
      aria-disabled={disabled}
      onClick={handleClick}
      onKeyDownCapture={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={ref}
      role="menuitem"
      tabIndex={-1}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Item;
