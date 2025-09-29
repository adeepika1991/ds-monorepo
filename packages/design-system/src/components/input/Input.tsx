// packages/design-system/src/components/Input/Input.tsx
import React, { useState } from "react";
import { useTheme } from "../../providers";
import { clsx } from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  success,
  helperText,
  className,
  onFocus,
  onBlur,
  style,
  ...props
}) => {
  const { tokens } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const getInputStyles = (): React.CSSProperties => {
    let border = tokens.input?.border || "1px solid #E2E8F0";
    let boxShadow = "none";

    if (error) {
      border = tokens.input?.["border-error"] || "2px solid #EF4444";
    } else if (isFocused) {
      border = tokens.input?.["border-focus"] || "2px solid #3B82F6";
      boxShadow = tokens.input?.["shadow-focus"] || "0 0 0 3px #3B82F620";
    } else if (success) {
      border = "2px solid #10B981";
    }

    return {
      width: "100%",
      padding: tokens.input?.padding || "12px 16px",
      fontSize: tokens.input?.["font-size"] || "16px",
      borderRadius: tokens.input?.["border-radius"] || "8px",
      border,
      boxShadow,
      backgroundColor: props.disabled
        ? tokens.input?.["background-disabled"] || "#F8FAFC"
        : tokens.input?.background || "#FFFFFF",
      color: tokens.input?.text || "#1E293B",
      transition: tokens.input?.transition || "all 300ms ease",
      fontFamily: "'Inter', sans-serif",
      ...style,
    };
  };

  const labelStyles: React.CSSProperties = {
    color: tokens.color?.text || "#1E293B",
    marginBottom: tokens.size?.spacing?.sm || "8px",
    display: "block",
    fontSize: tokens.size?.font?.sm || "14px",
    fontWeight: "500",
  };

  const helperTextStyles: React.CSSProperties = {
    color: error
      ? tokens.color?.error || "#EF4444"
      : success
      ? tokens.color?.success || "#10B981"
      : tokens.color?.["text-muted"] || "#64748B",
    fontSize: tokens.size?.font?.sm || "12px",
    marginTop: tokens.size?.spacing?.xs || "4px",
    display: "block",
  };

  return (
    <div
      className="ds-input-wrapper"
      style={{ marginBottom: tokens.size?.spacing?.md || "16px" }}
    >
      {label && (
        <label className="ds-input-label" style={labelStyles}>
          {label}
        </label>
      )}
      <input
        className={clsx(
          "ds-input",
          error && "ds-input--error",
          success && "ds-input--success",
          isFocused && "ds-input--focused",
          className
        )}
        style={getInputStyles()}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      {(error || helperText) && (
        <span className="ds-helper-text" style={helperTextStyles}>
          {error || helperText}
        </span>
      )}
    </div>
  );
};
