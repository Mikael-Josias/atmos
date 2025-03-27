"use client"
import { useWeatherContext } from "@/app/contexts/WeatherContext"
import DayCard from "./DayCard"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function DaysCarousel() {
  const hourNow = new Date().getHours()
  const { weather } = useWeatherContext()

  return (
    <ScrollArea className="bg-snow_400 max-w-full">
      <ScrollBar orientation="horizontal" />
      <div className="flex w-full bg-snow_400">
        {weather &&
          <>
            <DayCard weather={weather.sunday} />
            <DayCard weather={weather.monday} />
            <DayCard weather={weather.tuesday} />
            <DayCard weather={weather.wednesday} />
            <DayCard weather={weather.thursday} />
            <DayCard weather={weather.friday} />
            <DayCard weather={weather.saturday} />
          </>
        }
      </div>
    </ScrollArea>
  )
}