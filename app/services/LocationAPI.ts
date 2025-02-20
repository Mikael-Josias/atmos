interface ReverseGeocodingResults {
  name: string,
  state: string,
  country: string,
}
export interface GeocodingObject {
  name: string,
  latitude: number,
  longitude: number,
  country_code: string,
  country: string,
  admin1: string,
  admin2: string
}
export interface GeocodingResults {
  results?: GeocodingObject[],
  generationtime_ms: number
}

const headers = {
  'X-Api-Key': process.env.NEXT_PUBLIC_GEOLOCATION_KEY as string
}

export async function getReverseGeocoding({ lat, lon }: { lat: number, lon: number }): Promise<ReverseGeocodingResults[]> {
  try {
    const result = (await fetch(`${process.env.NEXT_PUBLIC_GEOLOCATION_URL}/v1/reversegeocoding?lat=${lat}&lon=${lon}`, { headers })).json()
    return result
  } catch (error) {
    throw new Error("An error ocurred: " + error)
  }
}



export async function getGeocoding(city: string): Promise<GeocodingResults> {
  try {
    const result = (await fetch(`${process.env.NEXT_PUBLIC_GEOLOCATION2_URL}/search?name=${city}&count=5&language=en&format=json`)).json()
    return result
  } catch (error) {
    throw new Error("An error ocurred: " + error)
  }
}