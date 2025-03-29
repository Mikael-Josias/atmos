"use client"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useWeatherContext } from "../contexts/WeatherContext"
import { WEATHER_CODES, WEATHER_ICONS } from "../utils/utils"
import { Info, InfoIcon, Loader2 } from "lucide-react"

export default function CurrentWeatherSection() {
  const { weather, selectedWeather } = useWeatherContext()
  const thisHour = new Date().getHours()

  function convertToFahrenheit() {
    if (!selectedWeather) return
    const t = ((selectedWeather.temperature[thisHour] * 1.8) + 38).toFixed(2)
    return Number.parseFloat(t)
  }

  return (
    <section className="flex flex-col lg:flex-row gap-6 px-6 mt-4 lg:mt-0 w-full">
      {/* BASIC WEATHER INFO */}
      <div className="w-full flex gap-6 items-center justify-center lg:pr-3 lg:border-r-[1px] lg:border-r-snow_500 relative min-h-32">
        {selectedWeather ?
          <>
            {WEATHER_ICONS.get(selectedWeather?.weather_code[thisHour])}
            <div className="h-full flex flex-col justify-around">
              <h2 className="font-alexandria text-2xl font-light text-cement_400">{WEATHER_CODES.get(selectedWeather?.weather_code[thisHour])}</h2>
              <span className="font-alexandria text-4xl font-medium text-cement_600 block">{selectedWeather?.temperature[thisHour]} ºC</span>
              <span className="font-alexandria text-2xl font-light text-cement_400 block">{convertToFahrenheit()} ºF</span>
            </div></>
          :
          <Loader2 className="text-cement_400 animate-spin size-16" />
        }

        {/* TOOLTIP */}
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild className="absolute left-[24px] top-0 hidden md:block">
              <Info className="h-5 w-5 fill-cement_400 text-white" />
            </TooltipTrigger>
            <TooltipContent>
              <span>As informações fornecidas são referentes a hora atual.</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      {/* DETAILED WEATHER INFO */}
      <div className="grid grid-cols-3 w-full">
        <div className="flex flex-col items-center justify-center gap-1.5 p-2 hover:bg-snow_400 w-full h-full border-b-[1px] border-r-[1px] border-snow_500">
          <span className="font-alexandria text-sm font-light text-cement_500 text-center">Temp. Aparente</span>
          {selectedWeather ?
            <span className="font-alexandria text-base font-medium text-cement_600">{selectedWeather?.apparent_temperature[thisHour]}{" "}{weather?.units.apparent_temperature}</span>
            :
            <Loader2 className="size-4 animate-spin text-cement_400" />
          }
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5 p-2 hover:bg-snow_400 w-full h-full border-b-[1px] border-r-[1px] border-snow_500">
          <span className="font-alexandria text-sm font-light text-cement_500 text-center">Pressão Atm.</span>
          {selectedWeather ?
            <span className="font-alexandria text-base font-medium text-cement_600">{selectedWeather?.surface_pressure[thisHour]}{" "}{weather?.units.surface_pressure}</span>
            :
            <Loader2 className="size-4 animate-spin text-cement_400" />
          }
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5 p-2 hover:bg-snow_400 w-full h-full border-b-[1px] border-snow_500">
          <span className="font-alexandria text-sm font-light text-cement_500 text-center">Dia ou Noite</span>
          {selectedWeather ?
            <span className="font-alexandria text-base font-medium text-cement_600">{selectedWeather?.is_day[thisHour] === 1 ? "Dia" : "Noite"}</span>
            :
            <Loader2 className="size-4 animate-spin text-cement_400" />
          }
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5 p-2 hover:bg-snow_400 w-full h-full border-r-[1px] border-snow_500">
          <span className="font-alexandria text-sm font-light text-cement_500 text-center">Umidade Relativa</span>
          {selectedWeather ?
            <span className="font-alexandria text-base font-medium text-cement_600">{selectedWeather?.humidity[thisHour]}{" "}{weather?.units.humidity}</span>
            :
            <Loader2 className="size-4 animate-spin text-cement_400" />
          }
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5 p-2 hover:bg-snow_400 w-full h-full border-r-[1px] border-snow_500">
          <span className="font-alexandria text-sm font-light text-cement_500 text-center">Precipitação</span>
          {selectedWeather ?
            <span className="font-alexandria text-base font-medium text-cement_600">{selectedWeather?.precipitation[thisHour]}{" "}{weather?.units.precipitation}</span>
            :
            <Loader2 className="size-4 animate-spin text-cement_400" />
          }
        </div>
        <div className="flex flex-col items-center justify-center gap-1.5 p-2 hover:bg-snow_400 w-full h-full">
          <span className="font-alexandria text-sm font-light text-cement_500 text-center">Vento (10m)</span>
          {selectedWeather ?
            <span className="font-alexandria text-base font-medium text-cement_600">{selectedWeather?.wind_speed[thisHour]}{" "}{weather?.units.wind_speed}</span>
            :
            <Loader2 className="size-4 animate-spin text-cement_400" />
          }
        </div>
      </div>
    </section >
  )
}

// import { useWeatherContext } from "../contexts/WeatherContext";
// import { WEATHER_CODES, WEATHER_ICONS } from "../utils/utils";

// export default function CurrentWeatherSection() {
//   const { weather, loadingWeather } = useWeatherContext();

//   return (
//     <section className="flex flex-col gap-3 lg:gap-6 p-6 lg:p-12 pt-6 bg-white dark:bg-gray-600 rounded-xl shadow">
//       {loadingWeather ? (
//         <div className="w-full h-44 bg-gray-200 animate-pulse rounded-xl"></div>
//       ) : (
//         <>
//           <h3 className="text-sm w-full lg:text-2xl font-bold text-cement_600 dark:text-gray-300">
//             Current Weather
//           </h3>
//           <div className="flex flex-col gap-6 justify-between lg:flex-row">
//             <div className="flex gap-6 pr-6 text-cement_400 dark:text-white items-center justify-center lg:justify-start shrink-0">
//               {WEATHER_ICONS.get(weather?.current.weather_code)}
//               <div>
//                 <h2 className="text-xl md:text-2xl font-semibold">
//                   {WEATHER_CODES.get(weather?.current.weather_code)}
//                 </h2>
//                 <span className="text-3xl md:text-5xl font-black text-cement_600 dark:text-white">
//                   {weather?.current.temperature}
//                 </span>
//               </div>
//             </div>
//             <div className="flex flex-col lg:w-1/2">
//               <div className="flex flex-row items-center justify-between odd:bg-gray-100 dark:odd:bg-gray-700 px-4 py-1">
//                 <span className="block text-sm font-bold text-cement_500 dark:text-gray-200">
//                   Apparent Temp.
//                 </span>
//                 <span className="block text-sm font-bold text-cement_400 dark:text-gray-200">
//                   {weather?.current.apparent_temperature}
//                 </span>
//               </div>
//               <div className="flex flex-row items-center justify-between odd:bg-gray-100 dark:odd:bg-gray-700 px-4 py-1">
//                 <span className="block text-sm font-bold text-cement_500 dark:text-gray-200">
//                   Humidity
//                 </span>
//                 <span className="block text-sm font-bold text-cement_400 dark:text-gray-200">
//                   {weather?.current.relative_humidity}
//                 </span>
//               </div>
//               <div className="flex flex-row items-center justify-between odd:bg-gray-100 dark:odd:bg-gray-700 px-4 py-1">
//                 <span className="block text-sm font-bold text-cement_500 dark:text-gray-200">
//                   Precipitation
//                 </span>
//                 <span className="block text-sm font-bold text-cement_400 dark:text-gray-200">
//                   {weather?.current.precipitation}
//                 </span>
//               </div>
//               <div className="flex flex-row items-center justify-between odd:bg-gray-100 dark:odd:bg-gray-700 px-4 py-1">
//                 <span className="block text-sm font-bold text-cement_500 dark:text-gray-200">
//                   Wind Speed
//                 </span>
//                 <span className="block text-sm font-bold text-cement_400 dark:text-gray-200">
//                   {weather?.current.wind_speed}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </>
//       )}
//     </section>
//   );
// }
