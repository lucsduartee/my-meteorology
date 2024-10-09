import {
  useState,
  createContext,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

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

export type ICity = {
  city: {
    name: string;
    lat: number;
    lon: number;
    state: string;
  }
  currentWeather: Weather
  nextWeathers: Array<Weather>
}

interface CityContextType {
  cities: ICity[];
  currentCity: ICity | undefined;
  setCities: Dispatch<(SetStateAction<ICity[]>)>;
  setCurrentCity: Dispatch<SetStateAction<ICity | undefined>>;
}

export interface CityProviderProps {
  children: ReactNode;
}

export const CityContext = createContext<CityContextType | undefined>(undefined);

export default function CityProvider({ children }: CityProviderProps) {
  const [cities, setCities] = useState<ICity[]>([]);
  const [currentCity, setCurrentCity] = useState<ICity | undefined>();

  return (
    <CityContext.Provider value={{
      cities,
      setCities,
      currentCity,
      setCurrentCity
    }}>{children}</CityContext.Provider>
  );
}
