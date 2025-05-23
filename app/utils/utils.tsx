import Sun from "../../public/weather-icons/sun.png"
import Cloudy from "../../public/weather-icons/cloudy.png"
import Cloud from "../../public/weather-icons/cloud.png"
import Clouds from "../../public/weather-icons/clouds.png"
import Foggy from "../../public/weather-icons/foggy.png"
import RainLight from "../../public/weather-icons/rain-light.png"
import FreezingRain from "../../public/weather-icons/freezing-rain.png"
import Rain from "../../public/weather-icons/rain.png"
import SnowLight from "../../public/weather-icons/snow-light.png"
import SnowModerate from "../../public/weather-icons/snow-moderate.png"
import SnowHeavy from "../../public/weather-icons/snow-heavy.png"
import Hails from "../../public/weather-icons/hail.png"
import Storm from "../../public/weather-icons/storm.png"
import Image from "next/image"

export const WEATHER_ICONS_SMALL = new Map()
  .set(
    0,
    <Image src={Sun} alt="yellow sun" className="w-8 h-auto" priority />,
  )
  .set(
    1,
    <Image
      src={Cloudy}
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
      src={Clouds}
      alt="gray cloud"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    45,
    <Image src={Foggy} alt="gray fog" className="w-8 h-auto" priority />,
  )
  .set(
    48,
    <Image src={Foggy} alt="gray fog" className="w-8 h-auto" priority />,
  )
  .set(
    51,
    <Image
      src={RainLight}
      alt="light drizzle"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    53,
    <Image
      src={RainLight}
      alt="light drizzle"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    55,
    <Image
      src={RainLight}
      alt="light drizzle"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    56,
    <Image
      src={FreezingRain}
      alt="light drizzle"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    57,
    <Image
      src={FreezingRain}
      alt="light drizzle"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(61, <Image src={Rain} alt="rain" className="w-8 h-auto" priority />)
  .set(63, <Image src={Rain} alt="rain" className="w-8 h-auto" priority />)
  .set(65, <Image src={Rain} alt="rain" className="w-8 h-auto" priority />)
  .set(66, <Image src={FreezingRain} alt="rain" className="w-8 h-auto" priority />)
  .set(67, <Image src={FreezingRain} alt="rain" className="w-8 h-auto" priority />)
  .set(
    71,
    <Image
      src={SnowLight}
      alt="snow fall"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    73,
    <Image
      src={SnowModerate}
      alt="snow fall"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    75,
    <Image
      src={SnowModerate}
      alt="snow fall"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    77,
    <Image
      src={Hails}
      alt="snow shower"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    80,
    <Image
      src={Rain}
      alt="heavy rain"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    81,
    <Image
      src={Rain}
      alt="heavy rain"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    82,
    <Image
      src={Rain}
      alt="heavy rain"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    85,
    <Image
      src={SnowModerate}
      alt="snow shower"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    86,
    <Image
      src={SnowHeavy}
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
      src={Storm}
      alt="storm with lightning"
      className="w-8 h-auto"
      priority
    />,
  )
  .set(
    99,
    <Image
      src={Storm}
      alt="storm with lightning"
      className="w-8 h-auto"
      priority
    />,
  )

export const WEATHER_ICONS = new Map()
  .set(
    0,
    <Image src={Sun} alt="yellow sun" className="w-20 md:w-32 h-auto" priority />,
  )
  .set(
    1,
    <Image
      src={Cloudy}
      alt="gray cloud with yellow sun"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    2,
    <Image src={Cloud} alt="gray cloud" className="w-20 md:w-32 h-auto" priority />,
  )
  .set(
    3,
    <Image
      src={Clouds}
      alt="gray cloud"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    45,
    <Image src={Foggy} alt="gray fog" className="w-20 md:w-32 h-auto" priority />,
  )
  .set(
    48,
    <Image src={Foggy} alt="gray fog" className="w-20 md:w-32 h-auto" priority />,
  )
  .set(
    51,
    <Image
      src={RainLight}
      alt="light drizzle"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    53,
    <Image
      src={RainLight}
      alt="light drizzle"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    55,
    <Image
      src={RainLight}
      alt="light drizzle"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    56,
    <Image
      src={FreezingRain}
      alt="light drizzle"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    57,
    <Image
      src={FreezingRain}
      alt="light drizzle"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(61, <Image src={Rain} alt="rain" className="w-20 md:w-32 h-auto" priority />)
  .set(63, <Image src={Rain} alt="rain" className="w-20 md:w-32 h-auto" priority />)
  .set(65, <Image src={Rain} alt="rain" className="w-20 md:w-32 h-auto" priority />)
  .set(66, <Image src={FreezingRain} alt="rain" className="w-20 md:w-32 h-auto" priority />)
  .set(67, <Image src={FreezingRain} alt="rain" className="w-20 md:w-32 h-auto" priority />)
  .set(
    71,
    <Image
      src={SnowLight}
      alt="snow fall"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    73,
    <Image
      src={SnowModerate}
      alt="snow fall"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    75,
    <Image
      src={SnowHeavy}
      alt="snow fall"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    77,
    <Image
      src={Hails}
      alt="snow shower"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    80,
    <Image
      src={Rain}
      alt="heavy rain"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    81,
    <Image
      src={Rain}
      alt="heavy rain"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    82,
    <Image
      src={Rain}
      alt="heavy rain"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    85,
    <Image
      src={SnowModerate}
      alt="snow shower"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    86,
    <Image
      src={SnowHeavy}
      alt="snow shower"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    95,
    <Image
      src={Storm}
      alt="storm with lightning"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    96,
    <Image
      src={Storm}
      alt="storm with lightning"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )
  .set(
    99,
    <Image
      src={Storm}
      alt="storm with lightning"
      className="w-20 md:w-32 h-auto"
      priority
    />,
  )

export const WEATHER_CODES = new Map()
  .set(0, "Céu Limpo")
  .set(1, "Parcialmente Nublado")
  .set(2, "Parcialmente Nublado")
  .set(3, "Céu Nublado")
  .set(45, "Névoa")
  .set(48, "Névoa de Geada")
  .set(51, "Chuvisco Leve")
  .set(53, "Chuvisco Moderado")
  .set(55, "Chuvisco Intenso")
  .set(56, "Chuvisco Leve e Gelado")
  .set(57, "Chuvisco Intenso e Gelado")
  .set(61, "Chuva Leve")
  .set(63, "Chuva Moderada")
  .set(65, "Chuva Intensa")
  .set(66, "Chuva Leve e Gelada")
  .set(67, "Chuva Intensa e Gelada")
  .set(71, "Neve Leve")
  .set(73, "Neve Moderada")
  .set(75, "Neve Intensa")
  .set(77, "Granizo")
  .set(80, "Chuvas Leves")
  .set(81, "Chuvas Moderadas")
  .set(82, "Chuvas Violentas")
  .set(85, "Neve Leve")
  .set(86, "Neve Pesada")
  .set(95, "Leve/Moderada Tempestade")
  .set(96, "Tempestade com Granizo Leve")
  .set(99, "Tempestade com Granizo Pesado")
