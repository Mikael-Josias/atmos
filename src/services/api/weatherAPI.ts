import axios from "axios"

const FORECAST_DAYS = 14 //documentation values
export const FORECAST_PAST_DAYS = 7 //documentation values

interface IWeatherRequestProps {
  latitude: number,
  longitude: number,
}

export interface IWeatherAPIResponse {
  latitude: number
  longitude: number
  generationtime_ms: number
  utc_offset_seconds: number
  timezone: string
  timezone_abbreviation: string
  elevation: number
  current_units: {
    time: string
    interval: string
    temperature_2m: string
    relative_humidity_2m: string
    precipitation: string
    rain: string
    weather_code: string
    wind_speed_10m: string
  }
  current: {
    time: string
    interval: number
    temperature_2m: number
    relative_humidity_2m: number
    precipitation: number
    rain: number
    weather_code: number
    wind_speed_10m: number
  }
  hourly_units: {
    time: string
    temperature_2m: string
    relative_humidity_2m: string
    rain: string
    wind_speed_10m: string
  }
  hourly: {
    time: string[]
    temperature_2m: number[]
    relative_humidity_2m: number[]
    rain: number[]
    wind_speed_10m: number[]
    precipitation_probability: number[]
  }
  daily_units: {
    time: string
    weather_code: string
    temperature_2m_max: string
    temperature_2m_min: string
    uv_index_max: string
    precipitation_sum: string
    rain_sum: string
    precipitation_hours: string
    precipitation_probability_max: string
    wind_speed_10m_max: string
    wind_gusts_10m_max: string
  }
  daily: {
    time: string[]
    weather_code: number[]
    temperature_2m_max: number[]
    temperature_2m_min: number[]
    uv_index_max: number[]
    precipitation_sum: number[]
    rain_sum: number[]
    precipitation_hours: number[]
    precipitation_probability_max: number[]
    wind_speed_10m_max: number[]
    wind_gusts_10m_max: number[]
  }
}

const axiosWeatherAPI = axios.create({
  baseURL: import.meta.env.VITE_WEATHER_API_URL,
})

export async function getCurrentWeather({ latitude, longitude }: IWeatherRequestProps) {
  try {
    const weather = await axiosWeatherAPI.get<IWeatherAPIResponse>(`v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,precipitation,rain,weather_code,wind_speed_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,uv_index_max,precipitation_sum,rain_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max&past_days=${FORECAST_PAST_DAYS}&forecast_days=${FORECAST_DAYS}`)

    return weather.data
  } catch (error) {
    throw new Error("Error while loading weather.")
  }
}

export async function getCurrentHourlyWeather({ latitude, longitude }: IWeatherRequestProps) {
  try {
    const hourlyWeather = await axiosWeatherAPI.get<IWeatherAPIResponse>(`v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,precipitation_probability,precipitation,wind_speed_10m&forecast_days=1`)

    return hourlyWeather.data
  } catch (error) {
    throw new Error("Error while loading weather.")
  }
}