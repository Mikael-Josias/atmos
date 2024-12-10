import { weatherContext } from "@/contexts/weatherContext"
import { FORECAST_PAST_DAYS } from "@/services/api/weatherAPI"
import { WEATHER_CODE_ICONS, WEATHER_CODE_NAMES } from "@/utils/weather"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext } from "react"

export default function WeatherDashboard() {
  const { currentWeather } = useContext(weatherContext)
  return (
    <div className="flex bg-white rounded-[32px] p-6">
      {currentWeather.current ? (
        <>
          <div className="flex flex-col gap-4 pr-8 ">
            <span className="text-2xl text-zinc-600 capitalize">
              {WEATHER_CODE_NAMES.get(currentWeather.current?.weather_code)}
            </span>
            <div className="flex gap-6 items-center justify-start">
              <FontAwesomeIcon icon={WEATHER_CODE_ICONS.get(currentWeather.current.weather_code)} className="text-6xl text-zinc-800" />
              <span className="text-6xl text-zinc-800">{currentWeather.current.temperature_2m}{currentWeather.current_units.temperature_2m}</span>
            </div>
            <div className="grid grid-rows-2 grid-cols-2">
              <span className="text-zinc-600">
                Máxima:<br />
                <b className="text-zinc-800">
                  {currentWeather.daily.temperature_2m_max[FORECAST_PAST_DAYS]}{currentWeather.daily_units.temperature_2m_max}
                </b>
              </span>
              <span className="text-zinc-600">
                Mínima:<br />
                <b className="text-zinc-800">
                  {currentWeather.daily.temperature_2m_min[FORECAST_PAST_DAYS]}{currentWeather.daily_units.temperature_2m_min}
                </b>
              </span>
              <span className="text-zinc-600">
                Chuva:<br />
                <b className="text-zinc-800">
                  {currentWeather.daily.precipitation_probability_max[FORECAST_PAST_DAYS]}{currentWeather.daily_units.precipitation_probability_max}
                </b>
              </span>
              <span className="text-zinc-600">
                Ventos:<br />
                <b className="text-zinc-800">
                  {currentWeather.daily.wind_gusts_10m_max[FORECAST_PAST_DAYS]}{currentWeather.daily_units.wind_gusts_10m_max}
                </b>
              </span>
            </div>
          </div>
          <div></div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <FontAwesomeIcon icon={faCircleNotch} className="text-xl text-zinc-400 animate-spin" />
        </div>
      )}
    </div>
  )
}