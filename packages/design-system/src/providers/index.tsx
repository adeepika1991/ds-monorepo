// packages/design-system/src/providers/index.tsx
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { BrandProvider, useBrand } from "./BrandContext";

export const DesignSystemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <BrandProvider>{children}</BrandProvider>
    </ThemeProvider>
  );
};

export { useTheme, useBrand };
export * from "./ThemeContext";
export * from "./BrandContext";
