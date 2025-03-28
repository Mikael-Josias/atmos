"use client"

import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { useLocationContext } from "./LocationContext"
import { getWeekHourlyWeather } from "../services/WeatherAPI"
import { useToast } from "@/hooks/use-toast"

export interface WeatherHourly {
  time: string[]
  temperature: number[]
  humidity: number[]
  apparent_temperature: number[]
  precipitation: number[]
  weather_code: number[]
  wind_speed: number[]
  surface_pressure: number[]
  uv_index: number[]
  is_day: number[]
}
interface WeatherWeekly {
  sunday: WeatherHourly
  monday: WeatherHourly
  tuesday: WeatherHourly
  wednesday: WeatherHourly
  thursday: WeatherHourly
  friday: WeatherHourly
  saturday: WeatherHourly
  units: {
    time?: string
    temperature: string
    humidity: string
    apparent_temperature: string
    precipitation: string
    weather_code: string
    wind_speed: string
    surface_pressure: string
    uv_index: string
  }
}

interface WeatherContextProps {
  weather: WeatherWeekly | null,
  loadingWeather: boolean,
  selectedWeather: WeatherHourly | null,
  setWeather: Dispatch<SetStateAction<WeatherWeekly | null>>,
  setLoadingWeather: Dispatch<SetStateAction<boolean>>,
  setSelectedWeather: Dispatch<SetStateAction<WeatherHourly | null>>,
}

const WeatherContext = createContext<WeatherContextProps | null>(null)

export function WeatherContextProvider({ children }: { children: React.ReactNode }) {
  const { toast } = useToast()
  const { location } = useLocationContext()
  const [weather, setWeather] = useState<WeatherWeekly | null>(null)
  const [selectedWeather, setSelectedWeather] = useState<WeatherHourly | null>(null)
  const [loadingWeather, setLoadingWeather] = useState(true)

  async function getWeather() {
    if (!location) {
      setLoadingWeather(false)
      return
    }
    const res = await getWeekHourlyWeather({ lat: location?.lat, lon: location.lon })
    if (typeof res === 'string') {
      toast({ title: res })
      setLoadingWeather(false)
      return
    }
    setWeather({ ...res })
    switch (new Date().getDay()) {
      case 1:
        setSelectedWeather({ ...res.monday })
        break
      case 2:
        setSelectedWeather({ ...res.tuesday })
        break
      case 3:
        setSelectedWeather({ ...res.wednesday })
        break
      case 4:
        setSelectedWeather({ ...res.thursday })
        break
      case 5:
        setSelectedWeather({ ...res.friday })
        break
      case 6:
        setSelectedWeather({ ...res.saturday })
        break
      default:
        setSelectedWeather({ ...res.sunday })
        break
    }
    setLoadingWeather(false)
  }

  useEffect(() => {
    setLoadingWeather(true)
    getWeather()
  }, [location])

  return (
    <WeatherContext.Provider value={{ weather, loadingWeather, selectedWeather, setWeather, setLoadingWeather, setSelectedWeather }}>
      {children}
    </WeatherContext.Provider>
  )
}

export function useWeatherContext() {
  const weather = useContext(WeatherContext)
  if (!weather) {
    throw new Error("useWeatherContext should be within WeatherContextProvider.")
  }
  return weather
}
