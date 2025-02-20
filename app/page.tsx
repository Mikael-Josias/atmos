import SideBar from "./components/SideBar"
import { LocationContextProvider } from "./contexts/LocationContext"

export default function Home() {
  return (
    <LocationContextProvider>
      <main className="flex gap-6 p-12 w-screen h-screen">
        <SideBar />
      </main>
    </LocationContextProvider>
  )
}
