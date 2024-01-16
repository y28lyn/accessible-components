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
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  const handleBlur = () => {
    setIsVisible(false);
  };

  const handleFocus = () => {
    setIsVisible(true);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === " ") {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    const triggerElement = triggerRef.current;

    if (triggerElement) {
      triggerElement.addEventListener("mouseenter", handleMouseEnter);
      triggerElement.addEventListener("mouseleave", handleMouseLeave);
      triggerElement.addEventListener("blur", handleBlur);
      triggerElement.addEventListener("focus", handleFocus);
      triggerElement.addEventListener("keydown", handleKeyDown);

      return () => {
        triggerElement.removeEventListener("mouseenter", handleMouseEnter);
        triggerElement.removeEventListener("mouseleave", handleMouseLeave);
        triggerElement.removeEventListener("blur", handleBlur);
        triggerElement.removeEventListener("focus", handleFocus);
        triggerElement.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  return (
    <div className="relative inline-block">
      <div
        ref={triggerRef}
        tabIndex={0}
        aria-describedby="tooltip"
        className="inline-flex items-center justify-center ml-6 mt-6 h-6 p-6 font-medium tracking-wide bg-white text-black rounded shadow-md cursor-pointer"
      >
        {button}
      </div>

      {isVisible && (
        <div
          id="tooltip"
          role="tooltip"
          className="absolute text-center mt-2 ml-6 bg-gray-800 opacity-90 text-white p-2 rounded"
        >
          {text}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
