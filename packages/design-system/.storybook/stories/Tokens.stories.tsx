// packages/design-system/.storybook/stories/Tokens.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { DesignSystemProvider, useTheme } from "../../src";

const TokensDisplay = () => {
  const { tokens } = useTheme();

  return (
    <div style={{ padding: "2rem" }}>
      <h2>Design Tokens</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Colors */}
        <div>
          <h3>Colors</h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            {tokens.color &&
              Object.entries(tokens.color).map(([key, value]) => (
                <div
                  key={key}
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width: "50px",
                      height: "50px",
                      backgroundColor:
                        typeof value === "string"
                          ? value
                          : (value as any).value,
                      border: "1px solid #ccc",
                      borderRadius: "4px",
                    }}
                  />
                  <div>
                    <strong>{key}</strong>
                    <div>
                      {typeof value === "string" ? value : (value as any).value}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Spacing */}
        <div>
          <h3>Spacing</h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {tokens.size?.spacing &&
              Object.entries(tokens.size.spacing).map(([key, value]) => (
                <div
                  key={key}
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <div
                    style={{
                      width:
                        typeof value === "string"
                          ? value
                          : (value as any).value,
                      height: "20px",
                      backgroundColor: "#3366FF",
                      borderRadius: "2px",
                    }}
                  />
                  <div>
                    <strong>{key}</strong>
                    <div>
                      {typeof value === "string" ? value : (value as any).value}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Raw JSON */}
      <details style={{ marginTop: "2rem" }}>
        <summary>Raw Token Data</summary>
        <pre
          style={{
            background: "#f5f5f5",
            padding: "1rem",
            borderRadius: "4px",
            overflow: "auto",
          }}
        >
          {JSON.stringify(tokens, null, 2)}
        </pre>
      </details>
    </div>
  );
};

const meta: Meta = {
  title: "Design Tokens/Token Display",
  component: TokensDisplay,
};

export default meta;

export const Default: StoryObj = {
  render: () => (
    <DesignSystemProvider>
      <TokensDisplay />
    </DesignSystemProvider>
  ),
};
