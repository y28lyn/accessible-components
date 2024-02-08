import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import UIAccordion from "../../../src/components/ui/UIAccordion";

describe("UIAccordion component", () => {
  const accordionItems = [
    {
      id: "item1",
      label: "Item 1",
      type: "fieldset",
    },
    {
      id: "item2",
      label: "Item 2",
    },
  ];

  const accordionProps = {
    id: "accordion",
    items: accordionItems,
    fieldsetContent: <div>Fieldset content</div>,
    defaultContent: <div>Default content</div>,
    containerStyle: "accordion-container",
    buttonStyle: "accordion-button",
    labelStyle: "accordion-label",
    fieldsetStyle: "accordion-fieldset",
  };

  // TO-DO séparer les tests
  it("renders accordion items with proper attributes and content", async () => {
    render(<UIAccordion {...accordionProps} />);
    await waitFor(() => {
      accordionItems.forEach((item) => {
        const itemButton = screen.getByRole("button", { name: item.label });
        expect(itemButton).toBeInTheDocument();
        expect(itemButton).toHaveAttribute("aria-expanded", "false");
        expect(itemButton).toHaveAttribute("aria-controls", item.id);
        fireEvent.click(itemButton);
        expect(itemButton).toHaveAttribute("aria-expanded", "true");
        const itemContent = screen.getByRole("region", { name: item.label });
        expect(itemContent).toBeInTheDocument();
        if (item.type === "fieldset") {
          expect(itemContent).toContainHTML("<fieldset");
        } else {
          expect(itemContent).toContainHTML("<div");
        }
      });
    });
  });

  // TO-DO séparer les tests
  it("toggles accordion items when clicked", async () => {
    render(<UIAccordion {...accordionProps} />);
    await waitFor(() => {
      accordionItems.forEach((item) => {
        const itemButton = screen.getByRole("button", { name: item.label });
        fireEvent.click(itemButton);
        expect(itemButton).toHaveAttribute("aria-expanded", "true");
        fireEvent.click(itemButton);
        expect(itemButton).toHaveAttribute("aria-expanded", "false");
      });
    });
  });
});
