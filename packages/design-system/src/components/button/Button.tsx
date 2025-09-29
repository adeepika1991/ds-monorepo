// packages/design-system/src/components/button/Button.tsx
import React from "react";
import { useTheme } from "../../providers";
import { clsx } from "clsx";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "glass";
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
    fontFamily:
      tokens.button?.["font-family"] ||
      tokens.font?.family?.sans ||
      "'Inter', sans-serif",
    fontWeight:
      tokens.button?.["font-weight"] || tokens.font?.weight?.semibold || "600",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: tokens.size?.spacing?.sm || "0.75rem",
    borderRadius:
      tokens.button?.["border-radius"] ||
      tokens.size?.["border-radius"]?.md ||
      "0.5rem",
    lineHeight: tokens.font?.["line-height"]?.normal || "1.5",
    position: "relative",
    overflow: "hidden",
    transform: "translateY(0)",
    opacity: disabled
      ? tokens.button?.state?.disabled?.opacity ||
        tokens.opacity?.disabled ||
        "0.5"
      : "1",
  };

  const sizeStyles = {
    sm: {
      padding:
        tokens.button?.size?.sm?.padding ||
        `${tokens.size?.spacing?.xs} ${tokens.size?.spacing?.md}`,
      fontSize: tokens.button?.size?.sm?.["font-size"] || tokens.font?.size?.sm,
      minHeight: tokens.button?.size?.sm?.height || "2rem",
    },
    md: {
      padding:
        tokens.button?.size?.md?.padding ||
        `${tokens.size?.spacing?.sm} ${tokens.size?.spacing?.lg}`,
      fontSize:
        tokens.button?.size?.md?.["font-size"] || tokens.font?.size?.base,
      minHeight: tokens.button?.size?.md?.height || "2.5rem",
    },
    lg: {
      padding:
        tokens.button?.size?.lg?.padding ||
        `${tokens.size?.spacing?.md} ${tokens.size?.spacing?.xl}`,
      fontSize: tokens.button?.size?.lg?.["font-size"] || tokens.font?.size?.lg,
      minHeight: tokens.button?.size?.lg?.height || "3rem",
    },
  };

  const variantStyles = {
    primary: {
      background:
        tokens.button?.primary?.background ||
        tokens.gradient?.primary ||
        tokens.color?.primary,
      color: tokens.button?.primary?.text || tokens.color?.["text-inverse"],
      boxShadow: tokens.button?.primary?.shadow || tokens.shadow?.sm,
      border: tokens.button?.primary?.border || "none",
    },
    secondary: {
      background:
        tokens.button?.secondary?.background ||
        tokens.gradient?.secondary ||
        tokens.color?.secondary,
      color: tokens.button?.secondary?.text || tokens.color?.["text-inverse"],
      boxShadow: tokens.button?.secondary?.shadow || tokens.shadow?.sm,
      border: tokens.button?.secondary?.border || "none",
    },
    outline: {
      background: tokens.button?.outline?.background || "transparent",
      color: tokens.button?.outline?.text || tokens.color?.primary,
      border:
        tokens.button?.outline?.border || `2px solid ${tokens.color?.primary}`,
    },
    ghost: {
      background: tokens.button?.ghost?.background || "transparent",
      color: tokens.button?.ghost?.text || tokens.color?.primary,
      border: tokens.button?.ghost?.border || "none",
    },
    glass: {
      background: tokens.button?.glass?.background || tokens.gradient?.glass,
      color: tokens.button?.glass?.text || tokens.color?.["text-inverse"],
      border: tokens.button?.glass?.border || "1px solid rgba(255,255,255,0.2)",
      backdropFilter:
        tokens.button?.glass?.["backdrop-filter"] || `blur(${tokens.blur?.md})`,
    },
    danger: {
      background: tokens.button?.danger?.background || tokens.color?.error,
      color: tokens.button?.danger?.text || tokens.color?.["text-inverse"],
      boxShadow:
        tokens.button?.danger?.shadow || `0 0 0 3px ${tokens.color?.error}33`,
      border: "none",
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
      aria-disabled={disabled || loading}
      aria-label={loading ? `${children} - Loading` : undefined}
      aria-live={loading ? "polite" : undefined}
      {...props}
    >
      {icon && iconPosition === "left" && (
        <span aria-hidden="true">{icon}</span>
      )}

      {loading ? (
        <>
          <span className="ds-button__loading-text" aria-live="polite">
            Loading...
          </span>
          <span className="ds-button__spinner" aria-hidden="true">
            {/* Add your loading spinner here */}
          </span>
        </>
      ) : (
        children
      )}

      {icon && iconPosition === "right" && (
        <span aria-hidden="true">{icon}</span>
      )}
    </button>
  );
};
