import { describe, it, expect } from "vitest";

import { act, renderHook, waitFor } from "@testing-library/react";

import { useWeatherInformation } from ".";
import { FormEvent } from "react";

describe("useWeatherInformation", () => {
  it("should return default values", () => {
    const { result } = renderHook(() => useWeatherInformation(""));

    expect(result.current.convertedWeather).toEqual({
      temp: 0,
      temp_min: 0,
      temp_max: 0,
      humidity: 0,
    });
    expect(result.current.hasError).toBe(false);
    expect(result.current.isLoading).toBe(false);
    expect(result.current.weatherData).toBeNull();
  });

  it("Should return isLoading false when fetch data is done", async () => {
    const { result } = renderHook(() => useWeatherInformation(""));

    await act(async () => {
      result.current.handleSubmit({
        preventDefault: () => {},
      } as FormEvent<HTMLFormElement>);
    });

    expect(result.current.isLoading).toBe(true);

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false);
    });
  });

  it("Should return error when fetch data fails", async () => {
    const { result } = renderHook(() => useWeatherInformation(""));

    expect(result.current.hasError).toBeFalsy();

    await act(async () => {
      result.current.handleSubmit({
        preventDefault: () => {},
      } as FormEvent<HTMLFormElement>);
    });

    await waitFor(() => {
      expect(result.current.hasError).toBeTruthy();
    });
  });

  it("Should return weather data when fetch data is done with success", async () => {
    const { result } = renderHook(() => useWeatherInformation("Nevada"));

    await act(async () => {
      result.current.handleSubmit({
        preventDefault: () => {},
      } as FormEvent<HTMLFormElement>);
    });

    await waitFor(() => {
      expect(result.current.weatherData).not.toBeNull();
    });
  });
});
