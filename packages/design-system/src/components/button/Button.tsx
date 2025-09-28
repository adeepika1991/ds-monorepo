// packages/design-system/src/components/Button/Button.tsx
import React from "react";
import { useTheme } from "../../providers";
import { clsx } from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  style,
  ...props
}) => {
  const { tokens } = useTheme();

  const baseStyles: React.CSSProperties = {
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease",
    fontFamily: "inherit",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: tokens.button?.borderRadius || "4px",
  };

  const sizeStyles = {
    sm: {
      padding: tokens.size?.spacing?.sm || "4px",
      fontSize: tokens.size?.font?.sm || "12px",
    },
    md: {
      padding: tokens.size?.spacing?.md || "8px",
      fontSize: tokens.size?.font?.md || "16px",
    },
    lg: {
      padding: tokens.size?.spacing?.lg || "16px",
      fontSize: tokens.size?.font?.lg || "20px",
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor:
        tokens.button?.primary?.background ||
        tokens.color?.primary ||
        "#3366FF",
      color: tokens.button?.primary?.text || tokens.color?.text || "#FFFFFF",
    },
    secondary: {
      backgroundColor: tokens.color?.secondary || "#FFAA00",
      color: tokens.color?.text || "#000000",
    },
    outline: {
      backgroundColor: "transparent",
      color: tokens.color?.primary || "#3366FF",
      border: `2px solid ${tokens.color?.primary || "#3366FF"}`,
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  };

  return (
    <button
      className={clsx(
        "ds-button",
        `ds-button--${variant}`,
        `ds-button--${size}`,
        className
      )}
      style={combinedStyles}
      {...props}
    >
      {children}
    </button>
  );
};
