import { Location, useLocationContext } from "@/app/contexts/LocationContext"
import { Star } from "lucide-react"

export default function SaveButton({ location }: { location: Location | null }) {
  const { savedLocations, setSavedLocations } = useLocationContext()

  function findSavedLocationIndex() {
    return savedLocations.findIndex((l) => {
      if (l.city == location?.city && l.state == location?.state && l.country == location?.country) return true
    })
  }

  function saveLocation(e: React.MouseEvent<SVGSVGElement>) {
    e.stopPropagation()
    const saved = findSavedLocationIndex()
    if (saved !== -1) savedLocations.splice(saved, 1)
    else if (location) savedLocations.push(location)
    setSavedLocations([...savedLocations])
    localStorage.setItem("saved-locations", JSON.stringify([...savedLocations]))
  }

  return (
    <div className="h-full px-2 flex items-center justify-center">
      <Star className={`${findSavedLocationIndex() !== -1 && "text-yellow-300 fill-yellow-300 rotate-12"} size-4 text-border fill-border hover:text-yellow-300 hover:fill-yellow-300 transition-colors cursor-pointer hover:rotate-12 duration-100`} onClick={(e) => saveLocation(e)} />
    </div>
  )
}