import { Location, useLocationContext } from "@/app/contexts/LocationContext"
import Image from "next/image"
import SaveButton from "./SaveButton"
import { CheckCircle2 } from "lucide-react"

interface LocationItemProps {
  location: Location,
  onClick: React.MouseEventHandler<HTMLElement>
}

export default function LocationItem({ location, onClick }: LocationItemProps) {
  const { location: selectedLocation } = useLocationContext()

  function isSelected() {
    if (selectedLocation?.city === location.city && selectedLocation?.state === location.state && selectedLocation?.country === location.country) {
      return true
    }
    return false
  }

  return (
    <div className="flex items-center gap-2 px-3 py-2 border-[1px] border-snow_500 hover:bg-snow_500 bg-snow_400 relative cursor-pointer group" onClick={onClick}>
      <Image src={`/flags/${location.country_code}.svg`} alt={`${location.country} flag`} className="flex-shrink-0" width={24} height={16} />
      <span className="font-alexandria text-sm font-light text-cement_400">{location.city},{" "}{location.state || location.country}</span>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 h-full bg-gradient-to-tr from-transparent to-snow_400 group-hover:to-snow_500">
        <SaveButton location={location} />
      </div>
      {isSelected() &&
        <CheckCircle2 className="size-[18px] text-white fill-cement_400 absolute left-0 top-0" />
      }
    </div>
  )
}