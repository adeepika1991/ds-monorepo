import React, { createContext, useContext, ReactNode, useMemo } from "react";
import * as tokenExports from "@repo/tokens/acme-light";

// Supported brands and themes
type Brand = "acme" | "globex";
type Theme = "light" | "dark";

interface ThemeContextValue {
  tokens: Record<string, any>; // flattened token object
  brand: Brand;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextValue>({
  tokens: tokenExports, // fallback
  brand: "acme",
  theme: "light",
});

// Props for ThemeProvider
interface ThemeProviderProps {
  brand: Brand;
  theme: Theme;
  children: ReactNode;
}

export const ThemeProvider = ({
  brand,
  theme,
  children,
}: ThemeProviderProps) => {
  // Merge tokens dynamically based on brand + theme
  const mergedTokens = useMemo(() => {
    return {
      ...tokenExports, // base tokens
      ...(tokenExports as any)[`${brand}-${theme}`], // brand-theme specific tokens
    };
  }, [brand, theme]);

  // Optional: inject CSS variables for easy styling
  React.useEffect(() => {
    Object.entries(mergedTokens).forEach(([key, value]) => {
      if (typeof value === "string") {
        document.documentElement.style.setProperty(`--${key}`, value);
      }
    });
  }, [mergedTokens]);

  return (
    <ThemeContext.Provider value={{ tokens: mergedTokens, brand, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to consume theme tokens
export const useTheme = () => useContext(ThemeContext);
