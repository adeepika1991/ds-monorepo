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

// Simple token getter - no transformation needed!
// In your ThemeContext, add this debug:
const getTokens = (brand: Brand, theme: Theme): DesignTokens => {
  const themeKey = `${brand}${theme.charAt(0).toUpperCase() + theme.slice(1)}`;

  console.log("=== TOKEN DEBUG ===");
  console.log("Theme key:", themeKey);
  console.log("Available themes:", Object.keys(themes));
  console.log("Themes object:", themes);

  const themeTokens = (themes as any)[themeKey] || {};

  console.log("Found tokens:", themeTokens);
  console.log("Token keys:", Object.keys(themeTokens));
  console.log("=== END DEBUG ===");

  return themeTokens;
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [brand, setBrand] = useState<Brand>("acme");
  const [tokens, setTokens] = useState<DesignTokens>(getTokens(brand, theme));

  useEffect(() => {
    console.log(`🔄 Theme/Brand changed to: ${brand}-${theme}`);
    const newTokens = getTokens(brand, theme);
    setTokens(newTokens);
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
