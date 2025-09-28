// packages/design-system/src/components/button/Button.native.tsx
import React from "react";
import { Pressable, Text, StyleSheet } from "react-native";
import { useTheme } from "../../providers";

export interface ButtonNativeProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: string;
  onPress?: () => void;
  disabled?: boolean;
}

export const ButtonNative: React.FC<ButtonNativeProps> = ({
  variant = "primary",
  size = "md",
  children,
  onPress,
  disabled = false,
}) => {
  const { tokens } = useTheme();

  const getStyles = () => {
    const baseStyles = {
      borderRadius: 4,
      alignItems: "center" as const,
      justifyContent: "center" as const,
    };

    const sizeStyles = {
      sm: { padding: 4, paddingHorizontal: 8 },
      md: { padding: 8, paddingHorizontal: 16 },
      lg: { padding: 16, paddingHorizontal: 24 },
    };

    const variantStyles = {
      primary: {
        backgroundColor: tokens.color?.primary || "#3366FF",
      },
      secondary: {
        backgroundColor: tokens.color?.secondary || "#FFAA00",
      },
      outline: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: tokens.color?.primary || "#3366FF",
      },
    };

    return {
      button: [baseStyles, sizeStyles[size], variantStyles[variant]],
      text: {
        color:
          variant === "outline"
            ? tokens.color?.primary || "#3366FF"
            : tokens.color?.text || "#FFFFFF",
        fontSize: size === "sm" ? 12 : size === "md" ? 16 : 20,
      },
    };
  };

  const styles = getStyles();

  return (
    <Pressable style={styles.button} onPress={onPress} disabled={disabled}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};
