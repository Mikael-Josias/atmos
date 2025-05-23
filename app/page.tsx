import { Toaster } from "@/components/ui/toaster"
import SideBar from "./components/SideBar"
import { LocationContextProvider } from "./contexts/LocationContext"
import { WeatherContextProvider } from "./contexts/WeatherContext"
import WeatherDashboard from "./components/WeatherDashboard"

export default function Home() {
  return (
    <LocationContextProvider>
      <WeatherContextProvider>
        <main className="flex flex-col md:flex-row md:h-screen w-full">
          <SideBar />
          <WeatherDashboard />
          <Toaster />
        </main>
      </WeatherContextProvider>
    </LocationContextProvider>
  )
}
