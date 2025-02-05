import { MapPin } from "lucide-react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { Input } from ".";

describe("Input Component", () => {
  it("renders correctly component Root", () => {
    render(
      <Input.Root>
        <h1>Hello</h1>
      </Input.Root>
    );

    expect(screen.getByText("Hello")).toBeInTheDocument();
  });

  it("renders correctly component Icon", () => {
    render(<Input.Icon icon={MapPin} />);

    expect(screen.getByTestId("@field-icon")).toBeInTheDocument();
  });

  it("renders correctly component Field", () => {
    render(<Input.Field placeholder="Digite aqui" />);

    expect(screen.getByPlaceholderText("Digite aqui")).toBeInTheDocument();
  });
});
