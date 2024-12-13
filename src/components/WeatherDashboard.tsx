import { weatherContext } from "@/contexts/weatherContext"
import { FORECAST_PAST_DAYS } from "@/services/api/weatherAPI"
import { WEATHER_CODE_ICONS, WEATHER_CODE_NAMES } from "@/utils/weather"
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useContext, useEffect } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "./ui/chart"
import { CartesianGrid, LabelList, Line, LineChart, XAxis, YAxis } from "recharts"

const CHART_TABS = [
  "Temperatura",
  "Precipitação",
  "Umidade",
  "Vento"
]

export default function WeatherDashboard() {
  const { currentWeather, hourlyWeather } = useContext(weatherContext)

  const temperatureConfig = {
    temperature: {
      label: "temperatura",
      color: "transparent"
    }
  } satisfies ChartConfig
  const preciptationConfig = {
    temperature: {
      label: "preciptação",
      color: "transparent"
    }
  } satisfies ChartConfig
  const humidityConfig = {
    temperature: {
      label: "umidade",
      color: "transparent"
    }
  } satisfies ChartConfig
  const windConfig = {
    temperature: {
      label: "umidade",
      color: "transparent"
    }
  } satisfies ChartConfig

  return (
    <div className="flex bg-white rounded-[32px] p-6">
      {currentWeather.current ? (
        <>
          <div className="flex flex-col gap-4 pr-8 border-r-[1px] border-zinc-300">
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
          <div className="pl-8">
            <Tabs defaultValue={CHART_TABS[0]}>
              <TabsList>
                {CHART_TABS.map((ct) =>
                  <TabsTrigger key={ct} value={ct}>{ct}</TabsTrigger>
                )}
              </TabsList>
              <TabsContent value="Temperatura">
                <ChartContainer config={temperatureConfig} className="min-w-[400px]">
                  <LineChart data={hourlyWeather?.hourly?.temperature_2m.map((t, i) => ({ hour: `${i}:00`, temperature: t }))} accessibilityLayer margin={{
                    top: 20,
                    left: 12,
                    right: 12,
                  }} className="w-full">
                    <CartesianGrid />
                    <XAxis dataKey="hour" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis dataKey="temperature" tickLine={false} axisLine tickMargin={8} />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Line
                      dataKey="temperature"
                      type="natural"
                      stroke="#52525a"
                      strokeWidth={2}
                      dot={{
                        fill: "#27272a",
                      }}
                      activeDot={{
                        r: 6,
                      }}
                    ><LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={0}
                      /></Line>
                  </LineChart>
                </ChartContainer>
              </TabsContent>
              <TabsContent value="Precipitação">
                <ChartContainer config={preciptationConfig} className="min-w-[400px]">
                  <LineChart data={hourlyWeather?.hourly?.precipitation_probability.map((p, i) => ({ hour: `${i}:00`, preciptation: p }))} accessibilityLayer margin={{
                    top: 20,
                    left: 12,
                    right: 12,
                  }} className="w-full">
                    <CartesianGrid />
                    <XAxis dataKey="hour" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis dataKey="preciptation" tickLine={false} axisLine tickMargin={8} />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Line
                      dataKey="preciptation"
                      type="natural"
                      stroke="#52525a"
                      strokeWidth={2}
                      dot={{
                        fill: "#27272a",
                      }}
                      activeDot={{
                        r: 6,
                      }}
                    ><LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={0}
                      /></Line>
                  </LineChart>
                </ChartContainer>
              </TabsContent>
              <TabsContent value="Umidade">
                <ChartContainer config={humidityConfig} className="min-w-[400px]">
                  <LineChart data={hourlyWeather?.hourly?.relative_humidity_2m.map((h, i) => ({ hour: `${i}:00`, humidity: h }))} accessibilityLayer margin={{
                    top: 20,
                    left: 12,
                    right: 12,
                  }} className="w-full">
                    <CartesianGrid />
                    <XAxis dataKey="hour" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis dataKey="humidity" tickLine={false} axisLine tickMargin={8} />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Line
                      dataKey="humidity"
                      type="natural"
                      stroke="#52525a"
                      strokeWidth={2}
                      dot={{
                        fill: "#27272a",
                      }}
                      activeDot={{
                        r: 6,
                      }}
                    ><LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={0}
                      /></Line>
                  </LineChart>
                </ChartContainer>
              </TabsContent>
              <TabsContent value="Vento">
                <ChartContainer config={windConfig} className="min-w-[400px]">
                  <LineChart data={hourlyWeather?.hourly?.wind_speed_10m.map((w, i) => ({ hour: `${i}:00`, wind: w }))} accessibilityLayer margin={{
                    top: 20,
                    left: 12,
                    right: 12,
                  }} className="w-full">
                    <CartesianGrid />
                    <XAxis dataKey="hour" tickLine={false} axisLine={false} tickMargin={8} />
                    <YAxis dataKey="wind" tickLine={false} axisLine tickMargin={8} />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent indicator="line" />}
                    />
                    <Line
                      dataKey="wind"
                      type="natural"
                      stroke="#52525a"
                      strokeWidth={2}
                      dot={{
                        fill: "#27272a",
                      }}
                      activeDot={{
                        r: 6,
                      }}
                    ><LabelList
                        position="top"
                        offset={12}
                        className="fill-foreground"
                        fontSize={0}
                      /></Line>
                  </LineChart>
                </ChartContainer>
              </TabsContent>
            </Tabs>
          </div>
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <FontAwesomeIcon icon={faCircleNotch} className="text-xl text-zinc-400 animate-spin" />
        </div>
      )}
    </div>
  )
}