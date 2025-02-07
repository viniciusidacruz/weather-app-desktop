import { describe, it, expect, vi } from "vitest";
import { findCityMock } from "./__mocks__/find-city.mock";
import { WeatherResponse } from "../../interfaces/weather-response";

const MockOpenWeatherService = () => ({
  findCity: vi.fn().mockImplementation(findCityMock),
});

describe("OpenWeatherService", () => {
  it("findCity returns a WeatherResponse", async () => {
    const openWeatherService = MockOpenWeatherService();

    const weatherResponse = (await openWeatherService.findCity(
      "São Paulo"
    )) as WeatherResponse;

    expect(weatherResponse.name).toEqual("São Paulo");
  });
});
