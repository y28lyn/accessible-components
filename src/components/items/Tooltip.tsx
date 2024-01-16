import { useState, useRef, useEffect } from "react";

interface TooltipProps {
  text: string;
  button: string;
}

const Tooltip: React.FC<TooltipProps> = ({ text, button }) => {
  const [isVisible, setIsVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsVisible(true);
    addKeyListener();
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
    removeKeyListener();
  };

  const handleBlur = () => {
    setIsVisible(false);
    removeKeyListener();
  };

  const handleFocus = () => {
    setIsVisible(true);
    addKeyListener();
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === " ") {
      setIsVisible(false);
      removeKeyListener();
    }
  };

  const addKeyListener = () => {
    document.addEventListener("keydown", handleKeyDown);
  };

  const removeKeyListener = () => {
    document.removeEventListener("keydown", handleKeyDown);
  };

  useEffect(() => {
    return () => {
      removeKeyListener();
    };
  }, []);

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        tabIndex={0}
        aria-describedby="tooltip"
        className="inline-flex items-center justify-center ml-6 mt-6 h-6 p-6 font-medium tracking-wide bg-gray-50 text-gray-700 rounded shadow-md cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        {button}
      </div>

      {isVisible && (
        <div
          id="tooltip"
          role="tooltip"
          className="absolute text-center mt-2 ml-6 bg-gray-800 opacity-90 text-gray-50 p-2 rounded"
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
