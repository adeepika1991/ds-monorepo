// packages/design-system/src/components/Card/Card.tsx
import React from "react";
import { useTheme } from "../../providers";
import { clsx } from "clsx";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  const { tokens } = useTheme();

  const styles = {
    backgroundColor: tokens.color?.background,
    color: tokens.color?.text,
    padding: tokens.size?.spacing?.lg,
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  };

  return (
    <div className={clsx("ds-card", className)} style={styles}>
      {children}
    </div>
  );
};
