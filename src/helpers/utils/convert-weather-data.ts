interface Temperature {
  celsius: number;
  fahrenheit: number;
}

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
