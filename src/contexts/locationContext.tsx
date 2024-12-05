
import { ICityAPIResponse } from "@/services/api/cityAPI"
import { defaultLocationsMock } from "@/utils/locations"
import { createContext, useState } from "react"

interface contextProps {
  selectedCity: ICityAPIResponse | undefined
  setSelectedCity: React.Dispatch<React.SetStateAction<ICityAPIResponse>>
}

export const locationContext = createContext<contextProps | undefined>(undefined)

export function LocationContextProvider({ children }: any) {
  const [selectedCity, setSelectedCity] = useState<ICityAPIResponse>(getRandomLocation)

  function getRandomLocation() {
    const index = Math.floor(defaultLocationsMock.length * Math.random())
    return defaultLocationsMock[index]
  }

  return (
    <locationContext.Provider value={{ selectedCity, setSelectedCity }}>
      {children}
    </locationContext.Provider>
  )

}