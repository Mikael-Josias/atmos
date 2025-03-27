import Sun from "../../public/weather-icons/sun.png"
import Cloud from "../../public/weather-icons/cloud.png"
import Cloudy from "../../public/weather-icons/cloudy.png"
import CloudSun from "../../public/weather-icons/cloud-sun.png"
import Blizzard from "../../public/weather-icons/blizzard.png"
import Drizzle from "../../public/weather-icons/drizzle.png"
import Snowfall from "../../public/weather-icons/snow.png"
import Storm from "../../public/weather-icons/storm.png"
import StormHeavy from "../../public/weather-icons/storm-heavy.png"
import Fog from "../../public/weather-icons/fog.png"
import Rain from "../../public/weather-icons/rain.png"
import RainHeavy from "../../public/weather-icons/rain-heavy.png"
import Image from "next/image"

export const WEATHER_ICONS_SMALL = new Map()
  .set(
    0,
    <Image src={Sun} alt="yellow sun" className="w-8 h-auto" priority />,
  )
  .set(
    1,
    <Image
      src={CloudSun}
      alt="gray cloud with yellow sun"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    2,
    <Image src={Cloud} alt="gray cloud" className="w-8 h-auto" priority />,
  )
  .set(
    3,
    <Image
      src={Cloudy}
      alt="gray cloud"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    45,
    <Image src={Fog} alt="gray fog" className="w-8 h-auto" priority />,
  )
  .set(
    48,
    <Image src={Fog} alt="gray fog" className="w-8 h-auto" priority />,
  )
  .set(
    51,
    <Image
      src={Drizzle}
      alt="light drizzle"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    53,
    <Image
      src={Drizzle}
      alt="light drizzle"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    55,
    <Image
      src={Drizzle}
      alt="light drizzle"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    56,
    <Image
      src={Drizzle}
      alt="light drizzle"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    57,
    <Image
      src={Drizzle}
      alt="light drizzle"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(61, <Image src={Rain} alt="rain" className="w-8 h-auto" priority />)
  .set(63, <Image src={Rain} alt="rain" className="w-8 h-auto" priority />)
  .set(65, <Image src={Rain} alt="rain" className="w-8 h-auto" priority />)
  .set(66, <Image src={Rain} alt="rain" className="w-8 h-auto" priority />)
  .set(67, <Image src={Rain} alt="rain" className="w-8 h-auto" priority />)
  .set(
    71,
    <Image
      src={Snowfall}
      alt="snow fall"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    73,
    <Image
      src={Snowfall}
      alt="snow fall"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    75,
    <Image
      src={Snowfall}
      alt="snow fall"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    77,
    <Image
      src={Blizzard}
      alt="snow shower"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    80,
    <Image
      src={RainHeavy}
      alt="heavy rain"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    81,
    <Image
      src={RainHeavy}
      alt="heavy rain"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    82,
    <Image
      src={RainHeavy}
      alt="heavy rain"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    85,
    <Image
      src={Blizzard}
      alt="snow shower"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    86,
    <Image
      src={Blizzard}
      alt="snow shower"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    95,
    <Image
      src={Storm}
      alt="storm with lightning"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    96,
    <Image
      src={StormHeavy}
      alt="storm with lightning"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    99,
    <Image
      src={StormHeavy}
      alt="storm with lightning"
      className="w-8 h-auto"
      priority
    />,
  )

export const WEATHER_ICONS = new Map()
  .set(
    0,
    <Image src={Sun} alt="yellow sun" className="w-20 md:w-[112px] h-auto" priority />,
  )
  .set(
    1,
    <Image
      src={CloudSun}
      alt="gray cloud with yellow sun"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    2,
    <Image src={Cloud} alt="gray cloud" className="w-20 md:w-[112px] h-auto" priority />,
  )
  .set(
    3,
    <Image
      src={Cloudy}
      alt="gray cloud"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    45,
    <Image src={Fog} alt="gray fog" className="w-20 md:w-[112px] h-auto" priority />,
  )
  .set(
    48,
    <Image src={Fog} alt="gray fog" className="w-20 md:w-[112px] h-auto" priority />,
  )
  .set(
    51,
    <Image
      src={Drizzle}
      alt="light drizzle"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    53,
    <Image
      src={Drizzle}
      alt="light drizzle"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    55,
    <Image
      src={Drizzle}
      alt="light drizzle"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    56,
    <Image
      src={Drizzle}
      alt="light drizzle"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    57,
    <Image
      src={Drizzle}
      alt="light drizzle"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(61, <Image src={Rain} alt="rain" className="w-20 md:w-[112px] h-auto" priority />)
  .set(63, <Image src={Rain} alt="rain" className="w-20 md:w-[112px] h-auto" priority />)
  .set(65, <Image src={Rain} alt="rain" className="w-20 md:w-[112px] h-auto" priority />)
  .set(66, <Image src={Rain} alt="rain" className="w-20 md:w-[112px] h-auto" priority />)
  .set(67, <Image src={Rain} alt="rain" className="w-20 md:w-[112px] h-auto" priority />)
  .set(
    71,
    <Image
      src={Snowfall}
      alt="snow fall"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    73,
    <Image
      src={Snowfall}
      alt="snow fall"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    75,
    <Image
      src={Snowfall}
      alt="snow fall"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    77,
    <Image
      src={Blizzard}
      alt="snow shower"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    80,
    <Image
      src={RainHeavy}
      alt="heavy rain"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    81,
    <Image
      src={RainHeavy}
      alt="heavy rain"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    82,
    <Image
      src={RainHeavy}
      alt="heavy rain"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    85,
    <Image
      src={Blizzard}
      alt="snow shower"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    86,
    <Image
      src={Blizzard}
      alt="snow shower"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    95,
    <Image
      src={Storm}
      alt="storm with lightning"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    96,
    <Image
      src={StormHeavy}
      alt="storm with lightning"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )
  .set(
    99,
    <Image
      src={StormHeavy}
      alt="storm with lightning"
      className="w-20 md:w-[112px] h-auto"
      priority
    />,
  )

export const WEATHER_CODES = new Map()
  .set(0, "Clear Sky")
  .set(1, "Mainly Clear Sky")
  .set(2, "Partly Cloudy Sky")
  .set(3, "Overcast Sky")
  .set(45, "Fog")
  .set(48, "Rime Fog")
  .set(51, "Light Drizzle")
  .set(53, "Moderate Drizzle")
  .set(55, "Intense Drizzle")
  .set(56, "Light Freezing Drizzle")
  .set(57, "Intense Freezing Drizzle")
  .set(61, "Light Rain")
  .set(63, "Moderate Rain")
  .set(65, "Intense Rain")
  .set(66, "Light Freezing Rain")
  .set(67, "Intense Freezing Rain")
  .set(71, "Light Snowfall")
  .set(73, "Moderate Snowfall")
  .set(75, "Intense Snowfall")
  .set(77, "Snow Grains")
  .set(80, "Light Rain Shower")
  .set(81, "Moderate Rain Shower")
  .set(82, "Violent Rain Shower")
  .set(85, "Light Snow Shower")
  .set(86, "Heavy Snow Shower")
  .set(95, "Light/Moderate Thunderstorm")
  .set(96, "Thunderstorm with Light Hail")
  .set(99, "Thunderstorm with Heavy Hail")
