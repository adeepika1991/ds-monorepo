// packages/design-system/src/providers/index.tsx
import React from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { BrandProvider, useBrand } from "./BrandContext";

export const DesignSystemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
        `}
      </style>
      <ThemeProvider>
        <BrandProvider>{children}</BrandProvider>
      </ThemeProvider>
    </>
  );
};

export { useTheme, useBrand };
export * from "./ThemeContext";
export * from "./BrandContext";
