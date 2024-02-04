import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import UITabs from "../../../src/components/ui/UITabs";

describe("UITabs component", () => {
  const tabs = [
    {
      id: "tab1",
      label: "Tab 1",
      content: <div>Content for Tab 1</div>,
      containerStyle: "",
      titleStyle: "",
      contentStyle: "",
    },
    {
      id: "tab2",
      label: "Tab 2",
      content: <div>Content for Tab 2</div>,
      containerStyle: "",
      titleStyle: "",
      contentStyle: "",
    },
  ];

  it("renders all tabs with proper roles and attributes", async () => {
    render(
      <UITabs
        tabs={tabs}
        id={""}
        label={""}
        content={undefined}
        containerStyle={""}
        titleStyle={""}
        contentStyle={""}
      />,
    );
    await waitFor(() => {
      tabs.forEach((tab) => {
        const tabButton = screen.getByRole("tab", { name: tab.label });
        expect(tabButton).toBeInTheDocument();
        expect(tabButton).toHaveAttribute("aria-controls", tab.id);
        expect(tabButton).toHaveAttribute("tabIndex", "-1");
      });
    });
  });

  it("renders content of active tab with proper role and attributes", async () => {
    render(
      <UITabs
        tabs={tabs}
        id={""}
        label={""}
        content={undefined}
        containerStyle={""}
        titleStyle={""}
        contentStyle={""}
      />,
    );
    await waitFor(() => {
      const activeTabContent = screen.getByRole("tabpanel", { hidden: true });
      expect(activeTabContent).toBeInTheDocument();
      expect(activeTabContent).toHaveAttribute("aria-labelledby", tabs[0].id);
      expect(activeTabContent).toHaveAttribute("tabIndex", "0");
    });
  });

  it("switches tabs when clicked with proper aria attributes", async () => {
    render(
      <UITabs
        tabs={tabs}
        id={""}
        label={""}
        content={undefined}
        containerStyle={""}
        titleStyle={""}
        contentStyle={""}
      />,
    );
    const tab2Button = screen.getByRole("tab", { name: "Tab 2" });
    fireEvent.click(tab2Button);
    await waitFor(() => {
      expect(tab2Button).toHaveAttribute("aria-selected", "true");
    });
    await waitFor(() => {
      expect(screen.getByRole("tabpanel", { hidden: true })).toHaveAttribute(
        "aria-labelledby",
        tabs[1].id,
      );
    });
  });

  it("switches tabs with arrow keys with proper aria attributes", async () => {
    render(
      <UITabs
        tabs={tabs}
        id={""}
        label={""}
        content={undefined}
        containerStyle={""}
        titleStyle={""}
        contentStyle={""}
      />,
    );
    const tab1Button = screen.getByRole("tab", { name: "Tab 1" });
    fireEvent.keyDown(tab1Button, { key: "ArrowRight" });
    await waitFor(() => {
      expect(screen.getByRole("tab", { name: "Tab 2" })).toHaveAttribute(
        "aria-selected",
        "true",
      );
    });
    await waitFor(() => {
      expect(screen.getByRole("tabpanel", { hidden: true })).toHaveAttribute(
        "aria-labelledby",
        tabs[1].id,
      );
    });
  });

  it("renders content of active tab", async () => {
    render(
      <UITabs
        tabs={tabs}
        id={""}
        label={""}
        content={undefined}
        containerStyle={""}
        titleStyle={""}
        contentStyle={""}
      />,
    );
    await waitFor(() => {
      expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
    });
  });

  it("switches tabs when clicked", async () => {
    render(
      <UITabs
        tabs={tabs}
        id={""}
        label={""}
        content={undefined}
        containerStyle={""}
        titleStyle={""}
        contentStyle={""}
      />,
    );
    const tab2Button = screen.getByRole("tab", { name: "Tab 2" });
    fireEvent.click(tab2Button);
    await waitFor(() => {
      expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
    });
  });

  it("switches tabs with arrow keys", async () => {
    render(
      <UITabs
        tabs={tabs}
        id={""}
        label={""}
        content={undefined}
        containerStyle={""}
        titleStyle={""}
        contentStyle={""}
      />,
    );
    const tab1Button = screen.getByRole("tab", { name: "Tab 1" });
    fireEvent.keyDown(tab1Button, { key: "ArrowRight" });
    await waitFor(() => {
      expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
    });
  });
});
