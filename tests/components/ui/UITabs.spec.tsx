import { render, screen, waitFor } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
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

  it("renders all tabs with proper role", async () => {
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
      });
    });
  });

  it("renders all tabs with proper aria-controls", async () => {
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

        expect(tabButton).toHaveAttribute("aria-controls", tab.id);
      });
    });
  });

  it("renders all tabs with proper tabIndex", async () => {
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
      tabs.forEach((tab, index) => {
        const tabButton = screen.getByRole("tab", { name: tab.label });

        if (index === 0) {
          expect(tabButton).toHaveAttribute("tabIndex", "0");
        } else {
          expect(tabButton).toHaveAttribute("tabIndex", "-1");
        }
      });
    });
  });

  it("renders content of tab with proper role", async () => {
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
      const activeTabContent = screen.getAllByRole("tabpanel", {
        hidden: true,
      });

      expect(activeTabContent.length).toBeGreaterThan(0);
    });
  });

  it("renders content of tab with proper aria-labelledby", async () => {
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
      const activeTabContents = screen.getAllByRole("tabpanel", {
        hidden: true,
      });

      activeTabContents.forEach((activeTabContent, index) => {
        expect(activeTabContent).toHaveAttribute(
          "aria-labelledby",
          tabs[index].id,
        );
      });
    });
  });

  it("renders content of tab with proper tabIndex", async () => {
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
      const activeTabContents = screen.getAllByRole("tabpanel", {
        hidden: true,
      });

      activeTabContents.forEach((activeTabContent) => {
        expect(activeTabContent).toHaveAttribute("tabIndex", "0");
      });
    });
  });

  it("switches tabs when clicked with proper aria-selected", async () => {
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

    const user = userEvent.setup();

    await user.click(tab2Button);

    await waitFor(() => {
      expect(tab2Button).toHaveAttribute("aria-selected", "true");
    });
  });

  // à corriger
  it("switches tabs when clicked with proper aria-labelledby", async () => {
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

    const user = userEvent.setup();

    await user.click(tab2Button);

    await waitFor(() => {
      const activeTabContent = screen.getByRole("tabpanel", {
        hidden: true,
        selected: true,
      });

      expect(activeTabContent).toHaveAttribute("aria-labelledby", tabs[1].id);
    });
  });

  it("switches tabs with arrow keys with proper aria-selected", async () => {
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

    const user = userEvent.setup();

    await user.keyboard("{ArrowRight}");

    await waitFor(() => {
      expect(screen.getByRole("tab", { name: "Tab 2" })).toHaveAttribute(
        "aria-selected",
        "true",
      );
    });
  });

  // à corriger
  it("switches tabs with arrow keys with proper aria-labelledby", async () => {
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

    const user = userEvent.setup();

    await user.keyboard("{ArrowRight}");

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

    const user = userEvent.setup();

    await user.click(tab2Button);

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

    const user = userEvent.setup();

    await user.keyboard("{ArrowRight}");

    await waitFor(() => {
      expect(screen.getByText("Content for Tab 2")).toBeInTheDocument();
    });
  });
});
