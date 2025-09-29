// packages/design-system/src/components/Input/Input.tsx
import React, { useState, useId } from "react";
import { useTheme } from "../../providers";
import { clsx } from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: boolean;
  helperText?: string;
  variant?: "default" | "filled" | "outline" | "glass";
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  success,
  helperText,
  variant = "default",
  className,
  onFocus,
  onBlur,
  style,
  id, // Destructure id from props
  ...props
}) => {
  const { tokens } = useTheme();
  const [isFocused, setIsFocused] = useState(false);

  // Generate a unique ID if none is provided
  const generatedId = useId();
  const inputId = id || generatedId;

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  };

  // Helper function to get token value with fallback
  const getToken = (path: string, fallback: string = "") => {
    const parts = path.split(".");
    let current: any = tokens;

    for (const part of parts) {
      if (current && typeof current === "object" && part in current) {
        current = current[part];
      } else {
        return fallback;
      }
    }

    if (current && typeof current === "object" && "value" in current) {
      return current.value;
    }

    return current || fallback;
  };

  const getInputStyles = (): React.CSSProperties => {
    // Get base styles
    let border = getToken(
      "input.border",
      `${getToken("size.border-width.thin", "1px")} solid ${getToken(
        "color.border",
        "#E5E7EB"
      )}`
    );
    let boxShadow = getToken(
      "input.shadow",
      getToken("shadow.inner", "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)")
    );
    let background = getToken(
      "input.background",
      getToken("color.background", "#FFFFFF")
    );
    let color = getToken("input.text", getToken("color.text", "#1A1F36"));

    // Handle variants
    if (variant === "filled") {
      background = getToken(
        "input.variant.filled.background",
        getToken("color.surface", "#F8FAFC")
      );
      border = getToken(
        "input.variant.filled.border",
        `${getToken("size.border-width.thin", "1px")} solid transparent`
      );
    } else if (variant === "outline") {
      background = getToken("input.variant.outline.background", "transparent");
      border = getToken(
        "input.variant.outline.border",
        `${getToken("size.border-width.thin", "1px")} solid ${getToken(
          "color.border",
          "#E5E7EB"
        )}`
      );
    } else if (variant === "glass") {
      background = getToken(
        "input.variant.glass.background",
        getToken(
          "gradient.glass",
          "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)"
        )
      );
      border = getToken(
        "input.variant.glass.border",
        "1px solid rgba(255,255,255,0.2)"
      );
      color = getToken(
        "input.variant.glass.text",
        getToken("color.text-inverse", "#FFFFFF")
      );
    }

    // Handle states
    if (error) {
      border = getToken(
        "input.border-error",
        `${getToken("size.border-width.medium", "2px")} solid ${getToken(
          "color.error",
          "#EF4444"
        )}`
      );
      boxShadow = getToken(
        "input.state.error.shadow",
        `0 0 0 3px ${getToken("color.error", "#EF4444")}20`
      );
    } else if (isFocused) {
      border = getToken(
        "input.border-focus",
        `${getToken("size.border-width.medium", "2px")} solid ${getToken(
          "color.border-focused",
          "#0066FF"
        )}`
      );
      boxShadow = getToken(
        "input.shadow-focus",
        getToken("shadow.glow-primary", "0 0 20px rgba(0, 102, 255, 0.3)")
      );
    } else if (success) {
      border = getToken(
        "input.state.success.border",
        `${getToken("size.border-width.medium", "2px")} solid ${getToken(
          "color.success",
          "#10B981"
        )}`
      );
      boxShadow = getToken(
        "input.state.success.shadow",
        `0 0 0 3px ${getToken("color.success", "#10B981")}20`
      );
    }

    // Handle disabled state
    if (props.disabled) {
      background = getToken(
        "input.background-disabled",
        getToken("color.surface", "#F8FAFC")
      );
    }

    return {
      width: "100%",
      padding: getToken(
        "input.padding",
        `${getToken("size.spacing.md", "1rem")} ${getToken(
          "size.spacing.lg",
          "1.5rem"
        )}`
      ),
      fontSize: getToken("input.font-size", getToken("font.size.base", "1rem")),
      borderRadius: getToken(
        "input.border-radius",
        getToken("size.border-radius.md", "0.5rem")
      ),
      border,
      boxSizing: "border-box",
      boxShadow,
      backgroundColor: background,
      color,
      transition: getToken(
        "input.transition",
        `all ${getToken("animation.duration.normal", "300ms")} ${getToken(
          "animation.easing.default",
          "cubic-bezier(0.4, 0, 0.2, 1)"
        )}`
      ),
      fontFamily: getToken(
        "input.font-family",
        getToken("font.family.sans", "'Inter', sans-serif")
      ),
      fontWeight: getToken(
        "input.font-weight",
        getToken("font.weight.normal", "400")
      ),
      lineHeight: getToken(
        "input.line-height",
        getToken("font.line-height.normal", "1.5")
      ),
      backdropFilter:
        variant === "glass"
          ? getToken(
              "input.variant.glass.backdrop-filter",
              `blur(${getToken("blur.md", "8px")})`
            )
          : undefined,
      opacity: props.disabled
        ? getToken(
            "input.state.disabled.opacity",
            getToken("opacity.disabled", "0.5")
          )
        : "1",
      cursor: props.disabled
        ? getToken("input.state.disabled.cursor", "not-allowed")
        : "text",
      ...style,
    };
  };

  const labelStyles: React.CSSProperties = {
    color: getToken("color.text", "#1A1F36"),
    marginBottom: getToken("size.spacing.sm", "0.75rem"),
    display: "block",
    fontSize: getToken("font.size.sm", "0.875rem"),
    fontWeight: getToken("font.weight.medium", "500"),
    fontFamily: getToken("font.family.sans", "'Inter', sans-serif"),
  };

  const helperTextStyles: React.CSSProperties = {
    color: error
      ? getToken("color.error", "#EF4444")
      : success
      ? getToken("color.success", "#10B981")
      : getToken("color.text-muted", "#6B7280"),
    fontSize: getToken("font.size.sm", "0.875rem"),
    marginTop: getToken("size.spacing.xs", "0.5rem"),
    display: "block",
    fontFamily: getToken("font.family.sans", "'Inter', sans-serif"),
  };

  // Generate proper aria-describedby value
  const getAriaDescribedBy = () => {
    const descriptors = [];
    if (error) descriptors.push(`${inputId}-error`);
    if (helperText) descriptors.push(`${inputId}-helper`);
    return descriptors.length > 0 ? descriptors.join(" ") : undefined;
  };

  return (
    <div
      className="ds-input-wrapper"
      style={{ marginBottom: getToken("size.spacing.md", "1rem") }}
    >
      {label && (
        <label
          htmlFor={inputId} // Use the consistent inputId
          className="ds-input-label"
          style={labelStyles}
        >
          {label}
          {props.required && (
            <span aria-hidden="true" className="ds-input-required">
              {" "}
              *
            </span>
          )}
        </label>
      )}

      <input
        id={inputId} // Use the consistent inputId
        className={clsx(
          "ds-input",
          `ds-input--${variant}`,
          error && "ds-input--error",
          success && "ds-input--success",
          isFocused && "ds-input--focused",
          props.disabled && "ds-input--disabled",
          className
        )}
        style={getInputStyles()}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={getAriaDescribedBy()}
        aria-required={props.required}
        disabled={props.disabled}
        {...props}
      />

      {(error || helperText) && (
        <span
          id={error ? `${inputId}-error` : `${inputId}-helper`} // Use consistent inputId
          className={clsx(
            "ds-helper-text",
            error && "ds-helper-text--error",
            success && "ds-helper-text--success"
          )}
          style={helperTextStyles}
          role={error ? "alert" : "status"}
          aria-live={error ? "assertive" : "polite"}
        >
          {error || helperText}
        </span>
      )}
    </div>
  );
};
