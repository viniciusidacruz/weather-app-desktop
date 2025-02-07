import { Temperature } from "./types";

/**
 * Converte temperatura de Kelvin para Celsius e Fahrenheit.
 * @param kelvin Temperatura em Kelvin
 * @returns Objeto contendo a temperatura em Celsius e Fahrenheit
 */
export const convertKelvinToCelsiusAndFahrenheit = (
  kelvin: number | undefined
): Temperature => {
  if (!kelvin) {
    return {
      celsius: 0,
      fahrenheit: 0,
    };
  }

  return {
    celsius: Math.round((kelvin - 273.15) * 100) / 100,
    fahrenheit: Math.round((((kelvin - 273.15) * 9) / 5 + 32) * 100) / 100,
  };
};
