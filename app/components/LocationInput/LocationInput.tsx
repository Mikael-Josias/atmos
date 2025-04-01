"use client"
import { getLocationFromCityName, getLocationFromCoords } from "@/app/services/LocationAPI"
import { useLocationContext } from "../../contexts/LocationContext"
import { Loader2, LocateFixed } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { useEffect, useState } from "react"
import SaveButton from "./SaveButton"
import LocationItem from "./LocationItem"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function LocationInput() {
  const { toast } = useToast()
  const { location, savedLocations, loadingLocation, setLocation, setLoadingLocation } = useLocationContext()
  const [search, setSearch] = useState("")
  const [searchResponse, setSearchResponse] = useState<typeof savedLocations>([])

  function getCoordinates() {
    setLoadingLocation(true)
    setSearchResponse([])
    setSearch("")
    navigator.geolocation.getCurrentPosition(async (pos) => {
      const res = await getLocationFromCoords(pos.coords.latitude, pos.coords.longitude)
      if (typeof res === "string") {
        toast({ title: res })
      } else {
        setLocation({
          lat: res.lat,
          lon: res.lon,
          city: res.city,
          state: res.state,
          country: res.country,
          country_code: res.country_code,
        })
      }
      setLoadingLocation(false)
    }, () => {
      toast({ title: "É necessário sua permissão para conseguirmos sua localização." })
      setLoadingLocation(false)
    })
  }

  async function searchLocationByCity() {
    const res = await getLocationFromCityName(search)
    if (typeof res === 'string') {
      toast({ title: res })
      return
    }
    const tempArr: typeof savedLocations = []
    res.geonames.map((l) => {
      tempArr.push({
        lat: l.lat,
        lon: l.lng,
        city: l.name,
        state: l.adminName1,
        country: l.countryName,
        country_code: l.countryCode.toLowerCase(),
      })
    })
    setSearchResponse([...tempArr])
    setLoadingLocation(false)
  }

  function selectLocation(l: typeof location) {
    setLocation(l)
    setSearch("")
    setSearchResponse([])
  }

  useEffect(() => {
    const timeoutSearch = setTimeout(async () => {
      if (search.trim().length < 3) return
      setLoadingLocation(true)
      searchLocationByCity()
    }, 500)

    return () => clearTimeout(timeoutSearch)
  }, [search])

  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-col gap-3 pb-3 border-b-[1px] border-b-snow_500">
        {/* LOCATION INPUT */}
        <div className="w-full h-9 border-[1px] border-snow_500 flex items-stretch relative">
          <Input value={search} placeholder={loadingLocation ? "Carregando..." : `${location?.city}, ${location?.state || location?.country}`} className="font-alexandria text-sm font-light text-cement_500 placeholder:text-cement_500 w-full h-full bg-transparent px-3 py-2 border-none focus-visible:ring-transparent focus-visible:ring-offset-transparent" onChange={(e) => setSearch(e.target.value)} />
          <button className="flex items-center justify-center px-2 bg-snow_500 group" disabled={loadingLocation} onClick={() => getCoordinates()}>
            {loadingLocation ?
              <Loader2 className="size-5 text-cement_500 animate-spin" /> :
              <LocateFixed className="size-5 text-cement_500 group-hover:rotate-12 duration-100" />
            }
          </button>
          {(search.trim() !== "" || loadingLocation) ||
            <div className="absolute right-9 top-1/2 -translate-y-1/2 h-full bg-gradient-to-tr from-transparent via-white to-white">
              <SaveButton location={location} />
            </div>
          }
        </div>

        {/* LOCATIONS LIST */}
        <ScrollArea className="w-full h-full max-h-[calc(42px*4)] transition-all">
          <div className="flex flex-col gap-1.5">
            {((search.length >= 3 && loadingLocation) || (search.length >= 3 && searchResponse.length === 0)) &&
              <div className="flex items-center gap-2 px-3 py-2 border-[1px] border-snow_500 hover:bg-snow_500 bg-snow_400 relative group">
                <span className="font-alexandria text-sm font-light text-cement_400">{loadingLocation ? "Carregando..." : "Não encontramos :("}</span>
              </div>
            }
            {!loadingLocation && searchResponse.map((l) =>
              <LocationItem location={l} key={l.lat} onClick={() => selectLocation(l)} />
            )}
          </div>
        </ScrollArea>
      </div>

      {/* SAVED LOCATIONS */}
      <ScrollArea className="w-full h-full max-h-[33%]">
        <div className="flex flex-col gap-1.5">
          {savedLocations.map((l) =>
            <LocationItem location={l} key={l.lat} onClick={() => selectLocation(l)} />
          )}
        </div>
      </ScrollArea>
    </div>
  )
}

// "use client";
// import { Label } from "@/components/ui/label";
// import { useToast } from "@/hooks/use-toast";
// import { MouseEvent, useEffect, useState } from "react";
// import { useLocationContext } from "../contexts/LocationContext";
// import {
//   GeocodingObject,
//   GeocodingResults,
//   getGeocoding,
//   getReverseGeocoding,
// } from "../services/LocationAPI";
// import { Input } from "@/components/ui/input";
// import { Loader2, Locate } from "lucide-react";
// import Image from "next/image";
// import { ScrollArea } from "@/components/ui/scroll-area";

// export default function LocationInput() {
//   const { toast } = useToast();
//   const [loadingLocation, setLoadingLocation] = useState<boolean>(false);
//   const [loadingLocationList, setLoadingLocationList] =
//     useState<boolean>(false);
//   const { location, setLocation } = useLocationContext();
//   const [locationInputValue, setLocationInputValue] = useState<string>(
//     `${location.city}, ${location.state || location.country}`,
//   );
//   const [locationList, setLocationList] = useState<GeocodingResults | null>(
//     null,
//   );
//   const [disabledGetLocationButton, setDisabledGetLocationButton] =
//     useState(false);

//   useEffect(() => {
//     const timeoutSearch = setTimeout(async () => {
//       if (locationInputValue.includes(",")) return;
//       setLoadingLocationList(true);
//       const res = await getGeocoding(locationInputValue);
//       setLocationList(res);
//       const loading = () => setLoadingLocationList(false);
//       loading();
//     }, 500);

//     return () => clearTimeout(timeoutSearch);
//   }, [locationInputValue]);

//   function getLocation(e: MouseEvent) {
//     e.preventDefault();
//     setDisabledGetLocationButton(true);
//     setLoadingLocation(true);
//     setLocationList(null);
//     navigator.geolocation.getCurrentPosition(
//       async (position) => {
//         const res = (
//           await getReverseGeocoding({
//             lat: position.coords.latitude,
//             lon: position.coords.longitude,
//           })
//         )[0];
//         setLocation({
//           city: res.name,
//           state: res.state,
//           country: res.country,
//           lat: position.coords.latitude,
//           lon: position.coords.longitude,
//         });
//         setLocationInputValue(`${res.name}, ${res.state || res.country}`);
//         setLoadingLocation(false);
//         setDisabledGetLocationButton(false);
//       },
//       () => {
//         toast({
//           title: "Sorry! We coundn't find you.",
//           description:
//             "Please, verify if location access is denied on this site. Or search for your city on our location box.",
//         });
//         setLoadingLocation(false);
//         setDisabledGetLocationButton(false);
//       },
//     );
//   }

//   function selectLocation(e: MouseEvent, l: GeocodingObject) {
//     e.preventDefault();
//     setLocation({
//       city: l.name,
//       state: l.admin1,
//       country: l.country,
//       lat: l.latitude,
//       lon: l.longitude,
//     });
//     setLocationInputValue(`${l.name}, ${l.admin1 || l.admin2}`);
//     setLocationList(null);
//   }

//   return (
//     <div className="px-6 overflow-hidden">
//       <Label
//         htmlFor="locationInput"
//         className="text-sm font-medium text-cement_500 dark:text-white"
//       >
//         Location
//       </Label>
//       <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-700 pl-3 pr-3 rounded-full my-2">
//         {!loadingLocation ? (
//           <Input
//             id="locationInput"
//             className="bg-transparent text-sm border-none focus-visible:ring-transparent focus-visible:ring-offset-transparent text-cement_400 dark:text-gray-300 focus:select-text w-60"
//             placeholder="Loading location..."
//             value={locationInputValue}
//             onChange={(e) => {
//               setLocationInputValue(e.target.value);
//             }}
//             onFocus={(e) => {
//               e.target.select();
//             }}
//           />
//         ) : (
//           <div className=" h-10 w-60 pl-3 flex items-center gap-2">
//             <Loader2
//               size={18}
//               className="text-cement_400 dark:text-gray-300 animate-spin"
//             />
//             <span className="text-sm text-cement_400 dark:text-gray-300">
//               Getting location...
//             </span>
//           </div>
//         )}
//         <button
//           className="hover:bg-cement_400 dark:hover:bg-gray-700 h-min w-min p-1 rounded-full text-cement_400 dark:text-gray-300 hover:text-white dark:hover:text-white transition-colors"
//           onClick={(e) => getLocation(e)}
//           disabled={disabledGetLocationButton}
//         >
//           <Locate size={18} />
//         </button>
//       </div>
//       <ScrollArea className="h-full md:h-[calc(8*44px+8*8px)]">
//         <ul className="w-full flex flex-col gap-2 overflow-auto">
//           {`${location.city}, ${location.state || location.country}` !==
//             locationInputValue && (
//             <>
//               {!loadingLocationList ? (
//                 <>
//                   {locationList?.results ? (
//                     <>
//                       {locationList.results.map((l, i) => (
//                         <li
//                           key={i}
//                           className="flex gap-2 items-center justify-start bg-gray-100 dark:bg-gray-700 py-3 px-2 rounded-md hover:bg-black/10 dark:hover:bg-white/10 cursor-pointer"
//                           onClick={(e) => {
//                             selectLocation(e, l);
//                           }}
//                         >
//                           <Image
//                             src={`/flags/${l.country_code.toLowerCase()}.svg`}
//                             alt={`${l.country} flag`}
//                             width={0}
//                             height={0}
//                             className="w-6 h-auto"
//                           />
//                           <span className="text-cement_500 dark:text-gray-100 text-sm">
//                             {l.name}
//                             <span className="text-cement_400 dark:text-gray-300 text-sm">
//                               {", " + (l.admin1 || l.admin2 || l.country)}
//                             </span>
//                           </span>
//                         </li>
//                       ))}
//                     </>
//                   ) : (
//                     <>
//                       {locationList?.generationtime_ms && (
//                         <div className=" h-10 w-60 flex items-center gap-2">
//                           <span className="text-sm text-cement_400 dark:text-gray-300">
//                             No location found
//                           </span>
//                         </div>
//                       )}
//                     </>
//                   )}
//                 </>
//               ) : (
//                 <div className=" h-10 w-60 flex items-center gap-2">
//                   <Loader2 size={18} className="text-cement_400 animate-spin" />
//                   <span className="text-sm text-cement_400  dark:text-gray-300">
//                     Getting location...
//                   </span>
//                 </div>
//               )}
//             </>
//           )}
//         </ul>
//       </ScrollArea>
//     </div>
//   );
// }
