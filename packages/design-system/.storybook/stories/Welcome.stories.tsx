// packages/design-system/.storybook/stories/Welcome.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { DesignSystemProvider, Button, Input, Card } from "../../src";

const WelcomePage = () => {
  return (
    <div
      style={{
        maxWidth: "1200px",
        padding: "3rem 2rem",
        margin: "0 auto",
        fontFamily:
          "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      {/* Hero Section */}
      <div
        style={{
          textAlign: "center",
          marginBottom: "4rem",
          padding: "3rem 2rem",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          borderRadius: "24px",
          color: "white",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.1) 0%, transparent 50%)",
          }}
        />

        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: "700",
            margin: "0 0 1rem 0",
            background: "linear-gradient(135deg, #fff 0%, #f0f0f0 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          🎨 Design System
        </h1>

        <p
          style={{
            fontSize: "1.25rem",
            margin: "0 0 2rem 0",
            opacity: 0.9,
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Build consistent, accessible, and beautiful experiences across all
          platforms with our React & React Native design system.
        </p>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="glass"
            size="lg"
            style={{
              backdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            📚 Get Started
          </Button>
          <Button
            variant="outline"
            size="lg"
            style={{
              color: "white",
              borderColor: "rgba(255,255,255,0.3)",
              background: "rgba(255,255,255,0.1)",
            }}
          >
            🎨 View Components
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "600",
            margin: "0 0 3rem 0",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          ✨ Why Choose Our Design System?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {[
            {
              icon: "🎯",
              title: "Multi-Brand Support",
              description:
                "Seamlessly switch between Acme and Globex branding with built-in theming.",
            },
            {
              icon: "🌙",
              title: "Light & Dark Themes",
              description:
                "Full support for light and dark modes with automatic system preference detection.",
            },
            {
              icon: "📱",
              title: "Cross-Platform (Mobile under construction)",
              description:
                "Built for both Web (React) and Mobile (React Native) with shared design tokens.",
            },
            {
              icon: "🔒",
              title: "Accessibility First",
              description:
                "WCAG compliant components with proper ARIA labels and keyboard navigation.",
            },
            {
              icon: "⚡",
              title: "TypeScript Ready",
              description:
                "Fully typed components for better developer experience and fewer runtime errors.",
            },
            {
              icon: "🎨",
              title: "Design Token Driven",
              description:
                "Centralized design tokens for consistent spacing, colors, and typography.",
            },
          ].map((feature, index) => (
            <Card
              key={index}
              elevation="medium"
              interactive
              style={{
                padding: "2rem",
                textAlign: "center",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <div
                style={{
                  fontSize: "3rem",
                  marginBottom: "1rem",
                }}
              >
                {feature.icon}
              </div>
              <h3
                style={{
                  margin: "0 0 1rem 0",
                  fontSize: "1.25rem",
                  fontWeight: "600",
                }}
              >
                {feature.title}
              </h3>
              <p
                style={{
                  margin: 0,
                  color: "#64748B",
                  lineHeight: 1.6,
                }}
              >
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>

      {/* Components Showcase */}
      <div style={{ marginBottom: "4rem" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            fontWeight: "600",
            margin: "0 0 3rem 0",
            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          🧩 Available Components
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
            gap: "2rem",
          }}
        >
          {/* Buttons Showcase */}
          <Card elevation="high" style={{ padding: "2rem" }}>
            <h3 style={{ margin: "0 0 1.5rem 0", fontSize: "1.5rem" }}>
              🎯 Buttons
            </h3>
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

          {/* Inputs Showcase */}
          <Card elevation="high" style={{ padding: "2rem", maxWidth: "400px" }}>
            <h3 style={{ margin: "0 0 1.5rem 0", fontSize: "1.5rem" }}>
              📝 Inputs
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
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
          </Card>

          {/* Cards Showcase */}
          <Card elevation="high" style={{ padding: "2rem" }}>
            <h3 style={{ margin: "0 0 1.5rem 0", fontSize: "1.5rem" }}>
              🃏 Cards
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
            >
              <Card elevation="low" style={{ padding: "1rem" }}>
                <h4 style={{ margin: "0 0 0.5rem 0" }}>Low Elevation</h4>
                <p style={{ margin: 0, fontSize: "0.875rem" }}>
                  Subtle shadow for light depth
                </p>
              </Card>
              <Card elevation="medium" style={{ padding: "1rem" }}>
                <h4 style={{ margin: "0 0 0.5rem 0" }}>Medium Elevation</h4>
                <p style={{ margin: 0, fontSize: "0.875rem" }}>
                  Standard shadow for cards
                </p>
              </Card>
              <Card elevation="high" style={{ padding: "1rem" }}>
                <h4 style={{ margin: "0 0 0.5rem 0" }}>High Elevation</h4>
                <p style={{ margin: 0, fontSize: "0.875rem" }}>
                  Prominent shadow for emphasis
                </p>
              </Card>
            </div>
          </Card>
        </div>
      </div>

      {/* Getting Started */}
      <Card
        style={{
          background: "linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)",
          border: "none",
          padding: "3rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            fontWeight: "600",
            margin: "0 0 1rem 0",
          }}
        >
          🚀 Ready to Get Started?
        </h2>
        <p
          style={{
            fontSize: "1.125rem",
            margin: "0 0 2rem 0",
            color: "#64748B",
            maxWidth: "600px",
            marginLeft: "auto",
            marginRight: "auto",
            lineHeight: 1.6,
          }}
        >
          Explore our components in the sidebar, check out the theming
          capabilities, and start building consistent experiences today.
        </p>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <Button variant="primary" size="lg">
            📖 Design Token Repo
          </Button>
          <Button variant="outline" size="lg">
            <a
              href="/?path=/story/design-tokens-token-display--default"
              target="_blank"
            >
              🎨 Design Tokens in Play
            </a>
          </Button>
          <Button variant="ghost" size="lg">
            <a
              href="https://github.com/adeepika1991/ds-monorepo"
              target="_blank"
            >
              ⚡ GitHub
            </a>
          </Button>
        </div>
      </Card>

      {/* Footer */}
      <div
        style={{
          textAlign: "center",
          marginTop: "4rem",
          paddingTop: "2rem",
          borderTop: "1px solid #E2E8F0",
          color: "#64748B",
        }}
      >
        <p style={{ margin: 0 }}>
          Built with ❤️ using React, TypeScript, and Storybook
        </p>
      </div>
    </div>
  );
};

const meta: Meta = {
  title: "Welcome/Getting Started",
  parameters: {
    layout: "fullscreen",
  },
};

export default meta;

export const Welcome: StoryObj = {
  render: () => (
    <DesignSystemProvider>
      <WelcomePage />
    </DesignSystemProvider>
  ),
};
