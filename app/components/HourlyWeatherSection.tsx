"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Chart from "./Chart/Chart"
import { useWeatherContext } from "../contexts/WeatherContext"

export default function HourlyWeatherSection() {
  const { weather, selectedWeather } = useWeatherContext()

  const chartConfig = {
    apparent: {
      label: "Aparente",
      color: "orange",
    },
    humidity: {
      label: "Umidade",
      color: "cyan",
    },
    precipitation: {
      label: "Precipitação",
      color: "blue",
    },
    wind: {
      label: "Ventos",
      color: "silver",
    },
    uv: {
      label: "UV",
      color: "purple",
    },
  }

  return (
    <Tabs defaultValue="apparent" className="w-full px-6">
      <TabsList className="bg-transparent flex flex-wrap md:justify-start mb-12">
        <TabsTrigger color="orange" value="apparent" className="font-alexandria text-cement_600 font-light text-sm hover:bg-snow_400 rounded-none border-r-[1px] border-snow_500">Aparente</TabsTrigger>
        <TabsTrigger value="humidity" className="font-alexandria text-cement_600 font-light text-sm hover:bg-snow_400 rounded-none border-r-[1px] border-snow_500">Umidade</TabsTrigger>
        <TabsTrigger value="precipitation" className="font-alexandria text-cement_600 font-light text-sm hover:bg-snow_400 rounded-none border-r-[1px] border-snow_500">Precipitação</TabsTrigger>
        <TabsTrigger value="wind" className="font-alexandria text-cement_600 font-light text-sm hover:bg-snow_400 rounded-none border-r-[1px] border-snow_500">Ventos</TabsTrigger>
        <TabsTrigger value="uv" className="font-alexandria text-cement_600 font-light text-sm hover:bg-snow_400 rounded-none">Ultravioleta</TabsTrigger>
      </TabsList>
      <TabsContent value="apparent">
        {selectedWeather && weather &&
          <Chart {...chartConfig.apparent} data={selectedWeather.apparent_temperature.map((a, i) => { return { hour: `${i < 10 ? `0${i}` : i}:00`, value: a } })} />
        }
      </TabsContent>
      <TabsContent value="humidity">
        {selectedWeather && weather &&
          <Chart {...chartConfig.humidity} data={selectedWeather.humidity.map((h, i) => { return { hour: `${i < 10 ? `0${i}` : i}:00`, value: h } })} />
        }
      </TabsContent>
      <TabsContent value="precipitation">
        {selectedWeather && weather &&
          <Chart {...chartConfig.precipitation} data={selectedWeather.precipitation.map((p, i) => { return { hour: `${i < 10 ? `0${i}` : i}:00`, value: p } })} />
        }
      </TabsContent>
      <TabsContent value="wind">
        {selectedWeather && weather &&
          <Chart {...chartConfig.wind} data={selectedWeather.wind_speed.map((w, i) => { return { hour: `${i < 10 ? `0${i}` : i}:00`, value: w } })} />
        }
      </TabsContent>
      <TabsContent value="uv">
        {selectedWeather && weather &&
          <Chart {...chartConfig.uv} data={selectedWeather.uv_index.map((u, i) => { return { hour: `${i < 10 ? `0${i}` : i}:00`, value: u } })} />
        }
      </TabsContent>
    </Tabs>

  )
}

// import { useWeatherContext } from "../contexts/WeatherContext";
// import { Area } from "recharts";
// import ChartWrapper from "./ChartWrapper";

// export default function HourlyWeatherSection() {
//   const { weather, loadingWeather } = useWeatherContext();
//   return (
//     <section className="p-6 lg:p-12 bg-white dark:bg-gray-600 rounded-xl shadow">
//       {loadingWeather ? (
//         <div className="w-full h-44 bg-gray-200 animate-pulse rounded-xl"></div>
//       ) : (
//         <div className="flex flex-col w-full h-max gap-6 lg:gap-12">
//           <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row w-full">
//             <ChartWrapper
//               title={`Temperature (${weather?.hourly[0].temperature_unit})`}
//               chartConfig={{
//                 temperature: {
//                   label: "Real",
//                 },
//                 apparent_temperature: {
//                   label: "Apparent ",
//                 },
//               }}
//               chartData={weather?.hourly
//                 .map(({ time, temperature, apparent_temperature }) => {
//                   return {
//                     time: `${time.getUTCHours() > 9 ? time.getUTCHours() : "0" + time.getUTCHours()}:00`,
//                     temperature,
//                     apparent_temperature,
//                   };
//                 })
//                 .sort(
//                   (a, b) =>
//                     Number(a.time.substring(0, 2)) -
//                     Number(b.time.substring(0, 2)),
//                 )}
//               dataKey="time"
//             >
//               <Area
//                 dataKey="temperature"
//                 type="natural"
//                 fillOpacity={0.2}
//                 stackId="a"
//                 fill="red"
//                 stroke="red"
//               />
//               <Area
//                 dataKey="apparent_temperature"
//                 type="natural"
//                 fillOpacity={0.2}
//                 stackId="b"
//                 fill="orange"
//                 stroke="orange"
//               />
//             </ChartWrapper>
//             <ChartWrapper
//               title={`Relative Humidity (${weather?.hourly[0].humidity_unit})`}
//               chartConfig={{
//                 humidity: {
//                   label: "Humidity",
//                 },
//               }}
//               chartData={weather?.hourly
//                 .map(({ time, humidity }) => {
//                   return {
//                     time: `${time.getUTCHours() > 9 ? time.getUTCHours() : "0" + time.getUTCHours()}:00`,
//                     humidity,
//                   };
//                 })
//                 .sort(
//                   (a, b) =>
//                     Number(a.time.substring(0, 2)) -
//                     Number(b.time.substring(0, 2)),
//                 )}
//               dataKey="time"
//             >
//               <Area
//                 dataKey="humidity"
//                 type="natural"
//                 fillOpacity={0.2}
//                 stackId="a"
//                 fill="DodgerBlue"
//                 stroke="DodgerBlue"
//               />
//             </ChartWrapper>
//           </div>
//           <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row w-full">
//             <ChartWrapper
//               title={`Precipitation (${weather?.hourly[0].precipitation_unit})`}
//               chartConfig={{
//                 precipitation: {
//                   label: "Precipitation",
//                 },
//               }}
//               chartData={weather?.hourly
//                 .map(({ time, precipitation }) => {
//                   return {
//                     time: `${time.getUTCHours() > 9 ? time.getUTCHours() : "0" + time.getUTCHours()}:00`,
//                     precipitation,
//                   };
//                 })
//                 .sort(
//                   (a, b) =>
//                     Number(a.time.substring(0, 2)) -
//                     Number(b.time.substring(0, 2)),
//                 )}
//               dataKey="time"
//             >
//               <Area
//                 dataKey="precipitation"
//                 type="natural"
//                 fillOpacity={0.2}
//                 stackId="a"
//                 fill="Navy"
//                 stroke="Navy"
//               />
//             </ChartWrapper>
//             <ChartWrapper
//               title={`Wind Speed at 10m (${weather?.hourly[0].wind_speed_unit})`}
//               chartConfig={{
//                 wind_speed: {
//                   label: "Speed",
//                 },
//               }}
//               chartData={weather?.hourly
//                 .map(({ time, wind_speed }) => {
//                   return {
//                     time: `${time.getUTCHours() > 9 ? time.getUTCHours() : "0" + time.getUTCHours()}:00`,
//                     wind_speed,
//                   };
//                 })
//                 .sort(
//                   (a, b) =>
//                     Number(a.time.substring(0, 2)) -
//                     Number(b.time.substring(0, 2)),
//                 )}
//               dataKey="time"
//             >
//               <Area
//                 dataKey="wind_speed"
//                 type="natural"
//                 fillOpacity={0.2}
//                 stackId="a"
//                 fill="silver"
//                 stroke="silver"
//               />
//             </ChartWrapper>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// }
