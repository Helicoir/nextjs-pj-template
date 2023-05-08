import { BaseURL, ForecastAreaID } from "@/configs/API";

export type UseForecastType = {};

export const UseForecast = async function () {
  const forecastResult = await fetch(
    `${BaseURL}${ForecastAreaID.GUNMA}.json`
  ).then((r) => {
    // console.log(r);
    return r.json();
  });

  return {
    props: { forecastResult },
  };
};
