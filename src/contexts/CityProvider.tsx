import { useState, createContext, ReactNode } from "react";

export type Temperature = {
  current?: number;
  min: number,
  max: number,
}

export type Weather = {
  city?: string;
  date: string;
  weather: string;
  temperature: Temperature;
  moonPhase?: string;
  rainProbability?: number;
}

export interface ICityContext {
  city: {
    name: string;
    lat: number;
    lon: number;
    state: string;
  }
  currentWeather: Weather
  nextWeathers: Array<Weather>
}

export interface CityProviderProps {
  children: ReactNode;
}

export const CityContext = createContext<ICityContext | {}>({});

export default function CityProvider({ children }: CityProviderProps) {
  const [cities, setCities] = useState<Array<ICityContext>>([]);
  const [currentCity, setCurrentCity] = useState<ICityContext>();

  return (
    <CityContext.Provider value={{
      cities,
      setCities,
      currentCity,
      setCurrentCity
    }}>{children}</CityContext.Provider>
  );
}
