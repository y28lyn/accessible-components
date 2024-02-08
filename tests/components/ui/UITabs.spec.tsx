import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, it, expect } from "vitest";

import Tab from "../../../src/components/ui/Tabs/Tab";
import TabContent from "../../../src/components/ui/Tabs/TabContent";

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

  it("renders all tabs with proper role", async () => {
    render(
      <Tab
        key={tabs[0].id}
        id={tabs[0].id}
        label={tabs[0].label}
        active={false}
        tabIndex={-1}
        titleStyle=""
      />,
    );

    await waitFor(() => {
      const tabButton = screen.getByRole("tab", { name: tabs[0].label });

      expect(tabButton).toBeInTheDocument();
    });
  });

  it("renders all tabs with proper aria-controls", async () => {
    render(
      <Tab
        key={tabs[0].id}
        id={tabs[0].id}
        label={tabs[0].label}
        active={false}
        tabIndex={-1}
        titleStyle=""
      />,
    );

    await waitFor(() => {
      const tabButton = screen.getByRole("tab", { name: tabs[0].label });

      expect(tabButton).toHaveAttribute("aria-controls", tabs[0].id);
    });
  });

  it("renders all tabs with proper tabIndex", async () => {
    render(
      <Tab
        key={tabs[0].id}
        id={tabs[0].id}
        label={tabs[0].label}
        active={false}
        tabIndex={-1}
        titleStyle=""
      />,
    );

    await waitFor(() => {
      const tabButton = screen.getByRole("tab", { name: tabs[0].label });

      expect(tabButton).toHaveAttribute("tabIndex", "-1");
    });
  });

  it("renders content of tab with proper role", async () => {
    render(
      <TabContent
        key={tabs[0].id}
        id={tabs[0].id}
        active={true}
        content={tabs[0].content}
        contentStyle=""
      />,
    );

    await waitFor(() => {
      const activeTabContent = screen.getByRole("tabpanel", {
        hidden: true,
      });

      expect(activeTabContent).toBeInTheDocument();
    });
  });

  it("renders content of tab with proper aria-labelledby", async () => {
    render(
      <TabContent
        key={tabs[0].id}
        id={tabs[0].id}
        active={true}
        content={tabs[0].content}
        contentStyle=""
      />,
    );

    await waitFor(() => {
      const activeTabContent = screen.getByRole("tabpanel", {
        hidden: true,
      });

      expect(activeTabContent).toHaveAttribute("aria-labelledby", tabs[0].id);
    });
  });

  it("renders content of tab with proper tabIndex", async () => {
    render(
      <TabContent
        key={tabs[0].id}
        id={tabs[0].id}
        active={true}
        content={tabs[0].content}
        contentStyle=""
      />,
    );

    await waitFor(() => {
      const activeTabContent = screen.getByRole("tabpanel", {
        hidden: true,
      });

      expect(activeTabContent).toHaveAttribute("tabIndex", "0");
    });
  });

  it("switches tabs when clicked with proper aria-selected", async () => {
    render(
      <Tab
        key={tabs[1].id}
        id={tabs[1].id}
        active={false}
        label={tabs[1].label}
        tabIndex={-1}
        titleStyle=""
      />,
    );

    const tab2Button = screen.getByRole("tab", { name: tabs[1].label });

    await userEvent.click(tab2Button);

    await waitFor(() => {
      expect(tab2Button).toHaveAttribute("aria-selected", "true");
    });
  });

  it("switches tabs when clicked with proper aria-labelledby", () => {
    render(
      <TabContent
        key={tabs[1].id}
        id={tabs[1].id}
        active={true}
        content={tabs[1].content}
        contentStyle=""
      />,
    );

    const activeTabContent = screen.getByRole("tabpanel", {
      hidden: true,
    });

    expect(activeTabContent).toHaveAttribute("aria-labelledby", tabs[1].id);
  });

  it("switches tabs with arrow keys with proper aria-selected", async () => {
    render(
      <Tab
        key={tabs[1].id}
        id={tabs[1].id}
        label={tabs[1].label}
        active={false}
        tabIndex={-1}
        titleStyle=""
      />,
    );

    await userEvent.keyboard("{ArrowRight}");

    await waitFor(() => {
      expect(screen.getByRole("tab", { name: tabs[1].label })).toHaveAttribute(
        "aria-selected",
        "true",
      );
    });
  });

  it("switches tabs with arrow keys with proper aria-labelledby", async () => {
    render(
      <TabContent
        key={tabs[1].id}
        id={tabs[1].id}
        active={true}
        content={tabs[1].content}
        contentStyle=""
      />,
    );

    await userEvent.keyboard("{ArrowRight}");

    await waitFor(() => {
      expect(screen.getByRole("tabpanel", { hidden: true })).toHaveAttribute(
        "aria-labelledby",
        tabs[1].id,
      );
    });
  });

  it("renders content of active tab", async () => {
    render(
      <TabContent
        key={tabs[0].id}
        id={tabs[0].id}
        active={true}
        content={tabs[0].content}
        contentStyle=""
      />,
    );

    await waitFor(() => {
      expect(screen.getByText("Content for Tab 1")).toBeInTheDocument();
    });
  });

  it("switches tabs when clicked", async () => {
    render(
      <Tab
        key={tabs[1].id}
        id={tabs[1].id}
        label={tabs[1].label}
        active={false}
        tabIndex={-1}
        titleStyle=""
      />,
    );

    const tab2Button = screen.getByRole("tab", { name: tabs[1].label });

    await userEvent.click(tab2Button);

    await waitFor(() => {
      expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
    });
  });

  it("switches tabs with arrow keys", async () => {
    render(
      <Tab
        key={tabs[1].id}
        id={tabs[1].id}
        label={tabs[1].label}
        active={false}
        tabIndex={-1}
        titleStyle=""
      />,
    );

    await userEvent.keyboard("{ArrowRight}");

    await waitFor(() => {
      expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
    });
  });
});
