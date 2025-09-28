// packages/design-system/src/components/Input/Input.tsx
import React from "react";
import { useTheme } from "../../providers";
import { clsx } from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  className,
  ...props
}) => {
  const { tokens } = useTheme();

  const styles = {
    padding: tokens.size?.spacing?.md,
    fontSize: tokens.size?.font?.md,
    borderRadius: "4px",
    border: `1px solid ${error ? "#ff4444" : "#ccc"}`,
    backgroundColor: tokens.color?.background,
    color: tokens.color?.text,
  };

  return (
    <div className="ds-input-wrapper">
      {label && (
        <label
          className="ds-input-label"
          style={{
            color: tokens.color?.text,
            marginBottom: tokens.size?.spacing?.sm,
          }}
        >
          {label}
        </label>
      )}
      <input
        className={clsx("ds-input", error && "ds-input--error", className)}
        style={styles}
        {...props}
      />
      {error && (
        <span
          className="ds-input-error"
          style={{ color: "#ff4444", fontSize: tokens.size?.font?.sm }}
        >
          {error}
        </span>
      )}
    </div>
  );
};
