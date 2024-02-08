import type { JSX, KeyboardEventHandler } from "react";

import { useMenu } from ".";

type Props = Omit<JSX.IntrinsicElements["div"], "role">;

const Popup = ({
  children,
  onKeyDownCapture = () => undefined,
  onKeyUp = () => undefined,
  ...rest
}: Props) => {
  const context = useMenu();

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyDownCapture(event);

    switch (event.key) {
      case "End":
      case "Home": {
        event.preventDefault();
        break;
      }

      case "ArrowDown": {
        event.preventDefault();

        if (context.state.wrapping) {
          if (context.state.focusedIndex === context.state.items.length - 1) {
            moveFocusTo("first");
          } else {
            moveFocusTo("next");
          }
        } else if (
          context.state.focusedIndex !==
          context.state.items.length - 1
        ) {
          moveFocusTo("next");
        }
        break;
      }

      case "ArrowUp": {
        event.preventDefault();

        if (context.state.wrapping) {
          if (context.state.focusedIndex === 0) {
            moveFocusTo("last");
          } else {
            moveFocusTo("previous");
          }
        } else if (context.state.focusedIndex !== 0) {
          moveFocusTo("previous");
        }
        break;
      }
    }
  };

  const handleKeyUp: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyUp(event);

    switch (event.key) {
      case "ArrowDown":
      case "ArrowUp": {
        event.preventDefault();
        break;
      }

      case "End": {
        event.preventDefault();

        moveFocusTo("last");
        break;
      }

      case "Home": {
        event.preventDefault();

        moveFocusTo("first");
        break;
      }

      default: {
        if (event.key.match(/^\w/) !== null) {
          const pattern = new RegExp(`^${event.key.charAt(0)}`, "i");

          let index = findIndex(
            context.state.items,
            context.state.focusedIndex + 1,
            context.state.items.length,
            (item) => item.match(pattern) !== null,
          );

          if (index === -1) {
            index = findIndex(
              context.state.items,
              0,
              context.state.focusedIndex,
              (item) => item.match(pattern) !== null,
            );
          }

          if (index !== -1) {
            context.setState((state) => ({
              ...state,
              focusedIndex: index,
            }));
          }
        }
        break;
      }
    }
  };

  const findIndex = (
    items: string[],
    startIndex: number,
    endIndex: number,
    predicate: (item: string) => boolean,
  ) => {
    for (let index = startIndex; index < endIndex; index++) {
      if (predicate(items[index])) {
        return index;
      }
    }

    return -1;
  };

  const moveFocusTo = (target: "first" | "last" | "next" | "previous") => {
    switch (target) {
      case "first": {
        context.setState((state) => ({
          ...state,
          focusedIndex: 0,
        }));
        break;
      }

      case "last": {
        context.setState((state) => ({
          ...state,
          focusedIndex: state.items.length - 1,
        }));
        break;
      }

      case "next": {
        context.setState((state) => ({
          ...state,
          focusedIndex: state.focusedIndex + 1,
        }));
        break;
      }

      case "previous": {
        context.setState((state) => ({
          ...state,
          focusedIndex: state.focusedIndex - 1,
        }));
        break;
      }
    }
  };

  return (
    context.state.expanded && (
      <div
        onKeyDownCapture={handleKeyDown}
        onKeyUp={handleKeyUp}
        role="menu"
        tabIndex={-1}
        {...rest}
      >
        {children}
      </div>
    )
  );
};

export default Popup;
