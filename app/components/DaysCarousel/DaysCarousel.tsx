"use client"
import { useWeatherContext } from "@/app/contexts/WeatherContext"
import DayCard from "./DayCard"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"

export default function DaysCarousel() {
  const { weather } = useWeatherContext()

  return (
    <ScrollArea className="bg-snow_400 w-full min-h-14">
      <ScrollBar orientation="horizontal" />
      <div className="flex flex-row w-full bg-snow_400">
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