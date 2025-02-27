import { useWeatherContext } from "../contexts/WeatherContext";
import { WEATHER_CODES, WEATHER_ICONS } from "../utils/utils";

export default function CurrentWeatherSection() {
  const { weather, loadingWeather } = useWeatherContext();

  return (
    <section className="flex flex-col justify-between lg:flex-row gap-6 p-12 bg-white rounded-xl shadow">
      {loadingWeather ? (
        <div className="w-full h-44 bg-gray-200 animate-pulse rounded-xl"></div>
      ) : (
        <>
          <div className="flex gap-6 pr-6 text-cement_400 items-center justify-center lg:justify-start shrink-0">
            {WEATHER_ICONS.get(weather?.current.weather_code)}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold">
                {WEATHER_CODES.get(weather?.current.weather_code)}
              </h2>
              <span className="text-3xl md:text-5xl font-black text-cement_600">
                {weather?.current.temperature_2m}
                {weather?.current_units.temperature_2m}
              </span>
            </div>
          </div>
          <div className="flex flex-col lg:w-1/2">
            <div className="flex flex-row items-center justify-between odd:bg-gray-100 px-4 py-0.5">
              <span className="block text-sm font-bold text-cement_500">
                Max. Temperature
              </span>
              <span className="block text-sm font-bold text-cement_400">
                {weather?.daily.temperature_2m_max}
                {weather?.daily_units.temperature_2m_max}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between odd:bg-gray-100 px-4 py-0.5">
              <span className="block text-sm font-bold text-cement_500">
                Relative Humidity
              </span>
              <span className="block text-sm font-bold text-cement_400">
                {weather?.current.relative_humidity_2m}
                {weather?.current_units.relative_humidity_2m}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between odd:bg-gray-100 px-4 py-0.5">
              <span className="block text-sm font-bold text-cement_500">
                Min. Temperature
              </span>
              <span className="block text-sm font-bold text-cement_400">
                {weather?.daily.temperature_2m_min}
                {weather?.daily_units.temperature_2m_min}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between odd:bg-gray-100 px-4 py-0.5">
              <span className="block text-sm font-bold text-cement_500">
                Precipitation
              </span>
              <span className="block text-sm font-bold text-cement_400">
                {weather?.current.precipitation}
                {weather?.current_units.precipitation}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between odd:bg-gray-100 px-4 py-0.5">
              <span className="block text-sm font-bold text-cement_500">
                Apparent Temp.
              </span>
              <span className="block text-sm font-bold text-cement_400">
                {weather?.current.apparent_temperature}
                {weather?.current_units.apparent_temperature}
              </span>
            </div>
            <div className="flex flex-row items-center justify-between odd:bg-gray-100 px-4 py-0.5">
              <span className="block text-sm font-bold text-cement_500">
                Wind Speed
              </span>
              <span className="block text-sm font-bold text-cement_400">
                {weather?.current.wind_speed_10m}
                {weather?.current_units.wind_speed_10m}
              </span>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
