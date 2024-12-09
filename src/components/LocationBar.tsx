import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapPin } from "@fortawesome/free-solid-svg-icons"
import { useContext } from "react"
import { locationContext } from "@/contexts/locationContext"

export default function LocationBar() {
  const city = useContext(locationContext)

  return (
    <div className="bg-white rounded-full px-6 py-3 flex gap-2 items-center">
      <FontAwesomeIcon icon={faMapPin} className="text-zinc-600 text-sm" />
      <span className="text-sm text-zinc-600">{city?.selectedCity?.name} - {city?.selectedCity?.region}</span>
    </div>
  )
}