import { twMerge } from "tailwind-merge";
import { ChangeEvent, Fragment, useState } from "react";
import { MapPin, Search, Waves, Wind } from "lucide-react";

import { useWeatherInformation } from "../../../hooks";
import { IMAGE_TYPES, LABEL_TYPES } from "../../../constants";

import { Card } from "../card";
import { Input } from "../input";

export function WeatherCard() {
  const [inputValue, setInputValue] = useState("");

  const { handleSubmit, hasError, isLoading, weatherData, convertedWeather } =
    useWeatherInformation(inputValue);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <Card
      className={twMerge(
        "w-full md:w-96 relative overflow-hidden transition duration-[0.6s] ease-out"
      )}
    >
      <form onSubmit={handleSubmit}>
        <Input.Root>
          <Input.Icon icon={MapPin} />
          <Input.Field
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            placeholder="Insira a locazalição"
          />

          <button
            className="bg-blue-100 p-2 rounded-full hover:bg-blue-200 transition ease-in"
            disabled={isLoading}
          >
            <Input.Icon icon={Search} className="cursor-pointer" />
          </button>
        </Input.Root>
      </form>

      {hasError && !weatherData && (
        <div className="flex flex-col gap-4 mt-8">
          <img src="/src/assets/not-found.svg" alt="Not found localization" />

          <p className="text-center text-slate-900 text-lg">
            Nenhum resultado encontrado para a localização fornecida.
          </p>
        </div>
      )}

      {weatherData && !hasError && (
        <Fragment>
          <div className="flex flex-col gap-4 items-center">
            <img
              src={IMAGE_TYPES[weatherData.weather[0].main]}
              className="w-2xs animate-pulse"
            />

            <h1 className="text-4xl">
              {parseInt(convertedWeather.temp.toString())}°C
            </h1>

            <h2 className="mb-8 ">
              {LABEL_TYPES[weatherData.weather[0].main]}
            </h2>

            <div className="flex justify-between w-full mb-8">
              <div>
                <h3 className="text-blue-600 font-semibold">Miníma</h3>
                <span className="text-slate-950 text-2xl font-bold md:text-xl">
                  {parseInt(convertedWeather.temp_min.toString())}°C
                </span>
              </div>

              <div>
                <h3 className="text-amber-600 font-semibold">Máxima</h3>
                <span className="text-slate-950 text-2xl font-bold md:text-xl">
                  {parseInt(convertedWeather.temp_max.toString())}°C
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-between w-full">
            <div className="flex items-center gap-4">
              <Waves size={32} className="text-blue-600" />

              <div className="flex flex-col">
                <span className="font-semibold text-slate-950 text-2xl md:text-xl">
                  {convertedWeather.humidity}%
                </span>
                <span className="text-slate-800 text-xl md:text-sm">
                  Umidade
                </span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Wind size={32} className="text-blue-600" />

              <div className="flex flex-col">
                <span className="font-semibold text-slate-950 text-2xl md:text-xl">
                  {weatherData.wind.speed}Km/h
                </span>
                <span className="text-slate-800 text-xl md:text-sm">
                  Velocidade do vento
                </span>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Card>
  );
}
