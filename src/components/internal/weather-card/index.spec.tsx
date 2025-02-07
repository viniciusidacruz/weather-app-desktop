import { describe, it, expect } from "vitest";
import {
  act,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/vitest";

import { WeatherCard } from ".";

describe("WeatherCard Component", () => {
  render(<WeatherCard />);

  it("renders correctly", () => {
    expect(
      screen.getByPlaceholderText("Insira a locazalição")
    ).toBeInTheDocument();
  });

  it("renders correctly error message", async () => {
    const input = screen.getByPlaceholderText("Insira a locazalição");
    const submit = screen.getByTestId("@weather-card-search");

    expect(input).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    fireEvent.click(submit);

    await waitFor(() => {
      expect(
        screen.getByText(
          "Nenhum resultado encontrado para a localização fornecida."
        )
      ).toBeInTheDocument();
    });
  });

  it("renders correctly weather data", async () => {
    const input = screen.getByPlaceholderText("Insira a locazalição");
    const submit = screen.getByTestId("@weather-card-search");

    expect(input).toBeInTheDocument();
    expect(submit).toBeInTheDocument();

    await act(async () => {
      fireEvent.change(input, { target: { value: "Nevada" } });
    });

    fireEvent.click(submit);

    await waitFor(() => {
      expect(screen.getByText("Máxima")).toBeInTheDocument();
    });
  });
});
