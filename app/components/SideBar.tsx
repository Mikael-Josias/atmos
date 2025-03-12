import LocationInput from "./LocationInput";
import ToggleTheme from "./ToggleTheme";

export default function SideBar() {
  return (
    <section className="flex flex-col md:h-full gap-6 md:gap-10 py-6 bg-white dark:bg-gray-600 border-r-0 md:border-r-[1px] border-r-gray-200 dark:border-none">
      <div className="flex flex-row items-center justify-between w-full border-b-[1px] border-gray-200 dark:border-r-gray-400 px-6">
        <h1 className="font-inconsolata text-3xl font-bold text-cement_600 dark:text-white text-center md:text-start  ">
          ATMOS
        </h1>
        <ToggleTheme />
      </div>
      <LocationInput />
    </section>
  );
}
