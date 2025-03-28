import CurrentWeatherSection from "./CurrentWeatherSection"
import DaysCarousel from "./DaysCarousel/DaysCarousel"

export default function WeatherDashboard() {

  return (
    <section className="flex flex-col flex-grow gap-12 bg-white min-w-0">
      <DaysCarousel />
      <CurrentWeatherSection />
    </section>
  )
}