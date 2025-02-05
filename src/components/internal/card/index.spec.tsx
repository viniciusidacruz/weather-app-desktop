import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { Card } from ".";

describe("Card Component", () => {
  it("renders correctly children", () => {
    render(
      <Card>
        <h1>Hello</h1>
      </Card>
    );

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });
});
