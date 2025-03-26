import LocationInput from "./LocationInput/LocationInput"

export default function SideBar() {
  return (
    <section className="w-full md:w-80 h-full flex flex-col flex-shrink-0 gap-6 p-6 bg-white border-r-[1px] border-r-snow_500 overflow-hidden">
      <div className="w-full text-center pb-3 border-b-[1px] border-b-snow_500">
        <h1 className="font-alexandria text-xl md:text-2xl text-cement_600">
          Atmos
        </h1>
      </div>
      <LocationInput />
    </section>
  )
}
