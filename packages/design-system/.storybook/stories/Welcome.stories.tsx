// packages/design-system/.storybook/stories/Welcome.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react-vite";
import { DesignSystemProvider, Button, Input, Card } from "../../src";

const meta: Meta = {
  title: "🚀 Welcome/Getting Started",
  parameters: {
    layout: "centered",
  },
};

export default meta;

export const Welcome: StoryObj = {
  render: () => (
    <DesignSystemProvider>
      <div style={{ maxWidth: "1000px", padding: "2rem", margin: "0 auto" }}>
        <h1>🎨 Design System</h1>
        <p>
          Welcome to our cross-platform design system built with React,
          TypeScript, and Storybook.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "3rem",
            marginTop: "3rem",
          }}
        >
          <div>
            <h2>🎯 Features</h2>
            <ul>
              <li>Multi-brand support (Acme, Globex)</li>
              <li>Light/Dark themes</li>
              <li>Cross-platform (Web + React Native)</li>
              <li>TypeScript first</li>
              <li>Accessibility focused</li>
              <li>Design token driven</li>
            </ul>
          </div>

          <div>
            <h2>📦 Available Components</h2>
            <ul>
              <li>
                <strong>Button</strong> - Primary, Secondary, Outline variants
              </li>
              <li>
                <strong>Input</strong> - Label, error states
              </li>
              <li>
                <strong>Card</strong> - Container component
              </li>
              <li>
                <strong>ButtonNative</strong> - React Native button
              </li>
            </ul>
          </div>
        </div>

        <h2 style={{ marginTop: "3rem" }}>🏗️ Components Preview</h2>
        {/* Keep your existing component preview */}
      </div>
    </DesignSystemProvider>
  ),
};
