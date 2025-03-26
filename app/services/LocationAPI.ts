"use server"

interface GeocodingResults2 {
  totalResultsCount: number,
  geonames: {
    lng: number,
    countryCode: string,
    name: string,
    countryName: string,
    adminName1: string,
    lat: number,
  }[]

}
interface GeocodingResults {
  lat: number,
  lon: number,
  address: {
    city: string,
    state: string,
    country: string,
    country_code: string,
  },
}

export async function getLocationFromCoords(lat: number, lon: number) {
  try {
    const res = (await (await fetch(`${process.env.NEXT_PUBLIC_GEO_API_URL}reverse?key=${process.env.NEXT_PUBLIC_GEO_API_KEY}&lat=${lat}&lon=${lon}&accept-language=pt-BR&format=json&`)).json()) as GeocodingResults
    return {
      lat: res.lat,
      lon: res.lon,
      city: res.address.city,
      state: res.address.state,
      country: res.address.country,
      country_code: res.address.country_code,
    }
  } catch (error) {
    return "Desculpe! Não conseguimos achar sua localização."
  }
}

export async function getLocationFromCityName(city: string) {
  try {
    const res = (await (await fetch(`${process.env.NEXT_PUBLIC_GEONAME_URL}/searchJSON?name_equals=${city}&maxRows=8&featureClass=A&featureCode=ADM2&lang=pt-BR&${process.env.NEXT_PUBLIC_GEONAME_USER}`)).json()) as GeocodingResults2
    return res
  } catch (error) {
    return "Desculpe! Não conseguimos achar sua localização."
  }
}
