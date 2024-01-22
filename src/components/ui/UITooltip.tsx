import { useState, useRef, useEffect } from "react";

type TooltipProps = {
  text: string;
  button: string;
  buttonStyle: string;
  bubbleStyle: string;
};

const UITooltip = ({
  text,
  button,
  buttonStyle,
  bubbleStyle,
}: TooltipProps) => {
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
    <>
      <div
        aria-describedby="tooltip"
        className={buttonStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onFocus={handleFocus}
        onBlur={handleBlur}
        ref={triggerRef}
        tabIndex={0}
      >
        {button}
      </div>

      {isVisible && (
        <div id="tooltip" role="tooltip" className={bubbleStyle}>
          {text}
        </div>
      )}
    </>
  );
};

export default UITooltip;
