"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import CurrentWeatherSection from "./CurrentWeatherSection"
import DaysCarousel from "./DaysCarousel/DaysCarousel"
import HourlyWeatherSection from "./HourlyWeatherSection"
import AttributionSection from "./AttributionSection"
import { useWeatherContext } from "../contexts/WeatherContext"

export default function WeatherDashboard() {
  const { loadingWeather } = useWeatherContext()
  return (
    <section className="flex flex-col flex-grow gap-12 pb-12 bg-white min-w-0">
      <DaysCarousel />
      <ScrollArea>
        <div className="flex flex-col gap-12">
          {loadingWeather ?
            <div className="w-full h-44 px-6">
              <div className="w-full h-full bg-snow_400 animate-pulse" />
            </div>
            :
            <CurrentWeatherSection />
          }
          {loadingWeather ?
            <div className="w-full h-96 px-6">
              <div className="w-full h-full bg-snow_400 animate-pulse" />
            </div>
            :
            <HourlyWeatherSection />
          }
          <AttributionSection />
        </div>
      </ScrollArea>
    </section>
  )
}