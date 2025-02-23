export type Weather = {
  timezone: string;
  timezone_abbreviation: string;
  current_units: {
    time: string;
    interval: string;
    temperature_2m: string;
    relative_humidity_2m: string;
    precipitation: string;
    weather_code: string;
    wind_speed_10m: string;
    apparent_temperature: string;
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    precipitation: number;
    weather_code: number;
    wind_speed_10m: number;
    apparent_temperature: number;
  };
  hourly_units: {
    time: string;
    temperature_2m: string;
    precipitation: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    precipitation: number[];
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
  };
};

export async function getTodayWeather({
  lat,
  lon,
}: {
  lat: number;
  lon: number;
}) {
  try {
    const result = (
      await fetch(
        `${process.env.NEXT_PUBLIC_WEATHER_URL}/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,precipitation&daily=temperature_2m_max,temperature_2m_min&timezone=America%2FSao_Paulo&forecast_days=1`,
      )
    ).json();
    return result;
  } catch (error) {
    throw new Error("Error trying to fetch today weather data", error);
  }
}
