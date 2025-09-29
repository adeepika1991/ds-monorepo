// packages/design-system/.storybook/stories/ThemeSwitcher.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { DesignSystemProvider, useTheme, Button, Card, Input } from "../../src";

const ThemeDemo = () => {
  const { theme, brand, setTheme, setBrand, tokens } = useTheme();

  return (
    <Card elevation="medium" style={{ maxWidth: "800px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={{ margin: "0 0 0.5rem 0", color: tokens.color?.text }}>
          Theme Playground
        </h2>
        <p
          style={{
            margin: 0,
            color: tokens.color?.["text-muted"],
            fontSize: "1rem",
          }}
        >
          Current Theme: <strong>{theme}</strong> | Brand:{" "}
          <strong>{brand}</strong>
        </p>
      </div>

      {/* Theme Controls */}
      <div style={{ marginBottom: "2rem" }}>
        {/* FIXED: Changed h4 to h3 */}
        <h3 style={{ margin: "0 0 1rem 0", color: tokens.color?.text }}>
          Theme Controls
        </h3>
        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant={theme === "light" ? "primary" : "outline"}
            size="sm"
            onClick={() => setTheme("light")}
          >
            🌞 Light Theme
          </Button>
          <Button
            variant={theme === "dark" ? "primary" : "outline"}
            size="sm"
            onClick={() => setTheme("dark")}
          >
            🌙 Dark Theme
          </Button>
        </div>

        <div
          style={{
            display: "flex",
            gap: "0.75rem",
            marginBottom: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant={brand === "acme" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setBrand("acme")}
          >
            🏢 Acme Brand
          </Button>
          <Button
            variant={brand === "globex" ? "secondary" : "outline"}
            size="sm"
            onClick={() => setBrand("globex")}
          >
            🌐 Globex Brand
          </Button>
        </div>
      </div>

      {/* Component Showcase */}
      <div style={{ marginBottom: "2rem" }}>
        {/* FIXED: Changed h4 to h3 */}
        <h3 style={{ margin: "0 0 1rem 0", color: tokens.color?.text }}>
          Component Showcase
        </h3>

        {/* Buttons Showcase */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h4
            style={{
              margin: "0 0 0.75rem 0",
              color: tokens.color?.["text-muted"],
            }}
          >
            Buttons
          </h4>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="glass">Glass</Button>
          </div>
        </div>

        {/* Button Sizes */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h4
            style={{
              margin: "0 0 0.75rem 0",
              color: tokens.color?.["text-muted"],
            }}
          >
            Button Sizes
          </h4>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </div>
        </div>

        {/* Inputs Showcase */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h4
            style={{
              margin: "0 0 0.75rem 0",
              color: tokens.color?.["text-muted"],
            }}
          >
            Inputs
          </h4>
          <div
            style={{
              display: "grid",
              gap: "1rem",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            }}
          >
            <Input label="Default Input" placeholder="Type something..." />
            <Input
              variant="filled"
              label="Filled Input"
              placeholder="Filled variant"
            />
            <Input
              variant="outline"
              label="Outline Input"
              placeholder="Outline variant"
            />
            <Input
              label="With Error"
              placeholder="Invalid input"
              error="This field is required"
            />
          </div>
        </div>
      </div>

      {/* Token Preview */}
      <div
        style={{
          marginTop: "2rem",
          padding: "1.5rem",
          backgroundColor: tokens.color?.surface,
          color: tokens.color?.text,
          borderRadius: "8px",
          border: `1px solid ${tokens.color?.border}`,
        }}
      >
        {/* FIXED: Changed h4 to h3 */}
        <h3 style={{ margin: "0 0 1rem 0" }}>Current Tokens Preview</h3>
        <div
          style={{
            maxHeight: "300px",
            overflow: "auto",
            backgroundColor: tokens.color?.background,
            padding: "1rem",
            borderRadius: "4px",
            fontSize: "12px",
            fontFamily: "monospace",
          }}
        >
          {JSON.stringify(
            {
              theme,
              brand,
              colors: {
                primary: tokens.color?.primary,
                secondary: tokens.color?.secondary,
                background: tokens.color?.background,
                text: tokens.color?.text,
              },
            },
            null,
            2
          )}
        </div>
      </div>
    </Card>
  );
};

const ThemeShowcaseGrid = () => {
  const { theme, brand, setTheme, setBrand, tokens } = useTheme();

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: "3rem" }}>
        <h1 style={{ margin: "0 0 1rem 0", color: tokens.color?.text }}>
          Design System Theme Showcase
        </h1>
        <p
          style={{
            margin: 0,
            color: tokens.color?.["text-muted"],
            fontSize: "1.1rem",
          }}
        >
          Explore different theme and brand combinations
        </p>
      </div>

      {/* Theme Controls */}
      <Card elevation="medium" style={{ marginBottom: "2rem" }}>
        <div style={{ textAlign: "center", padding: "1.5rem" }}>
          <h2 style={{ margin: "0 0 1.5rem 0", color: tokens.color?.text }}>
            Theme Controls
          </h2>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div>
              {/* FIXED: Changed h4 to h3 */}
              <h3
                style={{
                  margin: "0 0 0.75rem 0",
                  color: tokens.color?.["text-muted"],
                }}
              >
                Theme
              </h3>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Button
                  variant={theme === "light" ? "primary" : "outline"}
                  onClick={() => setTheme("light")}
                >
                  Light
                </Button>
                <Button
                  variant={theme === "dark" ? "primary" : "outline"}
                  onClick={() => setTheme("dark")}
                >
                  Dark
                </Button>
              </div>
            </div>

            <div>
              {/* FIXED: Changed h4 to h3 */}
              <h3
                style={{
                  margin: "0 0 0.75rem 0",
                  color: tokens.color?.["text-muted"],
                }}
              >
                Brand
              </h3>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <Button
                  variant={brand === "acme" ? "secondary" : "outline"}
                  onClick={() => setBrand("acme")}
                >
                  Acme
                </Button>
                <Button
                  variant={brand === "globex" ? "secondary" : "outline"}
                  onClick={() => setBrand("globex")}
                >
                  Globex
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Components Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
          gap: "2rem",
        }}
      >
        {/* Buttons Card */}
        <Card elevation="medium">
          <h2 style={{ margin: "0 0 1rem 0", color: tokens.color?.text }}>
            Buttons
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="glass">Glass</Button>
            </div>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>
        </Card>

        {/* Inputs Card */}
        <Card elevation="medium">
          <h2 style={{ margin: "0 0 1rem 0", color: tokens.color?.text }}>
            Inputs
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Input label="Default Input" placeholder="Enter text..." />
            <Input
              variant="filled"
              label="Filled Input"
              placeholder="Filled style"
            />
            <Input
              variant="outline"
              label="Outline Input"
              placeholder="Outline style"
            />
            <Input label="With Error" error="This field has an error" />
          </div>
        </Card>

        {/* Cards Card */}
        <Card elevation="medium">
          <h2 style={{ margin: "0 0 1rem 0", color: tokens.color?.text }}>
            Cards
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Card elevation="low">
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: "0 0 0.5rem 0" }}>Low Elevation</h3>
                <p style={{ margin: 0, fontSize: "0.875rem" }}>
                  Subtle shadow for light depth
                </p>
              </div>
            </Card>
            <Card elevation="medium">
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: "0 0 0.5rem 0" }}>Medium Elevation</h3>
                <p style={{ margin: 0, fontSize: "0.875rem" }}>
                  Standard shadow for cards
                </p>
              </div>
            </Card>
            <Card elevation="high">
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: "0 0 0.5rem 0" }}>High Elevation</h3>
                <p style={{ margin: 0, fontSize: "0.875rem" }}>
                  Prominent shadow for emphasis
                </p>
              </div>
            </Card>
          </div>
        </Card>
      </div>
    </div>
  );
};

// ... rest of your code remains the same

// Helper component to set initial state programmatically
const ThemeDemoWithInitialState = ({
  initialTheme = "light",
  initialBrand = "acme",
}: {
  initialTheme?: "light" | "dark";
  initialBrand?: "acme" | "globex";
}) => {
  const { theme, brand, setTheme, setBrand, tokens } = useTheme();

  // Set initial state on mount
  React.useEffect(() => {
    setTheme(initialTheme);
    setBrand(initialBrand);
  }, [initialTheme, initialBrand, setTheme, setBrand]);

  return <ThemeDemo />;
};

const meta: Meta = {
  title: "Theming/Theme Switcher",
  component: ThemeDemo,
  decorators: [
    (Story) => (
      <DesignSystemProvider>
        <div
          style={{
            padding: "2rem",
            minHeight: "100vh",
            backgroundColor: "var(--color-background, #ffffff)",
          }}
        >
          <Story />
        </div>
      </DesignSystemProvider>
    ),
  ],
};

export default meta;

export const Interactive: StoryObj = {
  render: () => <ThemeDemo />,
};

export const ShowcaseGrid: StoryObj = {
  render: () => <ThemeShowcaseGrid />,
};

export const LightTheme: StoryObj = {
  render: () => <ThemeDemoWithInitialState initialTheme="light" />,
};

export const DarkTheme: StoryObj = {
  render: () => <ThemeDemoWithInitialState initialTheme="dark" />,
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const AcmeBrand: StoryObj = {
  render: () => <ThemeDemoWithInitialState initialBrand="acme" />,
};

export const GlobexBrand: StoryObj = {
  render: () => <ThemeDemoWithInitialState initialBrand="globex" />,
};

// Combined examples
export const DarkThemeGlobex: StoryObj = {
  render: () => (
    <ThemeDemoWithInitialState initialTheme="dark" initialBrand="globex" />
  ),
  parameters: {
    backgrounds: { default: "dark" },
  },
};

export const LightThemeAcme: StoryObj = {
  render: () => (
    <ThemeDemoWithInitialState initialTheme="light" initialBrand="acme" />
  ),
};
