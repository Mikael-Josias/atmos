import { Toaster } from "@/components/ui/toaster";
import SideBar from "./components/SideBar";
import { LocationContextProvider } from "./contexts/LocationContext";
import { WeatherContextProvider } from "./contexts/WeatherContext";

export default function Home() {
  return (
    <LocationContextProvider>
      <WeatherContextProvider>
        <main className="flex gap-6 p-12 w-screen h-screen">
          <SideBar />
          <Toaster />
        </main>
      </WeatherContextProvider>
    </LocationContextProvider>
  );
}
