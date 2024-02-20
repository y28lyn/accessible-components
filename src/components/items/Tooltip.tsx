import { useState, type KeyboardEventHandler } from "react";

import UITooltip from "../ui/UITooltip";

type Props = {
  button: string;
  text: string;
};

const Tooltip = ({ button, text }: Props) => {
  const [visible, setVisible] = useState(false);

  const handleMouseEnter = () => {
    setVisible(true);
  };

  const handleMouseLeave = () => {
    setVisible(false);
  };

  const handleBlur = () => {
    setVisible(false);
  };

  const handleFocus = () => {
    setVisible(true);
  };

  const handleKeyUp: KeyboardEventHandler<HTMLButtonElement> = (event) => {
    if (event.key === "Escape") {
      setVisible(false);
    }
  };

  return (
    <div className="inline-block p-6">
      <button
        aria-describedby="tooltip"
        className="inline-flex items-center justify-center h-6 p-6 font-medium tracking-wide bg-gray-50 text-gray-700 rounded shadow-md cursor-pointer focus:outline-none focus:ring hover:ring"
        onBlur={handleBlur}
        onFocus={handleFocus}
        onKeyUp={handleKeyUp}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {button}
      </button>

      <UITooltip
        className="absolute text-center mt-2 bg-gray-800 opacity-90 text-gray-50 p-2 rounded"
        id="tooltip"
        visible={visible}
      >
        {text}
      </UITooltip>
    </div>
  );
};

export default Tooltip;
