import { useWeatherContext, WeatherHourly } from "@/app/contexts/WeatherContext"
import { WEATHER_ICONS_SMALL } from "@/app/utils/utils"
import { Loader2 } from "lucide-react"

export default function DayCard({ weather }: { weather: WeatherHourly }) {
  const { selectedWeather, loadingWeather, setSelectedWeather } = useWeatherContext()
  const thisHour = new Date().getHours()

  function selectNewDay() {
    setSelectedWeather(weather)
  }

  function isSelected() {
    if (!selectedWeather) return
    const selectedDay = new Date(selectedWeather.time[0])
    const thisDay = new Date(weather.time[0])
    if (selectedDay.getDate() !== thisDay.getDate() || selectedDay.getMonth() !== thisDay.getMonth() || selectedDay.getFullYear() !== thisDay.getFullYear()) {
      return false
    }
    return true
  }

  return (
    <div className={`${isSelected() ? "bg-white shadow-sm" : "hover:bg-snow_500"} flex items-center justify-center gap-3 flex-shrink-0 p-4 md:p-3 first:pl-6 last:pr-6 cursor-pointer transition-all`} onClick={() => selectNewDay()}>
      {loadingWeather ?
        <Loader2 className="w-8 animate-spin text-cement_400" />
        :
        WEATHER_ICONS_SMALL.get(weather.weather_code[thisHour])
      }
      <div className="flex flex-col">
        <span className="font-alexandria text-xs font-light text-cement_500 capitalize">{DAYS[new Date(weather.time[0]).getDay()]}</span>
        <span className="font-alexandria text-xs font-light text-cement_400">{new Date(weather.time[0]).getDate()}/{new Date(weather.time[0]).getMonth() < 10 ? `0${new Date(weather.time[0]).getMonth()}` : new Date(weather.time[0]).getMonth()}</span>
      </div>
    </div>
  )
}

const DAYS = [
  "Domingo",
  "Segunda",
  "Terça",
  "Quarta",
  "Quinta",
  "Sexta",
  "Sábado",
]