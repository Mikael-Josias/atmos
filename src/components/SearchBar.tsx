import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"
import { faMagnifyingGlass, faEarthAmericas, faCompass, faFaceSadTear } from "@fortawesome/free-solid-svg-icons"
import { Input } from "./ui/input"
import { getCities, ICityAPIResponse } from "@/services/api/cityAPI"
import { useContext, useEffect, useState } from "react"
import { ScrollArea } from "./ui/scroll-area"
import { locationContext } from "@/contexts/locationContext"

export function SearchBar() {
  const currentCity = useContext(locationContext)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [searchedCity, setSearchedCity] = useState<string>("")
  const [searchedCityResult, setSearchedCityResult] = useState<ICityAPIResponse[] | undefined>()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    if (searchedCity === "") return
    const timeOutCity = setTimeout(loadCities, 1000) //1s
    setIsLoading(true)
    return () => clearTimeout(timeOutCity)
  }, [searchedCity])

  async function loadCities() {
    try {
      setSearchedCityResult(await getCities(searchedCity))
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  return (
    <Dialog open={openDialog} onOpenChange={setOpenDialog}>
      <DialogTrigger asChild>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="bg-white p-4 m-0 rounded-full text-xs text-zinc-600 cursor-pointer" />
      </DialogTrigger>
      <DialogContent className="bg-zinc-100">
        <DialogHeader>
          <DialogTitle>Busque uma Cidade</DialogTitle>
          <DialogDescription>Veja o clima em quase qualquer lugar do mundo.</DialogDescription>
          <Input placeholder="Nome da cidade" value={searchedCity} onChange={(e) => setSearchedCity(e.target.value.trimStart())} />
        </DialogHeader>
        <ScrollArea className="max-h-48 mt-4">
          <div className="flex flex-col gap-3 items-center justify-center">
            {searchedCity === "" && !searchedCityResult?.length ? (
              <FontAwesomeIcon icon={faEarthAmericas} className="size-28 text-zinc-300" />
            ) : isLoading ? (
              <FontAwesomeIcon icon={faCompass} className="size-28 text-zinc-300 animate-spin" />
            ) : searchedCityResult?.length ? (
              searchedCityResult.map((c) => (
                <div key={c.latitude} className="bg-white w-full rounded-md px-3 py-3 hover:bg-zinc-200 cursor-pointer flex gap-4 items-center" onClick={() => {
                  currentCity?.setSelectedCity(c)
                  setOpenDialog(false)
                }}>
                  <img src={`./src/assets/country-flags/${c.country.toLowerCase()}.png`} className="h-7 rounded-sm" />
                  <span>{c.name}<span className="text-zinc-500">&nbsp;- {c.region}, {c.country}</span></span>
                </div>))
            ) : (
              <>
                <FontAwesomeIcon icon={faFaceSadTear} className="size-28 text-zinc-300" />
                <p className="text-xs text-zinc-400 text-center">Desculpe! Ainda não temos<br /> essa cidade em nosso banco de dados.</p>
              </>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}