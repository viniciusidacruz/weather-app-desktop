import { APIKey } from "../../constants";
import { WeatherResponse } from "../../interfaces/weather-response";

export class OpenWeatherService {
  async findCity(city: string): Promise<WeatherResponse> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metrics&appid=${APIKey}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }
}
