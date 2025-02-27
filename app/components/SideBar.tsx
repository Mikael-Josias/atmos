"use client";
import LocationInput from "./LocationInput";

export default function SideBar() {
  return (
    <section className="flex flex-col md:h-full gap-6 md:gap-10 py-6 bg-white border-r-0 md:border-r-[1px] border-r-gray-200">
      <h1 className="font-inconsolata text-3xl font-bold text-cement_600 text-center md:text-start md:pl-6 w-full border-b-[1px] border-gray-200">
        ATMOS
      </h1>
      <LocationInput />
    </section>
  );
}
