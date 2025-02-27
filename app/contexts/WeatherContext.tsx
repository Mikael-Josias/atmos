"use client";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { getWeather, IWeatherFormattedData } from "../services/WeatherAPI";
import { useLocationContext } from "./LocationContext";
import { useToast } from "@/hooks/use-toast";

interface WeatherContextProps {
  weather: IWeatherFormattedData | null;
  setWeather: Dispatch<SetStateAction<IWeatherFormattedData | null>>;
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
  const [weather, setWeather] = useState<IWeatherFormattedData | null>(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    setLoadingWeather(true);
    async function getWeatherData() {
      const res = await getWeather({
        lat: location.lat,
        lon: location.lon,
        days: 1,
      });

      if (typeof res === "object" && res instanceof Object) {
        setWeather(res);
        setLoadingWeather(false);
        return;
      }

      toast({
        title: "Error!",
        description: res,
      });
      setLoadingWeather(false);
    }

    getWeatherData();
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
