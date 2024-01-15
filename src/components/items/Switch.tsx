import React, { useState } from "react";

interface SwitchProps {
  label: string;
  defaultChecked?: boolean;
  onChange: (isChecked: boolean) => void;
}

const Switch: React.FC<SwitchProps> = ({
  label,
  defaultChecked = false,
  onChange,
}) => {
  const [isChecked, setChecked] = useState(defaultChecked);

  const handleToggle = () => {
    const newCheckedState = !isChecked;
    setChecked(newCheckedState);
    onChange(newCheckedState);
  };

  return (
    <div className="flex items-center space-x-2 p-6">
      <label className="text-md text-white font-semibold">{label}</label>
      <div
        className={`relative w-10 h-6 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring hover:ring ${
          isChecked ? "bg-green-500" : "bg-gray-400"
        }`}
        onClick={handleToggle}
        onKeyPress={(e) => {
          if (e.key === " " || e.key === "Enter") {
            handleToggle();
          }
        }}
        role="switch"
        aria-checked={isChecked}
        tabIndex={0}
      >
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform ${
            isChecked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </div>
      <span
        className={`text-md text-gray-400 font-semibold ${
          isChecked ? "hidden" : "block"
        }`}
        aria-hidden="true"
      >
        Off
      </span>
      <span
        className={`text-md text-green-500 font-semibold ${
          isChecked ? "block" : "hidden"
        }`}
        aria-hidden="true"
      >
        On
      </span>
    </div>
  );
};

export default Switch;
