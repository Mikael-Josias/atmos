"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@radix-ui/react-label"
import { Loader2, Locate } from "lucide-react"
import { MouseEvent, useEffect, useState } from "react"
import { GeocodingResults, GeocodingObject, getGeocoding, getReverseGeocoding } from "../services/LocationAPI"
import { useLocationContext } from "../contexts/LocationContext"
import { useToast } from "@/hooks/use-toast"
import Image from "next/image"

export default function SideBar() {
  const { toast } = useToast()
  const [loadingLocation, setLoadingLocation] = useState<boolean>(false)
  const [loadingLocationList, setLoadingLocationList] = useState<boolean>(false)
  const { location, setLocation } = useLocationContext()
  const [locationInputValue, setLocationInputValue] = useState<string>(`${location.city}, ${location.state || location.country}`)
  const [locationList, setLocationList] = useState<GeocodingResults | null>(null)

  useEffect(() => {
    const timeoutSearch = setTimeout(async () => {
      if (locationInputValue.includes(",")) return
      setLoadingLocationList(true)
      const res = await getGeocoding(locationInputValue)
      setLocationList(res)
      const loading = () => setLoadingLocationList(false)
      loading()
    }, 500)

    return () => clearTimeout(timeoutSearch)
  }, [locationInputValue])

  function getLocation(e: MouseEvent) {
    e.preventDefault()
    setLoadingLocation(true)
    setLocationList(null)
    navigator.geolocation.getCurrentPosition(async (position) => {
      const res = (await getReverseGeocoding({ lat: position.coords.latitude, lon: position.coords.longitude }))[0]
      setLocation({
        city: res.name,
        state: res.state,
        country: res.country,
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      })
      setLocationInputValue(`${res.name}, ${res.state || res.country}`)
      setLoadingLocation(false)
    }, () => { toast({ title: "Sorry! We coundn't find you.", description: "Please, verify if location access is denied on this site. Or search for your city on our location box." }) })

  }

  function selectLocation(e: MouseEvent, l: GeocodingObject) {
    e.preventDefault()
    setLocation({
      city: l.name,
      state: l.admin1,
      country: l.country,
      lat: l.latitude,
      lon: l.longitude,
    })
    setLocationInputValue(`${l.name}, ${l.admin1 || l.admin2}`)
    setLocationList(null)
  }

  return (
    <section className="flex flex-col h-min gap-12 p-6 bg-white rounded-xl">
      <h1 className="font-inconsolata text-3xl font-bold text-cement_600 w-full border-b-[1px] border-silver">ATMOS</h1>
      <div>
        <Label htmlFor="locationInput" className="text-sm font-medium text-cement_500">Location</Label>
        <div className="flex items-center justify-between bg-background pl-3 pr-3 rounded-full my-2">
          {!loadingLocation ?
            <Input id="locationInput" className="bg-transparent text-sm border-none focus-visible:ring-transparent focus-visible:ring-offset-transparent text-cement_400 focus:select-text w-60" placeholder="Loading location..." value={locationInputValue} onChange={(e) => { setLocationInputValue(e.target.value) }} onFocus={(e) => { e.target.select() }} /> :
            <div className=" h-10 w-60 pl-3 flex items-center gap-2">
              <Loader2 size={18} className="text-cement_400 animate-spin" />
              <span className="text-sm text-cement_400">Getting location...</span>
            </div>
          }
          <button className="hover:bg-cement_400 h-min w-min p-1 rounded-full text-cement_400 hover:text-white transition-colors" onClick={(e) => getLocation(e)}>
            <Locate size={18} />
          </button>
        </div>
        <ul className="w-full flex flex-col gap-2 transition">
          {`${location.city}, ${location.state || location.country}` !== locationInputValue &&
            <>
              {!loadingLocationList ?
                <>{locationList?.results ?
                  <>{locationList.results.map((l, i) =>
                    <li key={i} className="flex gap-2 items-center justify-start bg-background py-1 px-2 rounded-md hover:bg-black/10 cursor-pointer" onClick={(e) => { selectLocation(e, l) }}>
                      <Image src={`/flags/${l.country_code.toLowerCase()}.svg`} alt={`${l.country} flag`} width={0} height={0} className="w-6 h-auto" />
                      <span className="text-cement_500 text-sm">{l.name}
                        <span className="text-cement_400 text-sm">{", " + (l.admin1 || l.admin2 || l.country)}</span>
                      </span>
                    </li>
                  )}</> :
                  <>
                    {locationList?.generationtime_ms &&
                      <div className=" h-10 w-60 flex items-center gap-2">
                        <span className="text-sm text-cement_400">No location found</span>
                      </div>}
                  </>
                }</> :
                <div className=" h-10 w-60 flex items-center gap-2">
                  <Loader2 size={18} className="text-cement_400 animate-spin" />
                  <span className="text-sm text-cement_400">Getting location...</span>
                </div>
              }
            </>
          }
        </ul>
      </div>
    </section>
  )
}