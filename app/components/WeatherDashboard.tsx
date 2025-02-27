"use client";
import CurrentWeatherSection from "./CurrentWeatherSection";

export default function WeatherDashboard() {
  return (
    <section className="flex flex-col gap-6 p-6 bg-gray-100 w-full h-full ">
      <CurrentWeatherSection />
    </section>
  );
}
