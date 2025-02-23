import {
  Cloud,
  CloudFog,
  CloudHail,
  CloudLightning,
  CloudRain,
  CloudRainWind,
  CloudSnow,
  Cloudy,
  Rainbow,
  Snowflake,
} from "lucide-react";

const ICON_SIZE = 128;

export const WEATHER_ICONS = new Map()
  .set(0, <Rainbow size={ICON_SIZE} />)
  .set(1, <Rainbow size={ICON_SIZE} />)
  .set(2, <Cloud size={ICON_SIZE} />)
  .set(3, <Cloudy size={ICON_SIZE} />)
  .set(45, <CloudFog size={ICON_SIZE} />)
  .set(48, <CloudFog size={ICON_SIZE} />)
  .set(51, <CloudHail size={ICON_SIZE} />)
  .set(53, <CloudHail size={ICON_SIZE} />)
  .set(55, <CloudHail size={ICON_SIZE} />)
  .set(56, <CloudHail size={ICON_SIZE} />)
  .set(57, <CloudHail size={ICON_SIZE} />)
  .set(61, <CloudRain size={ICON_SIZE} />)
  .set(63, <CloudRain size={ICON_SIZE} />)
  .set(65, <CloudRain size={ICON_SIZE} />)
  .set(66, <CloudRain size={ICON_SIZE} />)
  .set(67, <CloudRain size={ICON_SIZE} />)
  .set(71, <Snowflake size={ICON_SIZE} />)
  .set(73, <Snowflake size={ICON_SIZE} />)
  .set(75, <Snowflake size={ICON_SIZE} />)
  .set(77, <Snowflake size={ICON_SIZE} />)
  .set(80, <CloudRainWind size={ICON_SIZE} />)
  .set(81, <CloudRainWind size={ICON_SIZE} />)
  .set(82, <CloudRainWind size={ICON_SIZE} />)
  .set(85, <CloudSnow size={ICON_SIZE} />)
  .set(86, <CloudSnow size={ICON_SIZE} />)
  .set(95, <CloudLightning size={ICON_SIZE} />)
  .set(96, <CloudLightning size={ICON_SIZE} />)
  .set(99, <CloudLightning size={ICON_SIZE} />);

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
  .set(99, "Thunderstorm with Heavy Hail");
