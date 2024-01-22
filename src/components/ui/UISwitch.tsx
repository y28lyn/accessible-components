import {
  useState,
  type KeyboardEventHandler,
  type MouseEventHandler,
  type JSX,
} from "react";

type Props = Omit<
  JSX.IntrinsicElements["div"],
  "aria-checked" | "onChange" | "role" | "tabIndex"
> & {
  onChange: (checked: boolean) => void;
};

const Switch = ({
  children,
  defaultChecked = false,
  onChange,
  onClick = () => undefined,
  onKeyUp = () => undefined,
  ...rest
}: Props) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleClick: MouseEventHandler<HTMLDivElement> = (event) => {
    onClick(event);
    toggle();
  };

  const handleKeyUp: KeyboardEventHandler<HTMLDivElement> = (event) => {
    onKeyUp(event);

    if (event.key === " " || event.key === "Enter") {
      toggle();
    }
  };

  const toggle = () => {
    const newChecked = !checked;

    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div
      aria-checked={checked}
      onClick={handleClick}
      onKeyUp={handleKeyUp}
      role="switch"
      tabIndex={0}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Switch;
