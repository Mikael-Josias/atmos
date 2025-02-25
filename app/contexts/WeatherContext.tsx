"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getTodayWeather, Weather } from "../services/WeatherAPI";
import { useLocationContext } from "./LocationContext";
import { useToast } from "@/hooks/use-toast";

interface WeatherContextProps {
  weather: Weather | null;
  setWeather: Dispatch<SetStateAction<Weather | null>>;
  loadingWeather: boolean;
  setLoadingWeather: Dispatch<SetStateAction<boolean>>;
}

const WeatherContext = createContext<WeatherContextProps | null>(null);

export function WeatherContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { toast } = useToast();
  const { location } = useLocationContext();
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    setLoadingWeather(true);
    async function getWeather() {
      try {
        const res = await getTodayWeather({
          lat: location.lat,
          lon: location.lon,
        });
        setWeather(res);
      } catch (error) {
        toast({
          title: "Error!",
          description:
            "I'm sorry, it seens we cannot get the weather of this location",
        });
        console.log(error);
      }
      setLoadingWeather(false);
    }

    getWeather();
  }, [location, toast]);

  return (
    <WeatherContext.Provider
      value={{ weather, setWeather, loadingWeather, setLoadingWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
}

export function useWeatherContext() {
  const weather = useContext(WeatherContext);
  if (!weather)
    throw new Error(
      "useWeatherContext should be within WeatherContextProvider.",
    );

  return weather;
}
