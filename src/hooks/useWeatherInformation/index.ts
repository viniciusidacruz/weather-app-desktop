import { FormEvent, useState } from "react";

import { OpenWeatherService } from "../../services";
import { WeatherResponse } from "../../interfaces/weather-response";
import { convertKelvinToCelsiusAndFahrenheit } from "../../helpers/utils";

export function useWeatherInformation(value: string) {
  const [hasError, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);

  const convertedWeather = {
    temp: convertKelvinToCelsiusAndFahrenheit(weatherData?.main.temp).celsius,
    temp_min: convertKelvinToCelsiusAndFahrenheit(weatherData?.main.temp_min)
      .celsius,
    temp_max: convertKelvinToCelsiusAndFahrenheit(weatherData?.main.temp_max)
      .celsius,
    humidity: weatherData?.main.humidity || 0,
  } as const;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsLoading(true);

    try {
      const data = await new OpenWeatherService().findCity(value);

      setWeatherData(data);
      setError(false);
    } catch (e) {
      console.error("Error fetching weather data:", e);

      setWeatherData(null);
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    hasError,
    isLoading,
    weatherData,
    handleSubmit,
    convertedWeather,
  };
}
