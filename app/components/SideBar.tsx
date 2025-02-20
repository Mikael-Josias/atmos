"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Locate } from "lucide-react"
import { MouseEvent } from "react"
import { getReverseGeocoding } from "../services/LocationAPI"
import { useLocationContext } from "../contexts/LocationContext"

export default function SideBar() {
  const { location, setLocation } = useLocationContext()

  function getLocation(e: MouseEvent) {
    e.preventDefault()
    navigator.geolocation.getCurrentPosition(async (position) => {
      const res = (await getReverseGeocoding({ lat: position.coords.latitude, lon: position.coords.longitude }))[0]
      setLocation({
        city: res.name,
        state: res.state,
        country: res.country,
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
    })
  }

  return (
    <section className="flex flex-col h-min gap-12 p-6 bg-white rounded-xl">
      <h1 className="font-inconsolata text-3xl font-bold text-cement_600 w-full border-b-[1px] border-silver">ATMOS</h1>
      <div>
        <Label htmlFor="locationInput" className="text-sm font-medium text-cement_500">Location</Label>
        <div className="flex items-center justify-between bg-background pl-3 pr-3 rounded-full mt-2">
          <Input id="locationInput" className="bg-transparent text-sm border-none focus-visible:ring-transparent focus-visible:ring-offset-transparent text-cement_400" placeholder="Loading location..." value={`${location.city}, ${location.state || location.country}`} onChange={() => { }} />
          <button className="hover:bg-cement_400 h-min w-min p-1 rounded-full text-cement_400 hover:text-white transition-colors" onClick={(e) => getLocation(e)}>
            <Locate size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}