import UITooltip from "../ui/UITooltip";

const Tooltip = () => {
  return (
    <div className="relative inline-block p-6">
      <UITooltip
        text="This is a tip"
        button="Hover me"
        buttonStyle="inline-flex items-center justify-center h-6 p-6 font-medium tracking-wide bg-gray-50 text-gray-700 rounded shadow-md cursor-pointer focus:outline-none focus:ring hover:ring"
        bubbleStyle="absolute text-center mt-2 bg-gray-800 opacity-90 text-gray-50 p-2 rounded"
      />
    </div>
  );
};

export default Tooltip;
