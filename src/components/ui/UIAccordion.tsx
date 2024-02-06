import { useState } from "react";

type AccordionProps = {
  id: string;
  items: {
    id: string;
    label: string;
    type?: string;
  }[];
  fieldsetContent?: JSX.Element;
  defaultContent?: JSX.Element;
  containerStyle: string;
  buttonStyle: string;
  labelStyle: string;
  fieldsetStyle: string;
};

const UIAccordion = ({
  id,
  items,
  fieldsetContent,
  defaultContent,
  containerStyle,
  buttonStyle,
  labelStyle,
  fieldsetStyle,
}: AccordionProps) => {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleAccordion = (itemId: string) => {
    setExpandedItem((prevItem) => (prevItem === itemId ? null : itemId));
  };

  return (
    <>
      <div id={id} className={containerStyle}>
        {items.map((item) => (
          <div key={item.id}>
            <h3>
              <button
                type="button"
                aria-expanded={expandedItem === item.id}
                aria-controls={item.id}
                id={`${id}-${item.id}`}
                onClick={() => toggleAccordion(item.id)}
                className={buttonStyle}
              >
                {expandedItem === item.id ? "▲" : "▼"}
                <span className={labelStyle}>{item.label}</span>
              </button>
            </h3>
            <div
              id={item.id}
              role="region"
              aria-labelledby={`${id}-${item.id}`}
              className={`${expandedItem === item.id ? "" : "hidden"}`}
            >
              {item.type === "fieldset" ? (
                <fieldset className={fieldsetStyle}>{fieldsetContent}</fieldset>
              ) : (
                <div>{defaultContent}</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default UIAccordion;
