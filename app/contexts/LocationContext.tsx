"use client"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

export type Location = {
  city: string,
  state: string,
  country: string,
  lat: number,
  lon: number,
}

const defaultLocations: Location[] = [
  { city: "Paris", state: "", country: "France", lat: 48.8566, lon: 2.3522 },
  { city: "New York", state: "New York", country: "USA", lat: 40.7128, lon: -74.0060 },
  { city: "London", state: "", country: "United Kingdom", lat: 51.5074, lon: -0.1278 },
  { city: "Tokyo", state: "", country: "Japan", lat: 35.682839, lon: 139.759455 },
  { city: "Dubai", state: "", country: "United Arab Emirates", lat: 25.276987, lon: 55.296249 },
  { city: "Sydney", state: "New South Wales", country: "Australia", lat: -33.8688, lon: 151.2093 },
  { city: "Rome", state: "", country: "Italy", lat: 41.9028, lon: 12.4964 },
  { city: "Cairo", state: "", country: "Egypt", lat: 30.0444, lon: 31.2357 },
  { city: "Rio de Janeiro", state: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lon: -43.1729 },
  { city: "Moscow", state: "", country: "Russia", lat: 55.7558, lon: 37.6173 },
  { city: "Beijing", state: "", country: "China", lat: 39.9042, lon: 116.4074 },
  { city: "Bangkok", state: "", country: "Thailand", lat: 13.7563, lon: 100.5018 },
  { city: "Istanbul", state: "", country: "Turkey", lat: 41.0082, lon: 28.9784 },
  { city: "Mexico City", state: "Mexico City", country: "Mexico", lat: 19.4326, lon: -99.1332 },
  { city: "Berlin", state: "", country: "Germany", lat: 52.5200, lon: 13.4050 },
  { city: "Barcelona", state: "", country: "Spain", lat: 41.3851, lon: 2.1734 },
  { city: "Athens", state: "", country: "Greece", lat: 37.9838, lon: 23.7275 },
  { city: "Amsterdam", state: "", country: "Netherlands", lat: 52.3676, lon: 4.9041 },
  { city: "Toronto", state: "Ontario", country: "Canada", lat: 43.6511, lon: -79.3832 },
  { city: "Mumbai", state: "Maharashtra", country: "India", lat: 19.0760, lon: 72.8777 }
]

interface LocationContextProps {
  location: Location,
  setLocation: Dispatch<SetStateAction<Location>>
}

const LocationContext = createContext<LocationContextProps | null>(null)

export function LocationContextProvider({ children }: { children: React.ReactNode }) {

  const [location, setLocation] = useState<Location>(defaultLocations[Math.floor(Math.random() * defaultLocations.length)])

  return (
    <LocationContext.Provider value={{ location, setLocation }}>
      {children}
    </LocationContext.Provider>
  )
}

export function useLocationContext() {
  const location = useContext(LocationContext)
  if (!location) {
    throw new Error("useLocationContext should be within LocationContextProvider.")
  }

  return location
}