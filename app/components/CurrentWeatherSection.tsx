import { useWeatherContext } from "../contexts/WeatherContext";
import { WEATHER_CODES, WEATHER_ICONS } from "../utils/utils";

export default function CurrentWeatherSection() {
  const { weather, loadingWeather } = useWeatherContext();

  return (
    <section className="flex flex-col gap-3 lg:gap-6 p-6 lg:p-12 pt-6 bg-white rounded-xl shadow">
      {loadingWeather ? (
        <div className="w-full h-44 bg-gray-200 animate-pulse rounded-xl"></div>
      ) : (
        <>
          <h3 className="text-sm w-full lg:text-2xl font-bold text-cement_600">
            Current Weather
          </h3>
          <div className="flex flex-col gap-6 justify-between lg:flex-row">
            <div className="flex gap-6 pr-6 text-cement_400 items-center justify-center lg:justify-start shrink-0">
              {WEATHER_ICONS.get(weather?.current.weather_code)}
              <div>
                <h2 className="text-xl md:text-2xl font-semibold">
                  {WEATHER_CODES.get(weather?.current.weather_code)}
                </h2>
                <span className="text-3xl md:text-5xl font-black text-cement_600">
                  {weather?.current.temperature}
                </span>
              </div>
            </div>
            <div className="flex flex-col lg:w-1/2">
              <div className="flex flex-row items-center justify-between odd:bg-gray-100 px-4 py-1">
                <span className="block text-sm font-bold text-cement_500">
                  Apparent Temp.
                </span>
                <span className="block text-sm font-bold text-cement_400">
                  {weather?.current.apparent_temperature}
                </span>
              </div>
              <div className="flex flex-row items-center justify-between odd:bg-gray-100 px-4 py-1">
                <span className="block text-sm font-bold text-cement_500">
                  Humidity
                </span>
                <span className="block text-sm font-bold text-cement_400">
                  {weather?.current.relative_humidity}
                </span>
              </div>
              <div className="flex flex-row items-center justify-between odd:bg-gray-100 px-4 py-1">
                <span className="block text-sm font-bold text-cement_500">
                  Precipitation
                </span>
                <span className="block text-sm font-bold text-cement_400">
                  {weather?.current.precipitation}
                </span>
              </div>
              <div className="flex flex-row items-center justify-between odd:bg-gray-100 px-4 py-1">
                <span className="block text-sm font-bold text-cement_500">
                  Wind Speed
                </span>
                <span className="block text-sm font-bold text-cement_400">
                  {weather?.current.wind_speed}
                </span>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
