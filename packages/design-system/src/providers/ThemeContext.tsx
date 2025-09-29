// packages/design-system/src/providers/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import * as themes from "@repo/tokens";

type Theme = "light" | "dark";
type Brand = "acme" | "globex";

export interface DesignTokens {
  color?: {
    primary?: string;
    "primary-hover"?: string;
    "primary-active"?: string;
    secondary?: string;
    "secondary-hover"?: string;
    "secondary-active"?: string;
    background?: string;
    surface?: string;
    text?: string;
    "text-muted"?: string;
    border?: string;
    "border-hover"?: string;
    error?: string;
    warning?: string;
    success?: string;
  };
  size?: {
    font?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
    };
    spacing?: {
      xs?: string;
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      "2xl"?: string;
    };
    "border-radius"?: {
      sm?: string;
      md?: string;
      lg?: string;
      xl?: string;
      full?: string;
    };
  };
  shadow?: {
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  animation?: {
    duration?: {
      fast?: string;
      normal?: string;
      slow?: string;
    };
    easing?: {
      default?: string;
      bounce?: string;
    };
  };
  opacity?: {
    disabled?: string;
    hover?: string;
  };
  button?: {
    "border-radius"?: string;
    "font-family"?: string;
    "font-weight"?: string;
    primary?: {
      background?: string;
      "background-hover"?: string;
      "background-active"?: string;
      text?: string;
      shadow?: string;
      "shadow-hover"?: string;
    };
    secondary?: {
      background?: string;
      "background-hover"?: string;
      "background-active"?: string;
      text?: string;
      shadow?: string;
      "shadow-hover"?: string;
    };
    outline?: {
      background?: string;
      "background-hover"?: string;
      border?: string;
      text?: string;
    };
    ghost?: {
      background?: string;
      "background-hover"?: string;
      text?: string;
    };
    danger?: {
      background?: string;
      "background-hover"?: string;
      text?: string;
    };
    size?: {
      sm?: {
        padding?: string;
        "font-size"?: string;
        height?: string;
      };
      md?: {
        padding?: string;
        "font-size"?: string;
        height?: string;
      };
      lg?: {
        padding?: string;
        "font-size"?: string;
        height?: string;
      };
    };
  };
  input?: {
    "border-radius"?: string;
    border?: string;
    "border-hover"?: string;
    "border-focus"?: string;
    "border-error"?: string;
    background?: string;
    "background-disabled"?: string;
    text?: string;
    placeholder?: string;
    padding?: string;
    "font-size"?: string;
    transition?: string;
    "shadow-focus"?: string;
  };
  card?: {
    background?: string;
    "border-radius"?: string;
    padding?: string;
    shadow?: string;
    "shadow-hover"?: string;
    border?: string;
    transition?: string;
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
