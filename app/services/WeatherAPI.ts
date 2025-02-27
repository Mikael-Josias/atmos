interface IWeatherCurrent {
  time: Date;
  interval: number;
  weather_code: number;
  temperature: string;
  relative_humidity: string;
  apparent_temperature: string;
  precipitation: string;
  wind_speed: string;
}

interface IWeatherHourly {
  time: Date;
  temperature: number;
  temperature_unit: string;
  apparent_temperature: number;
  apparent_temperature_unit: string;
  precipitation: number;
  precipitation_unit: string;
  precipitation_probability: number;
  precipitation_probability_unit: string;
  humidity: number;
  humidity_unit: string;
  wind_speed: number;
  wind_speed_unit: string;
}

interface IWeatherDaily {
  time: Date;
  weather_code: number;
  temperature_max: number;
  temperature_min: number;
  precipitation_probability: number;
  wind_speed: number;
  temperature_max_unit: string;
  temperature_min_unit: string;
  precipitation_probability_unit: string;
  wind_speed_unit: string;
}

export interface IWeatherFormattedData {
  timezone: {
    name: string;
    abbr: string;
  };
  current: IWeatherCurrent;
  hourly: IWeatherHourly[];
  daily: IWeatherDaily[];
}

interface IWeatherRawData {
  timezone: string;
  timezone_abbreviation: string;
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
  current_units: {
    temperature_2m: string;
    relative_humidity_2m: string;
    precipitation: string;
    wind_speed_10m: string;
    apparent_temperature: string;
  };
  hourly: {
    time: string[];
    relative_humidity_2m: number[];
    temperature_2m: number[];
    precipitation: number[];
    precipitation_probability: number[];
    apparent_temperature: number[];
    wind_speed_10m: number[];
  };
  hourly_units: {
    time: string;
    relative_humidity_2m: string;
    temperature_2m: string;
    precipitation: string;
    precipitation_probability: string;
    apparent_temperature: string;
    wind_speed_10m: string;
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_probability_max: string;
    wind_speed_10m_max: string;
  };
}

export async function getWeather({
  lat,
  lon,
  days,
}: {
  lat: number;
  lon: number;
  days: number;
}): Promise<IWeatherFormattedData | string> {
  try {
    const res = (await (
      await fetch(
        `${process.env.NEXT_PUBLIC_WEATHER_URL}/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,precipitation,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,wind_speed_10m_max&timezone=America%2FSao_Paulo&forecast_days=${days}`,
      )
    ).json()) as IWeatherRawData;
    console.log(formatHourlyData(res));
    return {
      timezone: {
        name: res.timezone,
        abbr: res.timezone_abbreviation,
      },
      current: formatCurrentData(res),
      hourly: formatHourlyData(res),
      daily: formatDailyData(res),
    };
  } catch (err) {
    console.log(err);
    return "I'm sorry, it seens we cannot get the weather of this time.";
  }
}

function formatCurrentData({
  current,
  current_units,
}: IWeatherRawData): IWeatherCurrent {
  return {
    time: new Date(current.time),
    interval: current.interval,
    weather_code: current.weather_code,
    temperature: `${current.temperature_2m} ${current_units.temperature_2m}`,
    apparent_temperature: `${current.apparent_temperature} ${current_units.apparent_temperature}`,
    relative_humidity: `${current.relative_humidity_2m} ${current_units.relative_humidity_2m}`,
    precipitation: `${current.precipitation} ${current_units.precipitation}`,
    wind_speed: `${current.wind_speed_10m} ${current_units.wind_speed_10m}`,
  };
}

function formatHourlyData({
  hourly,
  hourly_units,
}: IWeatherRawData): IWeatherHourly[] {
  return hourly.time.map((t, i) => {
    return {
      time: new Date(t),
      temperature: hourly.temperature_2m[i],
      temperature_unit: hourly_units.temperature_2m,
      apparent_temperature: hourly.apparent_temperature[i],
      apparent_temperature_unit: hourly_units.apparent_temperature,
      precipitation: hourly.precipitation[i],
      precipitation_unit: hourly_units.precipitation,
      precipitation_probability: hourly.precipitation[i],
      precipitation_probability_unit: hourly_units.precipitation,
      wind_speed: hourly.wind_speed_10m[i],
      wind_speed_unit: hourly_units.wind_speed_10m,
      humidity: hourly.relative_humidity_2m[i],
      humidity_unit: hourly_units.relative_humidity_2m,
    };
  });
}

function formatDailyData({
  daily,
  daily_units,
}: IWeatherRawData): IWeatherDaily[] {
  return daily.time.map((t, i) => {
    return {
      time: new Date(t),
      weather_code: daily.weather_code[i],
      temperature_max: daily.temperature_2m_max[i],
      temperature_max_unit: daily_units.temperature_2m_max,
      temperature_min: daily.temperature_2m_min[i],
      temperature_min_unit: daily_units.temperature_2m_min,
      precipitation_probability: daily.precipitation_probability_max[i],
      precipitation_probability_unit: daily_units.precipitation_probability_max,
      wind_speed: daily.wind_speed_10m_max[i],
      wind_speed_unit: daily_units.wind_speed_10m_max,
    };
  });
}
