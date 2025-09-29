// packages/design-system/src/providers/ThemeContext.tsx
import React, { createContext, useContext, useState, useEffect } from "react";
import * as themes from "@repo/tokens";

type Theme = "light" | "dark";
type Brand = "acme" | "globex";

// Core token structure that we know will always exist
export interface CoreDesignTokens {
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
    "text-inverse"?: string;
    border?: string;
    "border-hover"?: string;
    error?: string;
    warning?: string;
    success?: string;
  };
  size?: {
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
  // Add other core tokens that are always present
}

// Generic DesignTokens that extends core and allows any additional properties
export type DesignTokens = CoreDesignTokens & {
  [key: string]: any; // This allows any additional token categories
};

// Utility type for deep partial (all properties optional at any level)
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

interface ThemeContextType {
  theme: Theme;
  brand: Brand;
  setTheme: (theme: Theme) => void;
  setBrand: (brand: Brand) => void;
  tokens: DesignTokens;
  overrideTokens: (overrides: DeepPartial<DesignTokens>) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Deep merge utility with proper typing
const deepMerge = <T extends Record<string, any>>(
  target: T,
  source: DeepPartial<T>
): T => {
  const result = { ...target };

  for (const key in source) {
    if (
      source[key] &&
      typeof source[key] === "object" &&
      !Array.isArray(source[key])
    ) {
      result[key] = deepMerge(result[key] || ({} as any), source[key] as any);
    } else {
      result[key] = source[key] as any;
    }
  }

  return result;
};

export const ThemeProvider: React.FC<{
  children: React.ReactNode;
  initialTheme?: Theme;
  initialBrand?: Brand;
  tokenOverrides?: DeepPartial<DesignTokens>;
}> = ({
  children,
  initialTheme = "light",
  initialBrand = "acme",
  tokenOverrides = {},
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);
  const [brand, setBrand] = useState<Brand>(initialBrand);
  const [customOverrides, setCustomOverrides] =
    useState<DeepPartial<DesignTokens>>(tokenOverrides);

  const getBaseTokens = (): DesignTokens => {
    const themeKey = `${brand}${
      theme.charAt(0).toUpperCase() + theme.slice(1)
    }`;
    return (themes as any)[themeKey] || {};
  };

  const tokens = deepMerge(getBaseTokens(), customOverrides);

  const overrideTokens = (overrides: DeepPartial<DesignTokens>) => {
    setCustomOverrides((prev) => deepMerge(prev, overrides));
  };

  const value: ThemeContextType = {
    theme,
    brand,
    setTheme,
    setBrand,
    tokens,
    overrideTokens,
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
