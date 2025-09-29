// packages/design-system/src/components/Card/Card.tsx
"use client";

import React, { useState } from "react";
import { useTheme } from "../../providers";
import { clsx } from "clsx";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  elevation?: "none" | "low" | "medium" | "high";
  interactive?: boolean;
  style?: React.CSSProperties;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  elevation = "medium",
  interactive = false,
  style,
}) => {
  const { tokens } = useTheme();
  const [isHovered, setIsHovered] = useState(false);

  const getElevation = () => {
    switch (elevation) {
      case "none":
        return "none";
      case "low":
        return tokens.shadow?.sm || "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
      case "medium":
        return tokens.card?.shadow || "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
      case "high":
        return tokens.shadow?.lg || "0 10px 15px -3px rgba(0, 0, 0, 0.1)";
      default:
        return tokens.card?.shadow || "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
    }
  };

  const getHoverElevation = () => {
    if (!interactive) return getElevation();
    return (
      tokens.card?.["shadow-hover"] || "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
    );
  };

  const cardStyles: React.CSSProperties = {
    backgroundColor: tokens.card?.background || "#FFFFFF",
    color: tokens.color?.text || "#1E293B",
    padding: tokens.card?.padding || "24px",
    borderRadius: tokens.card?.["border-radius"] || "12px",
    border: tokens.card?.border || "1px solid #E2E8F0",
    boxShadow: isHovered ? getHoverElevation() : getElevation(),
    transition: tokens.card?.transition || "all 300ms ease",
    transform: isHovered && interactive ? "translateY(-2px)" : "translateY(0)",
    ...style,
  };

  return (
    <div
      className={clsx(
        "ds-card",
        `ds-card--${elevation}`,
        interactive && "ds-card--interactive",
        isHovered && "ds-card--hovered",
        className
      )}
      style={cardStyles}
      onMouseEnter={() => interactive && setIsHovered(true)}
      onMouseLeave={() => interactive && setIsHovered(false)}
    >
      {children}
    </div>
  );
};
