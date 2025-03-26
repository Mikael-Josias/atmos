"use client"
import React, { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react"

export interface Location {
  city: string,
  state: string,
  country: string,
  country_code: string,
  lat: number,
  lon: number,
}

interface LocationContextProps {
  location: Location | null,
  loadingLocation: boolean,
  savedLocations: Location[],
  setLocation: Dispatch<SetStateAction<Location | null>>,
  setLoadingLocation: Dispatch<SetStateAction<boolean>>,
  setSavedLocations: Dispatch<SetStateAction<Location[]>>,
}

const LocationContext = createContext<LocationContextProps | null>(null)

export function LocationContextProvider({ children }: { children: React.ReactNode }) {
  const [location, setLocation] = useState<Location | null>(null)
  const [savedLocations, setSavedLocations] = useState<Location[]>([])
  const [loadingLocation, setLoadingLocation] = useState(true)

  function getSavedLocationsOrRandom(key: string) {
    setLoadingLocation(true)
    const savedLocationsList = localStorage.getItem(key)
    console.log(savedLocationsList)
    if (savedLocationsList === null) {
      localStorage.setItem(key, JSON.stringify(savedLocations))
      return defaultLocations[Math.floor(Math.random() * defaultLocations.length)]
    }
    const parsed = JSON.parse(savedLocationsList) as Location[]
    console.log(parsed)
    if (parsed.length === 0) {
      return defaultLocations[Math.floor(Math.random() * defaultLocations.length)]
    }
    setSavedLocations(parsed)
    console.log(parsed)
    return parsed[0]
  }

  useEffect(() => {
    if (window === undefined) return
    setLocation(getSavedLocationsOrRandom("saved-locations"))
    setLoadingLocation(false)
  }, [])

  return (
    <LocationContext.Provider value={{ location, loadingLocation, savedLocations, setLocation, setLoadingLocation, setSavedLocations }} >
      {children}
    </LocationContext.Provider>
  )
}

export function useLocationContext() {
  const location = useContext(LocationContext)
  if (!location) throw new Error("useLocationContext should be within LocationContextProvider.")
  return location
}

const defaultLocations: Location[] = [
  { city: "Paris", state: "", country: "France", lat: 48.8566, lon: 2.3522, country_code: "fr" },
  { city: "New York", state: "New York", country: "USA", lat: 40.7128, lon: -74.0060, country_code: "us" },
  { city: "London", state: "", country: "United Kingdom", lat: 51.5074, lon: -0.1278, country_code: "uk" },
  { city: "Tokyo", state: "", country: "Japan", lat: 35.682839, lon: 139.759455, country_code: "jp" },
  { city: "Dubai", state: "", country: "United Arab Emirates", lat: 25.276987, lon: 55.296249, country_code: "ae" },
  { city: "Sydney", state: "New South Wales", country: "Australia", lat: -33.8688, lon: 151.2093, country_code: "au" },
  { city: "Rome", state: "", country: "Italy", lat: 41.9028, lon: 12.4964, country_code: "it" },
  { city: "Cairo", state: "", country: "Egypt", lat: 30.0444, lon: 31.2357, country_code: "eg" },
  { city: "Rio de Janeiro", state: "Rio de Janeiro", country: "Brazil", lat: -22.9068, lon: -43.1729, country_code: "br" },
  { city: "Moscow", state: "", country: "Russia", lat: 55.7558, lon: 37.6173, country_code: "ru" },
  { city: "Beijing", state: "", country: "China", lat: 39.9042, lon: 116.4074, country_code: "cn" },
  { city: "Bangkok", state: "", country: "Thailand", lat: 13.7563, lon: 100.5018, country_code: "th" },
  { city: "Istanbul", state: "", country: "Turkey", lat: 41.0082, lon: 28.9784, country_code: "pe" },
  { city: "Mexico City", state: "Mexico City", country: "Mexico", lat: 19.4326, lon: -99.1332, country_code: "mx" },
  { city: "Berlin", state: "", country: "Germany", lat: 52.5200, lon: 13.4050, country_code: "de" },
  { city: "Barcelona", state: "", country: "Spain", lat: 41.3851, lon: 2.1734, country_code: "es" },
  { city: "Athens", state: "", country: "Greece", lat: 37.9838, lon: 23.7275, country_code: "gr" },
  { city: "Amsterdam", state: "", country: "Netherlands", lat: 52.3676, lon: 4.9041, country_code: "nl" },
  { city: "Toronto", state: "Ontario", country: "Canada", lat: 43.6511, lon: -79.3832, country_code: "ca" },
  { city: "Mumbai", state: "Maharashtra", country: "India", lat: 19.0760, lon: 72.8777, country_code: "in" }
]
