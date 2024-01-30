import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, it } from "vitest";

import UISwitch from "../../../src/components/ui/UISwitch";

it("should have the switch role", () => {
  render(<UISwitch />);

  expect(screen.getByRole("switch")).toBeInTheDocument();
});

describe("Accessible name", () => {
  it("should have an accessible name set with text content", () => {
    render(<UISwitch>Nom accessible</UISwitch>);

    expect(screen.getByRole("switch")).toHaveAccessibleName("Nom accessible");
  });

  it("should have an accessible name set with aria-labelledby", () => {
    render(
      <>
        <div id="label">Nom accessible</div>
        <UISwitch aria-labelledby="label" />
      </>,
    );

    expect(screen.getByRole("switch")).toHaveAccessibleName("Nom accessible");
  });

  it("should have an accessible name set with aria-label", () => {
    render(<UISwitch aria-label="Nom accessible" />);

    expect(screen.getByRole("switch")).toHaveAccessibleName("Nom accessible");
  });
});

it("should have an accessible description set with aria-describedby", () => {
  render(
    <>
      <div id="label">Description</div>
      <UISwitch aria-describedby="label" />
    </>,
  );

  expect(screen.getByRole("switch")).toHaveAccessibleDescription("Description");
});

describe("Initial state", () => {
  it("should have the (aria-)checked attribute set to false when initial state is 'off'", () => {
    render(<UISwitch />);

    const element = screen.getByRole("switch");

    expect(element).toHaveAttribute(
      element.tagName === "INPUT" ? "checked" : "aria-checked",
      "false",
    );
  });

  it("should have the (aria-)checked attribute set to false when initial state is explicitly defined as 'off'", () => {
    render(<UISwitch defaultChecked={false} />);

    const element = screen.getByRole("switch");

    expect(element).toHaveAttribute(
      element.tagName === "INPUT" ? "checked" : "aria-checked",
      "false",
    );
  });

  it("should have the (aria-)checked attribute set to true when initial state is explicitly defined as 'on'", () => {
    render(<UISwitch defaultChecked={true} />);

    const element = screen.getByRole("switch");

    expect(element).toHaveAttribute(
      element.tagName === "INPUT" ? "checked" : "aria-checked",
      "true",
    );
  });
});

describe("Keyboard interactions", () => {
  it("should receive focus when tabbed on", async () => {
    render(<UISwitch />);

    const user = userEvent.setup();
    await user.tab();

    expect(screen.getByRole("switch")).toHaveFocus();
  });

  it("should have the (aria-)checked attribute set to true when toggled once with 'Space'", async () => {
    render(<UISwitch />);

    const element = screen.getByRole("switch");

    const user = userEvent.setup();
    await user.tab();
    await user.keyboard("{ }");

    expect(element).toHaveAttribute(
      element.tagName === "INPUT" ? "checked" : "aria-checked",
      "true",
    );
  });

  it("should have the (aria-)checked attribute set to true when toggled once with 'Enter'", async () => {
    render(<UISwitch />);

    const element = screen.getByRole("switch");

    const user = userEvent.setup();
    await user.tab();
    await user.keyboard("{Enter}");

    expect(element).toHaveAttribute(
      element.tagName === "INPUT" ? "checked" : "aria-checked",
      "true",
    );
  });

  it("should have the (aria-)checked attribute set to false when toggled twice with 'Space'", async () => {
    render(<UISwitch />);

    const element = screen.getByRole("switch");

    const user = userEvent.setup();
    await user.tab();
    await user.keyboard("{ }{ }");

    expect(element).toHaveAttribute(
      element.tagName === "INPUT" ? "checked" : "aria-checked",
      "false",
    );
  });

  it("should have the (aria-)checked attribute set to false when toggled twice with 'Enter'", async () => {
    render(<UISwitch />);

    const element = screen.getByRole("switch");

    const user = userEvent.setup();
    await user.tab();
    await user.keyboard("{Enter}{Enter}");

    expect(element).toHaveAttribute(
      element.tagName === "INPUT" ? "checked" : "aria-checked",
      "false",
    );
  });
});

describe("Pointer interactions", () => {
  it("should have the (aria-)checked attribute set to true when clicked once", async () => {
    render(<UISwitch />);

    const element = screen.getByRole("switch");

    const user = userEvent.setup();
    await user.click(element);

    expect(element).toHaveAttribute(
      element.tagName === "INPUT" ? "checked" : "aria-checked",
      "true",
    );
  });

  it("should have the (aria-)checked attribute set to false when clicked twice", async () => {
    render(<UISwitch />);

    const element = screen.getByRole("switch");

    const user = userEvent.setup();
    await user.click(element);
    await user.click(element);

    expect(element).toHaveAttribute(
      element.tagName === "INPUT" ? "checked" : "aria-checked",
      "false",
    );
  });
});
