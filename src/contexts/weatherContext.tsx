import { getCurrentWeather, IWeatherAPIResponse } from "@/services/api/weatherAPI"
import { createContext, useContext, useEffect, useState } from "react"
import { locationContext } from "./locationContext"

interface contextProps {
  currentWeather: IWeatherAPIResponse
  setCurrentWeather: React.Dispatch<React.SetStateAction<IWeatherAPIResponse>>
}

export const weatherContext = createContext<contextProps>({} as contextProps)

export function WeatherContextProvider({ children }: {
  children: any,
}) {
  const { selectedCity } = useContext(locationContext)
  const [currentWeather, setCurrentWeather] = useState<IWeatherAPIResponse>({} as IWeatherAPIResponse)

  useEffect(() => {
    loadWeather()
  }, [selectedCity])

  async function loadWeather() {
    const weather = await getCurrentWeather(selectedCity)
    setCurrentWeather(weather)
    console.log(weather)
  }

  return (
    <weatherContext.Provider value={{ currentWeather, setCurrentWeather }}>
      {children}
    </weatherContext.Provider>
  )
}