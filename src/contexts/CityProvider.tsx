import { useState, createContext, ReactNode } from "react";

type Temperature = {
  current?: number;
  min: number,
  max: number,
}

type Weather = {
  city?: string;
  date: string;
  weather: string;
  temperature: Temperature;
  moonPhase?: string; 
  rainProbability?: number; 
}

interface CityContext {
  city: {
    name: string;
    lat: number;
    lon: number;
    state: string;
  }
  currentWeather: Weather
  nextWeathers: Array<Weather>
}

interface CityProviderProps {
  children: ReactNode;
}

const CityContext = createContext<CityContext | {}>({});

export default function CityProvider({ children }: CityProviderProps) {
  const [cityInformation, setCityInformation] = useState<CityContext>();

  return (
    <CityContext.Provider value={{ cityInformation, setCityInformation }}>
      {children}
    </CityContext.Provider>
  );
}
