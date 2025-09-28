// packages/design-system/src/providers/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import * as themes from "@repo/tokens";

type Theme = "light" | "dark";
type Brand = "acme" | "globex";

export interface DesignTokens {
  color?: {
    primary?: string;
    secondary?: string;
    background?: string;
    text?: string;
  };
  size?: {
    font?: {
      sm?: string;
      md?: string;
      lg?: string;
    };
    spacing?: {
      sm?: string;
      md?: string;
      lg?: string;
    };
  };
  button?: {
    padding?: string;
    fontSize?: string;
    borderRadius?: string;
    primary?: {
      background?: string;
      text?: string;
    };
  };
  [key: string]: any;
}

interface ThemeContextType {
  theme: Theme;
  brand: Brand;
  setTheme: (theme: Theme) => void;
  setBrand: (brand: Brand) => void;
  tokens: DesignTokens;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Simple token getter
const getTokens = (brand: Brand, theme: Theme): DesignTokens => {
  const themeKey = `${brand}${theme.charAt(0).toUpperCase() + theme.slice(1)}`;
  return (themes as any)[themeKey] || {};
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [brand, setBrand] = useState<Brand>("acme");
  const [tokens, setTokens] = useState<DesignTokens>(getTokens(brand, theme));

  useEffect(() => {
    setTokens(getTokens(brand, theme));
  }, [theme, brand]);

  const value: ThemeContextType = {
    theme,
    brand,
    setTheme,
    setBrand,
    tokens,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
