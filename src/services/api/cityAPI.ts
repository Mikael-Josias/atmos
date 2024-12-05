import axios from "axios"

const CITY_API_URL = "/v1/city"
const CITY_API_LIMIT = 20

export interface ICityAPIResponse {
  country: string
  is_capital: boolean
  latitude: number
  longitude: number
  name: string
  population: number
  region: string
}

const axiosCityAPI = axios.create({
  baseURL: import.meta.env.VITE_CITY_API_URL,
  headers: {
    "X-Api-Key": import.meta.env.VITE_CITY_API_KEY,
  }
})

export async function getCities(city: string) {
  try {
    const res = await axiosCityAPI.get<ICityAPIResponse[] | []>(CITY_API_URL, {
      params: {
        name: city,
        limit: CITY_API_LIMIT
      }
    })
    return res.data
  } catch (error) {
    console.log(error)
    throw new Error("Error while loading cities.")
  }
}