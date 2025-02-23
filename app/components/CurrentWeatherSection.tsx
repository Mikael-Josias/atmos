import { useWeatherContext } from "../contexts/WeatherContext";
import { WEATHER_CODES, WEATHER_ICONS } from "../utils/utils";

export default function CurrentWeatherSection() {
  const { weather, loadingWeather } = useWeatherContext();

  return (
    <section className="flex gap-6 py-6">
      {loadingWeather ? (
        <div className="w-full h-44 bg-gray-200 animate-pulse rounded-xl"></div>
      ) : (
        <>
          <div className="flex gap-6 pr-6 text-cement_400 items-center border-r-[1px] border-r-gray-200">
            {WEATHER_ICONS.get(weather?.current.weather_code)}
            <div>
              <h2 className="text-xl font-bold">
                {WEATHER_CODES.get(weather?.current.weather_code)}
              </h2>
              <span className="text-5xl font-medium text-cement_600">
                {weather?.current.temperature_2m}
                {weather?.current_units.temperature_2m}
              </span>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col justify-around w-1/3">
              <div>
                <span className="block text-sm font-bold text-cement_500">
                  Max. Temperature
                </span>
                <span className="block text-xl font-bold text-cement_400">
                  {weather?.daily.temperature_2m_max}
                  {weather?.daily_units.temperature_2m_max}
                </span>
              </div>
              <div>
                <span className="block text-sm font-bold text-cement_500">
                  Relative Humidity
                </span>
                <span className="block text-xl font-bold text-cement_400">
                  {weather?.current.relative_humidity_2m}
                  {weather?.current_units.relative_humidity_2m}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-around w-1/3">
              <div>
                <span className="block text-sm font-bold text-cement_500">
                  Min. Temperature
                </span>
                <span className="block text-xl font-bold text-cement_400">
                  {weather?.daily.temperature_2m_min}
                  {weather?.daily_units.temperature_2m_min}
                </span>
              </div>
              <div>
                <span className="block text-sm font-bold text-cement_500">
                  Precipitation
                </span>
                <span className="block text-xl font-bold text-cement_400">
                  {weather?.current.precipitation}
                  {weather?.current_units.precipitation}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-around w-1/3">
              <div>
                <span className="block text-sm font-bold text-cement_500">
                  Apparent Temp.
                </span>
                <span className="block text-xl font-bold text-cement_400">
                  {weather?.current.apparent_temperature}
                  {weather?.current_units.apparent_temperature}
                </span>
              </div>
              <div>
                <span className="block text-sm font-bold text-cement_500">
                  Wind Speed
                </span>
                <span className="block text-xl font-bold text-cement_400">
                  {weather?.current.wind_speed_10m}
                  {weather?.current_units.wind_speed_10m}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
