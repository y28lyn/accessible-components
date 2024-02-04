import UITooltip from "../../../src/components/ui/UITooltip";
import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

describe("UITooltip component", () => {
  it("renders children when visible is true", () => {
    render(<UITooltip visible={true}>Test Content</UITooltip>);
    expect(screen.getByRole("tooltip")).toBeInTheDocument();
    expect(screen.getByText("Test Content")).toBeInTheDocument();
  });

  it("does not render children when visible is false", () => {
    render(<UITooltip visible={false}>Test Content</UITooltip>);
    expect(screen.queryByRole("tooltip")).toBeNull();
  });

  it("sets role attribute to 'tooltip' when visible is true", () => {
    render(<UITooltip visible={true}>Test Content</UITooltip>);
    expect(screen.getByRole("tooltip")).toHaveAttribute("role", "tooltip");
  });
});
