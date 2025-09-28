// packages/design-system/src/providers/BrandContext.tsx
import React, { createContext, useContext } from "react";
import { useTheme } from "./ThemeContext";

interface BrandContextType {
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;
}

const BrandContext = createContext<BrandContextType | undefined>(undefined);

export const BrandProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { tokens } = useTheme();

  const value: BrandContextType = {
    primaryColor: tokens.color?.primary || "#3366FF",
    secondaryColor: tokens.color?.secondary || "#FFAA00",
    backgroundColor: tokens.color?.background || "#FFFFFF",
    textColor: tokens.color?.text || "#000000",
  };

  return (
    <BrandContext.Provider value={value}>{children}</BrandContext.Provider>
  );
};

export const useBrand = () => {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error("useBrand must be used within a BrandProvider");
  }
  return context;
};
