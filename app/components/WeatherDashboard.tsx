import { ScrollArea } from "@/components/ui/scroll-area"
import CurrentWeatherSection from "./CurrentWeatherSection"
import DaysCarousel from "./DaysCarousel/DaysCarousel"
import HourlyWeatherSection from "./HourlyWeatherSection"

export default function WeatherDashboard() {

  return (
    <section className="flex flex-col flex-grow gap-12 pb-12 bg-white min-w-0">
      <DaysCarousel />
      <ScrollArea>
        <div className="flex flex-col gap-12">
          <CurrentWeatherSection />
          <HourlyWeatherSection />
        </div>
      </ScrollArea>
    </section>
  )
}