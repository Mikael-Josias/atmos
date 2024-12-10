import logo from "@/assets/Logo.svg"
import LocationBar from "./components/LocationBar"
import { SearchBar } from "./components/SearchBar"
import { LocationContextProvider } from "./contexts/locationContext"
import { WeatherContextProvider } from "./contexts/weatherContext"
import WeatherDashboard from "./components/WeatherDashboard"

export default function App() {
  return (
    <main className="h-screen w-screen bg-slate-200 flex flex-col items-center justify-center gap-6">
      <img src={logo} alt="Atmos logo" draggable="false" />
      <div className="flex flex-col items-center justify-center gap-3">
        <LocationContextProvider>
          <div className="flex items-center justify-center gap-3">
            <LocationBar />
            <SearchBar />
          </div>
          <WeatherContextProvider>
            <WeatherDashboard />
          </WeatherContextProvider>
        </LocationContextProvider>
      </div>
    </main>
  )
}
