import {
  useContext,
  useEffect,
  useRef,
  type JSX,
  type KeyboardEventHandler,
  type MouseEventHandler,
} from "react";

import { MenuContext } from ".";

type Props = Omit<JSX.IntrinsicElements["div"], "aria-haspopup">;

const Button = ({
  children,
  onClick = () => undefined,
  onKeyDownCapture = () => undefined,
  onKeyUp = () => undefined,
  ...rest
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  const context = useContext(MenuContext);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    onClick(event);

    toggle();
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyDownCapture(event);

    if (
      event.key === "ArrowDown" ||
      event.key === "ArrowUp" ||
      event.key === " " ||
      event.key === "Enter"
    ) {
      event.preventDefault();
    }
  };

  const handleKeyUp: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyUp(event);

    switch (event.key) {
      case "ArrowDown": {
        event.preventDefault();

        if (!context?.state.expanded) {
          openMenu("first");
        }
        break;
      }

      case "ArrowUp": {
        event.preventDefault();

        if (!context?.state.expanded) {
          openMenu("last");
        }
        break;
      }

      case " ":
      case "Enter": {
        event.preventDefault();

        toggle();
        break;
      }
    }
  };

  const closeMenu = () => {
    ref.current?.focus();

    context?.setState((state) => ({
      ...state,
      expanded: false,
    }));
  };

  const openMenu = (focusOn: "first" | "last") => {
    context?.setState((state) => ({
      ...state,
      expanded: true,
      focusedIndex: focusOn === "first" ? 0 : state.items.length - 1,
    }));
  };

  const toggle = () => {
    if (context?.state.expanded) {
      closeMenu();
    } else {
      openMenu("first");
    }
  };

  useEffect(() => {
    if (context?.state.expanded === false) {
      ref.current?.focus();
    }
  }, [context?.state.expanded]);

  return (
    <div
      aria-expanded={context?.state.expanded}
      aria-haspopup="menu"
      onClick={handleClick}
      onKeyDownCapture={handleKeyDown}
      onKeyUp={handleKeyUp}
      ref={ref}
      role="button"
      tabIndex={0}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Button;
