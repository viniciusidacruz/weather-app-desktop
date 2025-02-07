import { WeatherResponse } from "../../../interfaces/weather-response";

export const findCityMock = (): WeatherResponse => ({
  coord: {
    lon: -46.6361,
    lat: -23.5475,
  },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01n",
    },
  ],
  base: "stations",
  main: {
    temp: 295.84,
    feels_like: 296.49,
    temp_min: 294.09,
    temp_max: 296.73,
    pressure: 1015,
    humidity: 89,
    sea_level: 1015,
    grnd_level: 926,
  },
  visibility: 10000,
  wind: {
    speed: 0,
    deg: 0,
    gust: 0,
  },
  clouds: {
    all: 0,
  },
  dt: 1738899043,
  sys: {
    type: 2,
    id: 2082654,
    country: "BR",
    sunrise: 1738918183,
    sunset: 1738965103,
  },
  timezone: -10800,
  id: 3448439,
  name: "São Paulo",
  cod: 200,
});
