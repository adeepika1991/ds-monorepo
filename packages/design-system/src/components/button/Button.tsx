// packages/design-system/src/components/button/Button.tsx
import React from "react";
import { useTheme } from "../../providers";
import { clsx } from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  loading = false,
  disabled = false,
  icon,
  iconPosition = "left",
  className,
  style,
  ...props
}) => {
  const { tokens } = useTheme();

  const baseStyles: React.CSSProperties = {
    border: "none",
    cursor: disabled ? "not-allowed" : "pointer",
    transition: `all ${tokens.animation?.duration?.normal || "300ms"} ${
      tokens.animation?.easing?.default || "ease"
    }`,
    fontFamily: tokens.button?.["font-family"] || "'Inter', sans-serif",
    fontWeight: tokens.button?.["font-weight"] || "600",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.size?.spacing?.sm || "8px",
    borderRadius: tokens.button?.["border-radius"] || "8px",
    lineHeight: 1,
    position: "relative",
    overflow: "hidden",
    transform: "translateY(0)",
    opacity: disabled ? tokens.opacity?.disabled || 0.5 : 1,
  };

  const sizeStyles = {
    sm: {
      padding: tokens.button?.size?.sm?.padding || "8px 12px",
      fontSize: tokens.button?.size?.sm?.["font-size"] || "14px",
      minHeight: tokens.button?.size?.sm?.height || "32px",
    },
    md: {
      padding: tokens.button?.size?.md?.padding || "12px 16px",
      fontSize: tokens.button?.size?.md?.["font-size"] || "16px",
      minHeight: tokens.button?.size?.md?.height || "40px",
    },
    lg: {
      padding: tokens.button?.size?.lg?.padding || "16px 24px",
      fontSize: tokens.button?.size?.lg?.["font-size"] || "18px",
      minHeight: tokens.button?.size?.lg?.height || "48px",
    },
  };

  const variantStyles = {
    primary: {
      backgroundColor: tokens.button?.primary?.background || "#3B82F6",
      color: tokens.button?.primary?.text || "#FFFFFF",
      boxShadow: tokens.button?.primary?.shadow || "none",
      "&:hover:not(:disabled)": {
        backgroundColor:
          tokens.button?.primary?.["background-hover"] || "#2563EB",
        boxShadow: tokens.button?.primary?.["shadow-hover"] || "none",
        transform: "translateY(-1px)",
      },
      "&:active:not(:disabled)": {
        backgroundColor:
          tokens.button?.primary?.["background-active"] || "#1D4ED8",
        transform: "translateY(0)",
      },
    },
    secondary: {
      backgroundColor: tokens.button?.secondary?.background || "#F59E0B",
      color: tokens.button?.secondary?.text || "#FFFFFF",
      boxShadow: tokens.button?.secondary?.shadow || "none",
      "&:hover:not(:disabled)": {
        backgroundColor:
          tokens.button?.secondary?.["background-hover"] || "#D97706",
        boxShadow: tokens.button?.secondary?.["shadow-hover"] || "none",
        transform: "translateY(-1px)",
      },
      "&:active:not(:disabled)": {
        backgroundColor:
          tokens.button?.secondary?.["background-active"] || "#B45309",
        transform: "translateY(0)",
      },
    },
    outline: {
      backgroundColor: tokens.button?.outline?.background || "transparent",
      color: tokens.button?.outline?.text || "#3B82F6",
      border: `2px solid ${tokens.button?.outline?.border || "#3B82F6"}`,
      "&:hover:not(:disabled)": {
        backgroundColor:
          tokens.button?.outline?.["background-hover"] || "#3B82F610",
        transform: "translateY(-1px)",
      },
    },
    ghost: {
      backgroundColor: tokens.button?.ghost?.background || "transparent",
      color: tokens.button?.ghost?.text || "#3B82F6",
      "&:hover:not(:disabled)": {
        backgroundColor:
          tokens.button?.ghost?.["background-hover"] || "#3B82F610",
      },
    },
    danger: {
      backgroundColor: tokens.button?.danger?.background || "#EF4444",
      color: tokens.button?.danger?.text || "#FFFFFF",
      "&:hover:not(:disabled)": {
        backgroundColor:
          tokens.button?.danger?.["background-hover"] || "#DC2626",
      },
    },
  };

  const combinedStyles = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
    ...style,
  } as React.CSSProperties;

  return (
    <button
      className={clsx(
        "ds-button",
        `ds-button--${variant}`,
        `ds-button--${size}`,
        loading && "ds-button--loading",
        disabled && "ds-button--disabled",
        className
      )}
      style={combinedStyles}
      disabled={disabled || loading}
      {...props}
    >
      {icon && iconPosition === "left" && icon}
      {loading ? "Loading..." : children}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};
