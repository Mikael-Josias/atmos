"use client";
import CurrentWeatherSection from "./CurrentWeatherSection";

export default function WeatherDashboard() {
  return (
    <section className="bg-white rounded-xl w-full h-full flex flex-col gap-6 p-6">
      <CurrentWeatherSection />
    </section>
  );
}
