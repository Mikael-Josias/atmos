"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import CurrentWeatherSection from "./CurrentWeatherSection";
import HourlyWeatherSection from "./HourlyWeatherSection";

export default function WeatherDashboard() {
  return (
    <ScrollArea className="h-full w-full">
      <section className="flex flex-col gap-6 p-6 bg-gray-100 dark:bg-gray-700 w-full h-full overflow-auto">
        <CurrentWeatherSection />
        <HourlyWeatherSection />
      </section>
    </ScrollArea>
  );
}
