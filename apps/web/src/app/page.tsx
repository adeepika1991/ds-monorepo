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

const LoginDemo = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { theme, brand, setTheme, setBrand, tokens } = useTheme();
  console.log(tokens);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(
      `Login attempt for ${brand} - ${theme}\nEmail: ${email}\nPassword: ${password}`
    );
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        backgroundColor: tokens.color?.background,
        color: tokens.color?.text,
        transition: "all 0.3s ease",
      }}
    >
      <div style={{ maxWidth: "500px", width: "100%" }}>
        {/* Theme Controls */}
        <Card>
          <h2 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Theme Controls
          </h2>
          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Button size="sm" onClick={() => setTheme("light")}>
              Light Theme
            </Button>
            <Button size="sm" onClick={() => setTheme("dark")}>
              Dark Theme
            </Button>
            <Button size="sm" onClick={() => setBrand("acme")}>
              Acme Brand
            </Button>
            <Button size="sm" onClick={() => setBrand("globex")}>
              Globex Brand
            </Button>
          </div>
          <div style={{ textAlign: "center", marginTop: "1rem" }}>
            <small>
              Current: {brand} - {theme}
            </small>
          </div>
        </Card>

        {/* Login Form */}
        <Card>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <h1>Welcome to {brand.toUpperCase()}</h1>
            <p>Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "1rem" }}>
              <Input
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
            <div style={{ marginBottom: "2rem" }}>
              <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>
            <Button type="submit" variant="primary" style={{ width: "100%" }}>
              Sign In
            </Button>
          </form>
        </Card>

        {/* Token Preview */}
        <Card>
          <details>
            <summary>Current Token Values</summary>
            <pre
              style={{ fontSize: "12px", overflow: "auto", maxHeight: "200px" }}
            >
              {JSON.stringify(
                {
                  colors: tokens.color,
                  brand: brand,
                  theme: theme,
                },
                null,
                2
              )}
            </pre>
          </details>
        </Card>
      </div>
    </div>
  );
};

export default function LoginPage() {
  return (
    <DesignSystemProvider>
      <LoginDemo />
    </DesignSystemProvider>
  );
}
