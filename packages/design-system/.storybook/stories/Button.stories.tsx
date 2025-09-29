// packages/design-system/.storybook/stories/Button.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "../../src";
import { DesignSystemProvider } from "../../src/providers";
import React from "react";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  decorators: [
    (Story) => (
      <DesignSystemProvider>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            padding: "2rem",
          }}
        >
          <Story />
        </div>
      </DesignSystemProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "outline", "ghost", "danger", "glass"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    loading: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// Default story that shows all controls
export const Default: Story = {
  args: {
    variant: "primary",
    size: "md",
    children: "Button",
  },
};

// Variant Stories
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Ghost Button",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger Button",
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    children: "Glass Button",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// Size Stories
export const Small: Story = {
  args: {
    size: "sm",
    children: "Small Button",
  },
};

export const Medium: Story = {
  name: "Medium", // Explicit name to avoid conflict
  args: {
    size: "md",
    children: "Medium Button",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large Button",
  },
};

// State Stories
export const LoadingState: Story = {
  args: {
    loading: true,
    children: "Loading Button",
  },
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    children: "Disabled Button",
  },
};

// Icon Stories
export const WithLeftIcon: Story = {
  args: {
    icon: "⭐",
    iconPosition: "left",
    children: "Button with Icon",
  },
};

export const WithRightIcon: Story = {
  args: {
    icon: "➡️",
    iconPosition: "right",
    children: "Button with Icon",
  },
};

// Showcase Stories
export const AllVariantsShowcase = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        alignItems: "center",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "1rem" }}>All Variants</h3>
        <div
          style={{
            display: "flex",
            gap: "1rem",
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

      <div>
        <h3 style={{ marginBottom: "1rem" }}>All Sizes</h3>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            alignItems: "center",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button size="sm" variant="primary">
            Small
          </Button>
          <Button size="md" variant="primary">
            Medium
          </Button>
          <Button size="lg" variant="primary">
            Large
          </Button>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "1rem" }}>States</h3>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button icon="⭐" iconPosition="left">
            With Icon
          </Button>
        </div>
      </div>
    </div>
  ),
};

export const VariantsAndSizesGrid = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        minWidth: "600px",
      }}
    >
      {(
        ["primary", "secondary", "outline", "ghost", "danger", "glass"] as const
      ).map((variant) => (
        <div
          key={variant}
          style={{
            border: "1px solid #e5e7eb",
            padding: "1rem",
            borderRadius: "0.5rem",
          }}
        >
          <h3
            style={{
              marginBottom: "1rem",
              textTransform: "capitalize",
              color: "#374151",
            }}
          >
            {variant} Variant
          </h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            {(["sm", "md", "lg"] as const).map((size) => (
              <div
                key={size}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                  {size}
                </span>
                <Button variant={variant} size={size}>
                  Button
                </Button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
  parameters: {
    backgrounds: {
      default: "light",
      values: [
        { name: "light", value: "#ffffff" },
        { name: "dark", value: "#1f2937" },
      ],
    },
  },
};
