interface ReverseGeocodingProps {
  lat: number,
  lon: number,
}

interface ReverseGeocodingResults {
  name: string,
  state: string,
  country: string,
}

const headers = {
  'X-Api-Key': process.env.NEXT_PUBLIC_GEOLOCATION_KEY as string
}

export async function getReverseGeocoding({ lat, lon }: ReverseGeocodingProps): Promise<ReverseGeocodingResults[]> {
  try {
    const result = (await fetch(`${process.env.NEXT_PUBLIC_GEOLOCATION_URL}/v1/reversegeocoding?lat=${lat}&lon=${lon}`, { headers })).json()
    return result
  } catch (error) {
    throw new Error("An error ocurred: " + error)
  }
}

