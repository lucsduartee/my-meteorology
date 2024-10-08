'use client';

import { ReactNode } from "react";
import CityProvider from "./CityProvider";

interface GlobalProviderProps {
  children: ReactNode;
}

export default function GlobalProvider({ children }: GlobalProviderProps) {
  return (
    <CityProvider>
      {children}
    </CityProvider>
  );
}
