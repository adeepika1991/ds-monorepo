// apps/web/app/login/page.tsx
"use client";

import React, { useState } from "react";
import {
  DesignSystemProvider,
  useTheme,
  Button,
  Input,
  Card,
} from "@repo/design-system";
import "./globals.css";

const ComponentGallery = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { theme, brand, setTheme, setBrand, tokens } = useTheme();

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Form submitted!\nName: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  // Define background styles separately to avoid conflicts
  // const pageBackground =
  //   theme === "dark"
  //     ? {
  //         backgroundColor: "#0f172a",
  //         backgroundImage:
  //           "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
  //       }
  //     : {
  //         backgroundColor: "#667eea",
  //         backgroundImage:
  //           "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
  //       };
  const pageBackground = {
    backgroundColor: tokens?.color?.["primary-active"],
    backgroundImage: tokens?.gradient?.primary,
  };

  const headerGradient =
    theme === "dark"
      ? { backgroundImage: "linear-gradient(135deg, #fff 0%, #94a3b8 100%)" }
      : { backgroundImage: "linear-gradient(135deg, #fff 0%, #e2e8f0 100%)" };

  return (
    <div
      style={{
        minHeight: "100vh",
        ...pageBackground,
        color: theme === "dark" ? "#ffffff" : "#1a202c",
        transition: "all 0.3s ease",
        fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, sans-serif",
        padding: "2rem",
      }}
    >
      {/* Header with Theme Controls */}
      <header
        style={{
          maxWidth: "1400px",
          margin: "0 auto 4rem auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "2rem",
          padding: "2rem",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "24px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              fontSize: "2.5rem",
              fontWeight: "700",
              ...headerGradient,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            🎨 Design System Showcase
          </h1>
          <p
            style={{
              margin: "0.5rem 0 0 0",
              color: theme === "dark" ? "#cbd5e1" : "#f8fafc",
              fontSize: "1.1rem",
              fontWeight: "500",
            }}
          >
            Experience the power of our component library
          </p>
        </div>

        <Card
          style={{
            padding: "1.5rem",
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "1rem" }}>
            <h3
              style={{
                margin: 0,
                fontSize: "1rem",
                color: theme === "dark" ? "#cbd5e1" : "#f8fafc",
                fontWeight: "600",
              }}
            >
              Theme Controls
            </h3>
          </div>
          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button
              size="sm"
              variant={theme === "light" ? "primary" : "glass"}
              onClick={() => setTheme("light")}
              style={{
                backdropFilter: "blur(10px)",
                border:
                  theme === "light"
                    ? "none"
                    : "1px solid rgba(255,255,255,0.3)",
              }}
            >
              🌞 Light
            </Button>
            <Button
              size="sm"
              variant={theme === "dark" ? "primary" : "glass"}
              onClick={() => setTheme("dark")}
              style={{
                backdropFilter: "blur(10px)",
                border:
                  theme === "dark" ? "none" : "1px solid rgba(255,255,255,0.3)",
              }}
            >
              🌙 Dark
            </Button>
            <Button
              size="sm"
              variant={brand === "acme" ? "secondary" : "glass"}
              onClick={() => setBrand("acme")}
              style={{
                backdropFilter: "blur(10px)",
                border:
                  brand === "acme" ? "none" : "1px solid rgba(255,255,255,0.3)",
              }}
            >
              🏢 Acme
            </Button>
            <Button
              size="sm"
              variant={brand === "globex" ? "secondary" : "glass"}
              onClick={() => setBrand("globex")}
              style={{
                backdropFilter: "blur(10px)",
                border:
                  brand === "globex"
                    ? "none"
                    : "1px solid rgba(255,255,255,0.3)",
              }}
            >
              🌐 Globex
            </Button>
          </div>
        </Card>
      </header>

      {/* Horizontal Component Stack */}
      <div
        className="component-scroll-container"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "flex",
          gap: "2rem",
          overflowX: "auto",
          padding: "2rem 1rem",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Buttons Showcase Card */}
        <Card
          style={{
            minWidth: "400px",
            padding: "3rem",
            backgroundColor:
              theme === "dark"
                ? "rgba(30, 41, 59, 0.8)"
                : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            border:
              theme === "dark"
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🎯</div>
            <h2
              style={{
                margin: "0 0 0.5rem 0",
                fontSize: "1.75rem",
                color: theme === "dark" ? "#ffffff" : "#1a202c",
              }}
            >
              Buttons
            </h2>
            <p
              style={{
                margin: 0,
                color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                fontWeight: "500",
              }}
            >
              Interactive elements for user actions
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <div>
              <h4
                style={{
                  margin: "0 0 1rem 0",
                  color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Variants
              </h4>
              <div
                style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="danger">Danger</Button>
                <Button variant="glass">Glass</Button>
              </div>
            </div>

            <div>
              <h4
                style={{
                  margin: "0 0 1rem 0",
                  color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                Sizes
              </h4>
              <div
                style={{
                  display: "flex",
                  gap: "0.75rem",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>

            <div>
              <h4
                style={{
                  margin: "0 0 1rem 0",
                  color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                  fontSize: "1rem",
                  fontWeight: "600",
                }}
              >
                States
              </h4>
              <div
                style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}
              >
                <Button loading>Loading</Button>
                <Button disabled>Disabled</Button>
                <Button icon="⭐">With Icon</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* Inputs Showcase Card */}
        <Card
          style={{
            minWidth: "400px",
            padding: "3rem",
            backgroundColor:
              theme === "dark"
                ? "rgba(30, 41, 59, 0.8)"
                : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            border:
              theme === "dark"
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>📝</div>
            <h2
              style={{
                margin: "0 0 0.5rem 0",
                fontSize: "1.75rem",
                color: theme === "dark" ? "#ffffff" : "#1a202c",
              }}
            >
              Inputs
            </h2>
            <p
              style={{
                margin: 0,
                color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                fontWeight: "500",
              }}
            >
              Form controls for user input
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <Input
              label="Default Input"
              placeholder="Enter your text here..."
              value={formData.name}
              onChange={(e: { target: { value: string } }) =>
                handleInputChange("name", e.target.value)
              }
            />
            <Input
              variant="filled"
              label="Filled Variant"
              placeholder="With filled background"
              value={formData.email}
              onChange={(e: { target: { value: string } }) =>
                handleInputChange("email", e.target.value)
              }
            />
            <Input
              variant="outline"
              label="Outline Variant"
              placeholder="With outline border"
            />
            <Input
              label="Error State"
              placeholder="Something went wrong"
              error="This field is required"
            />
            <Input
              label="Success State"
              placeholder="Everything looks good!"
              success
              helperText="Validation passed"
            />
          </div>
        </Card>

        {/* Cards Showcase Card */}
        <Card
          style={{
            minWidth: "400px",
            padding: "3rem",
            backgroundColor:
              theme === "dark"
                ? "rgba(30, 41, 59, 0.8)"
                : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            border:
              theme === "dark"
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🃏</div>
            <h2
              style={{
                margin: "0 0 0.5rem 0",
                fontSize: "1.75rem",
                color: theme === "dark" ? "#ffffff" : "#1a202c",
              }}
            >
              Cards
            </h2>
            <p
              style={{
                margin: 0,
                color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                fontWeight: "500",
              }}
            >
              Container components for content
            </p>
          </div>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <Card elevation="low" style={{ padding: "1.5rem" }}>
              <h4
                style={{
                  margin: "0 0 0.5rem 0",
                  color: theme === "dark" ? "#ffffff" : "#1a202c",
                }}
              >
                Low Elevation
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                }}
              >
                Subtle shadow for minimal depth
              </p>
            </Card>

            <Card elevation="medium" style={{ padding: "1.5rem" }}>
              <h4
                style={{
                  margin: "0 0 0.5rem 0",
                  color: theme === "dark" ? "#ffffff" : "#1a202c",
                }}
              >
                Medium Elevation
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                }}
              >
                Balanced shadow for regular content
              </p>
            </Card>

            <Card elevation="high" style={{ padding: "1.5rem" }}>
              <h4
                style={{
                  margin: "0 0 0.5rem 0",
                  color: theme === "dark" ? "#ffffff" : "#1a202c",
                }}
              >
                High Elevation
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                }}
              >
                Prominent shadow for emphasis
              </p>
            </Card>

            <Card
              interactive
              elevation="medium"
              style={{ padding: "1.5rem", textAlign: "center" }}
            >
              <h4
                style={{
                  margin: "0 0 0.5rem 0",
                  color: theme === "dark" ? "#ffffff" : "#1a202c",
                }}
              >
                Interactive Card
              </h4>
              <p
                style={{
                  margin: 0,
                  fontSize: "0.875rem",
                  color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                }}
              >
                Hover over me! ✨
              </p>
            </Card>
          </div>
        </Card>

        {/* Interactive Demo Card */}
        <Card
          style={{
            minWidth: "400px",
            padding: "3rem",
            backgroundColor:
              theme === "dark"
                ? "rgba(30, 41, 59, 0.8)"
                : "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(20px)",
            border:
              theme === "dark"
                ? "1px solid rgba(255, 255, 255, 0.1)"
                : "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "24px",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🚀</div>
            <h2
              style={{
                margin: "0 0 0.5rem 0",
                fontSize: "1.75rem",
                color: theme === "dark" ? "#ffffff" : "#1a202c",
              }}
            >
              Live Demo
            </h2>
            <p
              style={{
                margin: 0,
                color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                fontWeight: "500",
              }}
            >
              Try our components in action
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
          >
            <Input
              label="Your Name"
              value={formData.name}
              onChange={(e: { target: { value: string } }) =>
                handleInputChange("name", e.target.value)
              }
              placeholder="Enter your name"
              required
            />
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e: { target: { value: string } }) =>
                handleInputChange("email", e.target.value)
              }
              placeholder="your@email.com"
              required
            />
            <Input
              label="Message"
              value={formData.message}
              onChange={(e: { target: { value: string } }) =>
                handleInputChange("message", e.target.value)
              }
              placeholder="Tell us what you think..."
              required
            />
            <Button
              type="submit"
              variant="primary"
              size="lg"
              style={{ width: "100%" }}
            >
              Submit Demo Form
            </Button>
          </form>

          <div
            style={{
              marginTop: "2rem",
              paddingTop: "2rem",
              borderTop:
                theme === "dark"
                  ? "1px solid rgba(255,255,255,0.1)"
                  : "1px solid rgba(0,0,0,0.1)",
            }}
          >
            <p
              style={{
                margin: "0 0 1rem 0",
                fontSize: "0.875rem",
                color: theme === "dark" ? "#cbd5e1" : "#4a5568",
                fontWeight: "600",
              }}
            >
              Current Settings:
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <span
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: tokens.color?.primary,
                  color: tokens.color?.["text-inverse"],
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
              >
                Theme: {theme}
              </span>
              <span
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: tokens.color?.secondary,
                  color: tokens.color?.["text-inverse"],
                  borderRadius: "8px",
                  fontSize: "0.875rem",
                  fontWeight: "600",
                }}
              >
                Brand: {brand}
              </span>
            </div>
          </div>
        </Card>
      </div>

      {/* Footer */}
      <footer
        style={{
          maxWidth: "1400px",
          margin: "4rem auto 0 auto",
          textAlign: "center",
          padding: "2rem",
          color: theme === "dark" ? "#cbd5e1" : "#f8fafc",
          fontWeight: "500",
        }}
      >
        <p style={{ margin: 0 }}>
          Built with ❤️ using our Design System • {brand.toUpperCase()} •{" "}
          {theme} Theme
        </p>
      </footer>
    </div>
  );
};

export default function ComponentShowcasePage() {
  return (
    <DesignSystemProvider>
      <ComponentGallery />
    </DesignSystemProvider>
  );
}
