"use client"
import LocationInput from "./LocationInput"

export default function SideBar() {
  return (
    <section className="flex flex-col h-min gap-12 p-6 bg-white rounded-xl">
      <h1 className="font-inconsolata text-3xl font-bold text-cement_600 w-full border-b-[1px] border-silver">ATMOS</h1>
      <LocationInput />
    </section>
  )
}