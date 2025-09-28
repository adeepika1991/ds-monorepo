// packages/design-system/.storybook/stories/ThemeSwitcher.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { DesignSystemProvider, useTheme, Button, Card } from "../../src";

const ThemeDemo = () => {
  const { theme, brand, setTheme, setBrand, tokens } = useTheme();

  return (
    <Card>
      <div style={{ marginBottom: "1rem" }}>
        <h3>
          Current Theme: {theme} | Brand: {brand}
        </h3>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          <Button size="sm" onClick={() => setTheme("light")}>
            Light
          </Button>
          <Button size="sm" onClick={() => setTheme("dark")}>
            Dark
          </Button>
        </div>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
          <Button size="sm" onClick={() => setBrand("acme")}>
            Acme
          </Button>
          <Button size="sm" onClick={() => setBrand("globex")}>
            Globex
          </Button>
        </div>
      </div>

      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: tokens.color?.background,
          color: tokens.color?.text,
        }}
      >
        <h4>Current Tokens Preview</h4>
        <pre style={{ fontSize: "12px" }}>
          {JSON.stringify(tokens, null, 2)}
        </pre>
      </div>
    </Card>
  );
};

const meta: Meta = {
  title: "🎨 Theming/Theme Switcher",
  component: ThemeDemo,
};

export default meta;

export const Interactive: StoryObj = {
  render: () => (
    <DesignSystemProvider>
      <ThemeDemo />
    </DesignSystemProvider>
  ),
};
