import { useState } from "react";

interface AccordionProps {
  id: string;
  title: string;
  items: {
    id: string;
    label: string;
    type?: string;
  }[];
  fieldsetContent?: JSX.Element;
  defaultContent?: JSX.Element;
}

const Accordion: React.FC<AccordionProps> = ({
  id,
  title,
  items,
  fieldsetContent,
  defaultContent,
}) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleAccordion = (itemId: string) => {
    setExpandedItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  return (
    <section className="p-6">
      <div id={id} className="bg-gray-50 w-[15em] p-2 rounded shadow-md">
        {items.map((item) => (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={expandedItem === item.id}
                aria-controls={item.id}
                id={`${id}-${item.id}`}
                onClick={() => toggleAccordion(item.id)}
                className="inline-flex items-center justify-center text-sm font-medium rounded-md text-gray-700 bg-white hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <span className="mr-2">{item.label}</span>
                {expandedItem === item.id ? "▲" : "▼"}
              </button>
            </h3>
            <div className="h-[2px] bg-[#121315] mt-1 mb-2"></div>
            <div
              id={item.id}
              role="region"
              aria-labelledby={`${id}-${item.id}`}
              className={`${expandedItem === item.id ? "" : "hidden"}`}
            >
              {item.type === "fieldset" ? (
                <fieldset className="mb-2">{fieldsetContent}</fieldset>
              ) : (
                <div>{defaultContent}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Accordion;
