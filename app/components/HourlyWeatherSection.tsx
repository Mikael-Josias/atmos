import { useWeatherContext } from "../contexts/WeatherContext";
import { Area } from "recharts";
import ChartWrapper from "./ChartWrapper";

export default function HourlyWeatherSection() {
  const { weather, loadingWeather } = useWeatherContext();
  return (
    <section className="p-6 lg:p-12 bg-white dark:bg-gray-600 rounded-xl shadow">
      {loadingWeather ? (
        <div className="w-full h-44 bg-gray-200 animate-pulse rounded-xl"></div>
      ) : (
        <div className="flex flex-col w-full h-max gap-6 lg:gap-12">
          <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row w-full">
            <ChartWrapper
              title={`Temperature (${weather?.hourly[0].temperature_unit})`}
              chartConfig={{
                temperature: {
                  label: "Real",
                },
                apparent_temperature: {
                  label: "Apparent ",
                },
              }}
              chartData={weather?.hourly
                .map(({ time, temperature, apparent_temperature }) => {
                  return {
                    time: `${time.getUTCHours() > 9 ? time.getUTCHours() : "0" + time.getUTCHours()}:00`,
                    temperature,
                    apparent_temperature,
                  };
                })
                .sort(
                  (a, b) =>
                    Number(a.time.substring(0, 2)) -
                    Number(b.time.substring(0, 2)),
                )}
              dataKey="time"
            >
              <Area
                dataKey="temperature"
                type="natural"
                fillOpacity={0.2}
                stackId="a"
                fill="red"
                stroke="red"
              />
              <Area
                dataKey="apparent_temperature"
                type="natural"
                fillOpacity={0.2}
                stackId="b"
                fill="orange"
                stroke="orange"
              />
            </ChartWrapper>
            <ChartWrapper
              title={`Relative Humidity (${weather?.hourly[0].humidity_unit})`}
              chartConfig={{
                humidity: {
                  label: "Humidity",
                },
              }}
              chartData={weather?.hourly
                .map(({ time, humidity }) => {
                  return {
                    time: `${time.getUTCHours() > 9 ? time.getUTCHours() : "0" + time.getUTCHours()}:00`,
                    humidity,
                  };
                })
                .sort(
                  (a, b) =>
                    Number(a.time.substring(0, 2)) -
                    Number(b.time.substring(0, 2)),
                )}
              dataKey="time"
            >
              <Area
                dataKey="humidity"
                type="natural"
                fillOpacity={0.2}
                stackId="a"
                fill="DodgerBlue"
                stroke="DodgerBlue"
              />
            </ChartWrapper>
          </div>
          <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row w-full">
            <ChartWrapper
              title={`Precipitation (${weather?.hourly[0].precipitation_unit})`}
              chartConfig={{
                precipitation: {
                  label: "Precipitation",
                },
              }}
              chartData={weather?.hourly
                .map(({ time, precipitation }) => {
                  return {
                    time: `${time.getUTCHours() > 9 ? time.getUTCHours() : "0" + time.getUTCHours()}:00`,
                    precipitation,
                  };
                })
                .sort(
                  (a, b) =>
                    Number(a.time.substring(0, 2)) -
                    Number(b.time.substring(0, 2)),
                )}
              dataKey="time"
            >
              <Area
                dataKey="precipitation"
                type="natural"
                fillOpacity={0.2}
                stackId="a"
                fill="Navy"
                stroke="Navy"
              />
            </ChartWrapper>
            <ChartWrapper
              title={`Wind Speed at 10m (${weather?.hourly[0].wind_speed_unit})`}
              chartConfig={{
                wind_speed: {
                  label: "Speed",
                },
              }}
              chartData={weather?.hourly
                .map(({ time, wind_speed }) => {
                  return {
                    time: `${time.getUTCHours() > 9 ? time.getUTCHours() : "0" + time.getUTCHours()}:00`,
                    wind_speed,
                  };
                })
                .sort(
                  (a, b) =>
                    Number(a.time.substring(0, 2)) -
                    Number(b.time.substring(0, 2)),
                )}
              dataKey="time"
            >
              <Area
                dataKey="wind_speed"
                type="natural"
                fillOpacity={0.2}
                stackId="a"
                fill="silver"
                stroke="silver"
              />
            </ChartWrapper>
          </div>
        </div>
      )}
    </section>
  );
}
