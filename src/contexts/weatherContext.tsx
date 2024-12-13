import { getCurrentHourlyWeather, getCurrentWeather, IWeatherAPIResponse } from "@/services/api/weatherAPI"
import { createContext, useContext, useEffect, useState } from "react"
import { locationContext } from "./locationContext"

interface contextProps {
  currentWeather: IWeatherAPIResponse
  setCurrentWeather: React.Dispatch<React.SetStateAction<IWeatherAPIResponse>>
  hourlyWeather: IWeatherAPIResponse
}

export const weatherContext = createContext<contextProps>({} as contextProps)

export function WeatherContextProvider({ children }: {
  children: JSX.Element,
}) {
  const { selectedCity } = useContext(locationContext)
  const [currentWeather, setCurrentWeather] = useState<IWeatherAPIResponse>({} as IWeatherAPIResponse)
  const [hourlyWeather, setHourlyWeather] = useState<IWeatherAPIResponse>({} as IWeatherAPIResponse)

  useEffect(() => {
    loadWeather()
  }, [selectedCity])

  async function loadWeather() {
    const weather = await getCurrentWeather(selectedCity)
    setCurrentWeather(weather)
    const hourly = await getCurrentHourlyWeather(selectedCity)
    setHourlyWeather(hourly)
    console.log(hourly)
  }

  return (
    <weatherContext.Provider value={{ currentWeather, setCurrentWeather, hourlyWeather }}>
      {children}
    </weatherContext.Provider>
  )
}