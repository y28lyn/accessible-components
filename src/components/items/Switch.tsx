import { useState, type FormEventHandler } from "react";

import UISwitch from "../ui/UISwitch";

type SwitchProps = {
  defaultChecked?: boolean;
  label: string;
  onChange: (checked: boolean) => void;
};

const Switch = ({ defaultChecked = false, label, onChange }: SwitchProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const handleChange: FormEventHandler<HTMLDivElement> = () => {
    const newChecked = !checked;

    setChecked(newChecked);
    onChange(newChecked);
  };

  return (
    <div className="flex items-center space-x-2 p-6">
      <label className="text-md text-white font-semibold">{label}</label>

      <UISwitch
        className={`relative w-10 h-6 bg-gray-300 rounded-full cursor-pointer transition-all duration-300 focus:outline-none focus:ring hover:ring ${
          checked ? "bg-green-500" : "bg-gray-400"
        }`}
        defaultChecked={defaultChecked}
        onChange={handleChange}
      >
        <div
          className={`absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform duration-300 transform ${
            checked ? "translate-x-4" : "translate-x-0"
          }`}
        />
      </UISwitch>

      <span
        className={`text-md text-gray-400 font-semibold ${
          checked ? "hidden" : "block"
        }`}
        aria-hidden="true"
      >
        Off
      </span>
      <span
        className={`text-md text-green-500 font-semibold ${
          checked ? "block" : "hidden"
        }`}
        aria-hidden="true"
      >
        On
      </span>
    </div>
  );
};

export default Switch;
