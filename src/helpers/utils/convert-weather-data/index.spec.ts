import { describe, it, expect } from "vitest";
import { convertKelvinToCelsiusAndFahrenheit } from ".";

describe("Convert Wheater Data", () => {
  it("converts temperature from Kelvin to Celsius and Fahrenheit", () => {
    const result = convertKelvinToCelsiusAndFahrenheit(293.15);

    expect(result).toEqual({ celsius: 20, fahrenheit: 68 });
  });

  it("return default value if is missing kelvin value", () => {
    const result = convertKelvinToCelsiusAndFahrenheit(undefined);

    expect(result).toEqual({ celsius: 0, fahrenheit: 0 });
  });
});
