"use server"
interface WeatherData {
  hourly_units: {
    temperature_2m: string
    relative_humidity_2m: string
    apparent_temperature: string
    precipitation_probability: string
    weather_code: string
    wind_speed_10m: string
    surface_pressure: string
    uv_index: string
  }
  hourly: {
    time: string[] // "YYYY-MM-DDTHH:MM"
    temperature_2m: number[]
    relative_humidity_2m: number[]
    apparent_temperature: number[]
    precipitation_probability: number[]
    weather_code: number[]
    wind_speed_10m: number[]
    surface_pressure: number[]
    uv_index: number[]
  }
}

interface GetWeekHourlyWeatherProps {
  lat: number,
  lon: number,
}

export async function getWeekHourlyWeather(location: GetWeekHourlyWeatherProps) {
  try {
    const res = (await (await fetch(`${process.env.NEXT_PUBLIC_WEATHER_URL}/forecast?latitude=${location.lat}&longitude=${location.lon}&hourly=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m,surface_pressure,uv_index&start_date=${getStartOfWeekDate()}&end_date=${getEndOfWeekDate()}`)).json()) as WeatherData

    return {
      sunday: getDayValues({ weekDay: 0, ...res }),
      monday: getDayValues({ weekDay: 1, ...res }),
      tuesday: getDayValues({ weekDay: 2, ...res }),
      wednesday: getDayValues({ weekDay: 3, ...res }),
      thursday: getDayValues({ weekDay: 4, ...res }),
      friday: getDayValues({ weekDay: 5, ...res }),
      saturday: getDayValues({ weekDay: 6, ...res }),
      units: {
        temperature: res.hourly_units.temperature_2m,
        humidity: res.hourly_units.relative_humidity_2m,
        apparent_temperature: res.hourly_units.apparent_temperature,
        precipitation: res.hourly_units.precipitation_probability,
        weather_code: res.hourly_units.weather_code,
        wind_speed: res.hourly_units.wind_speed_10m,
        surface_pressure: res.hourly_units.surface_pressure,
        uv_index: res.hourly_units.uv_index,
      }
    }
  } catch (error) {
    console.log(error)
    return "Desculpe! Não conseguimos carregar o clima deste local."
  }
}

function getDayValues({ weekDay, hourly }: { weekDay: 0 | 1 | 2 | 3 | 4 | 5 | 6 } & WeatherData) {
  return {
    time: hourly.time.slice(weekDay === 0 ? 0 : (weekDay * 24) + 1, weekDay === 0 ? 24 : (weekDay + 1) * 24),
    temperature: hourly.temperature_2m.slice(weekDay === 0 ? 0 : (weekDay * 24) + 1, weekDay === 0 ? 24 : (weekDay + 1) * 24),
    humidity: hourly.relative_humidity_2m.slice(weekDay === 0 ? 0 : (weekDay * 24) + 1, weekDay === 0 ? 24 : (weekDay + 1) * 24),
    apparent_temperature: hourly.apparent_temperature.slice(weekDay === 0 ? 0 : (weekDay * 24) + 1, weekDay === 0 ? 24 : (weekDay + 1) * 24),
    precipitation: hourly.precipitation_probability.slice(weekDay === 0 ? 0 : (weekDay * 24) + 1, weekDay === 0 ? 24 : (weekDay + 1) * 24),
    weather_code: hourly.weather_code.slice(weekDay === 0 ? 0 : (weekDay * 24) + 1, weekDay === 0 ? 24 : (weekDay + 1) * 24),
    wind_speed: hourly.wind_speed_10m.slice(weekDay === 0 ? 0 : (weekDay * 24) + 1, weekDay === 0 ? 24 : (weekDay + 1) * 24),
    surface_pressure: hourly.surface_pressure.slice(weekDay === 0 ? 0 : (weekDay * 24) + 1, weekDay === 0 ? 24 : (weekDay + 1) * 24),
    uv_index: hourly.uv_index.slice(weekDay === 0 ? 0 : (weekDay * 24) + 1, weekDay === 0 ? 24 : (weekDay + 1) * 24),
  }
}

function getStartOfWeekDate() {
  const today = new Date()
  const day = today.getDay()
  return new Date(new Date(today.setDate(today.getDate() - day)).setHours(0)).toISOString().split("T")[0]
}

function getEndOfWeekDate() {
  const today = new Date()
  const day = today.getDay()
  return new Date(new Date(today.setDate(today.getDate() + (6 - day))).setHours(0)).toISOString().split("T")[0]
}
