// packages/design-system/.storybook/stories/Card.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Card } from "../../src";
import { DesignSystemProvider } from "../../src/providers";
import React from "react";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
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
            width: "100%",
          }}
        >
          <div style={{ width: "100%", maxWidth: "600px" }}>
            <Story />
          </div>
        </div>
      </DesignSystemProvider>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    elevation: {
      control: { type: "select" },
      options: ["none", "low", "medium", "high"],
    },
    interactive: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Card>;

// Default story that shows all controls
export const Default: Story = {
  args: {
    children: (
      <div>
        <h3 style={{ margin: "0 0 12px 0", color: "#1E293B" }}>Card Title</h3>
        <p style={{ margin: 0, color: "#64748B" }}>
          This is a basic card with some content inside. Cards are used to group
          and display content in a clear and organized way.
        </p>
      </div>
    ),
  },
};

// Elevation Stories
export const NoElevation: Story = {
  args: {
    elevation: "none",
    children: (
      <div>
        <h3 style={{ margin: "0 0 12px 0", color: "#1E293B" }}>No Elevation</h3>
        <p style={{ margin: 0, color: "#64748B" }}>
          This card has no shadow elevation. Useful for flat designs or when you
          want minimal visual weight.
        </p>
      </div>
    ),
  },
};

export const LowElevation: Story = {
  args: {
    elevation: "low",
    children: (
      <div>
        <h3 style={{ margin: "0 0 12px 0", color: "#1E293B" }}>
          Low Elevation
        </h3>
        <p style={{ margin: 0, color: "#64748B" }}>
          This card has a subtle shadow for a light floating effect.
        </p>
      </div>
    ),
  },
};

export const MediumElevation: Story = {
  args: {
    elevation: "medium",
    children: (
      <div>
        <h3 style={{ margin: "0 0 12px 0", color: "#1E293B" }}>
          Medium Elevation
        </h3>
        <p style={{ margin: 0, color: "#64748B" }}>
          This is the default elevation with a balanced shadow that works well
          for most use cases.
        </p>
      </div>
    ),
  },
};

export const HighElevation: Story = {
  args: {
    elevation: "high",
    children: (
      <div>
        <h3 style={{ margin: "0 0 12px 0", color: "#1E293B" }}>
          High Elevation
        </h3>
        <p style={{ margin: 0, color: "#64748B" }}>
          This card has a prominent shadow for maximum visual hierarchy and
          emphasis.
        </p>
      </div>
    ),
  },
};

// Interactive Stories
export const Interactive: Story = {
  args: {
    interactive: true,
    children: (
      <div>
        <h3 style={{ margin: "0 0 12px 0", color: "#1E293B" }}>
          Interactive Card
        </h3>
        <p style={{ margin: 0, color: "#64748B" }}>
          Hover over this card to see the interactive effect. The card will lift
          up and the shadow will intensify.
        </p>
      </div>
    ),
  },
};

export const InteractiveHighElevation: Story = {
  args: {
    interactive: true,
    elevation: "high",
    children: (
      <div>
        <h3 style={{ margin: "0 0 12px 0", color: "#1E293B" }}>
          Interactive High Elevation
        </h3>
        <p style={{ margin: 0, color: "#64748B" }}>
          This interactive card starts with high elevation and gets even more
          prominent on hover.
        </p>
      </div>
    ),
  },
};

// Showcase Stories
export const AllElevationsShowcase = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "1rem", color: "#374151" }}>
          Card Elevations
        </h3>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
        >
          {(["none", "low", "medium", "high"] as const).map((elevation) => (
            <Card key={elevation} elevation={elevation}>
              <div>
                <h4
                  style={{
                    margin: "0 0 8px 0",
                    color: "#1E293B",
                    textTransform: "capitalize",
                  }}
                >
                  {elevation} Elevation
                </h4>
                <p style={{ margin: 0, color: "#64748B", fontSize: "14px" }}>
                  This card demonstrates the {elevation} elevation level.
                  {elevation === "none" &&
                    " It has no shadow for a flat appearance."}
                  {elevation === "low" &&
                    " It has a subtle shadow for light depth."}
                  {elevation === "medium" &&
                    " It has a balanced shadow for general use."}
                  {elevation === "high" &&
                    " It has a strong shadow for maximum emphasis."}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  ),
};

export const InteractiveShowcase = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "1rem", color: "#374151" }}>
          Interactive Cards
        </h3>
        <p style={{ marginBottom: "1rem", color: "#64748B" }}>
          Hover over these cards to see the interactive effects
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1.5rem",
          }}
        >
          <Card interactive elevation="low">
            <div>
              <h4 style={{ margin: "0 0 8px 0", color: "#1E293B" }}>
                Low Elevation
              </h4>
              <p style={{ margin: 0, color: "#64748B", fontSize: "14px" }}>
                Interactive card with low starting elevation
              </p>
            </div>
          </Card>
          <Card interactive elevation="medium">
            <div>
              <h4 style={{ margin: "0 0 8px 0", color: "#1E293B" }}>
                Medium Elevation
              </h4>
              <p style={{ margin: 0, color: "#64748B", fontSize: "14px" }}>
                Interactive card with medium starting elevation
              </p>
            </div>
          </Card>
          <Card interactive elevation="high">
            <div>
              <h4 style={{ margin: "0 0 8px 0", color: "#1E293B" }}>
                High Elevation
              </h4>
              <p style={{ margin: 0, color: "#64748B", fontSize: "14px" }}>
                Interactive card with high starting elevation
              </p>
            </div>
          </Card>
          <Card interactive elevation="none">
            <div>
              <h4 style={{ margin: "0 0 8px 0", color: "#1E293B" }}>
                No Elevation
              </h4>
              <p style={{ margin: 0, color: "#64748B", fontSize: "14px" }}>
                Interactive card starting with no elevation
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  ),
};

// Content Examples
export const WithRichContent = {
  render: () => (
    <Card elevation="medium">
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <div>
          <h2 style={{ margin: "0 0 8px 0", color: "#1E293B" }}>
            Product Card
          </h2>
          <p style={{ margin: 0, color: "#64748B", fontSize: "14px" }}>
            This card demonstrates how to structure rich content within a card
            component.
          </p>
        </div>

        <div
          style={{
            height: "200px",
            backgroundColor: "#F1F5F9",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#64748B",
          }}
        >
          Image or Media Content
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h3 style={{ margin: "0 0 4px 0", color: "#1E293B" }}>$299.99</h3>
            <p
              style={{
                margin: 0,
                color: "#10B981",
                fontSize: "14px",
                fontWeight: "500",
              }}
            >
              In Stock
            </p>
          </div>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#3B82F6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </Card>
  ),
};

export const UserProfileCard = {
  render: () => (
    <Card interactive elevation="medium" style={{ maxWidth: "320px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            borderRadius: "50%",
            backgroundColor: "#E2E8F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#64748B",
            fontSize: "24px",
          }}
        >
          👤
        </div>

        <div style={{ textAlign: "center" }}>
          <h3 style={{ margin: "0 0 4px 0", color: "#1E293B" }}>John Doe</h3>
          <p
            style={{ margin: "0 0 12px 0", color: "#64748B", fontSize: "14px" }}
          >
            Software Engineer
          </p>
          <p style={{ margin: 0, color: "#475569", fontSize: "14px" }}>
            Building amazing user experiences with modern web technologies.
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", width: "100%" }}>
          <button
            style={{
              flex: 1,
              padding: "8px 16px",
              backgroundColor: "transparent",
              color: "#3B82F6",
              border: "1px solid #3B82F6",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Message
          </button>
          <button
            style={{
              flex: 1,
              padding: "8px 16px",
              backgroundColor: "#3B82F6",
              color: "white",
              border: "none",
              borderRadius: "6px",
              cursor: "pointer",
              fontWeight: "500",
            }}
          >
            Follow
          </button>
        </div>
      </div>
    </Card>
  ),
};

export const StatsCard = {
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "1.5rem",
        width: "100%",
      }}
    >
      <Card elevation="low">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#3B82F6",
              marginBottom: "8px",
            }}
          >
            1,234
          </div>
          <div style={{ color: "#64748B", fontSize: "14px" }}>Total Users</div>
        </div>
      </Card>

      <Card elevation="low">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#10B981",
              marginBottom: "8px",
            }}
          >
            567
          </div>
          <div style={{ color: "#64748B", fontSize: "14px" }}>Active Now</div>
        </div>
      </Card>

      <Card elevation="low">
        <div style={{ textAlign: "center" }}>
          <div
            style={{
              fontSize: "32px",
              fontWeight: "bold",
              color: "#F59E0B",
              marginBottom: "8px",
            }}
          >
            89%
          </div>
          <div style={{ color: "#64748B", fontSize: "14px" }}>Engagement</div>
        </div>
      </Card>
    </div>
  ),
};

// Grid Layout Examples
export const CardGrid = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        width: "100%",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "1rem", color: "#374151" }}>
          Card Grid Layout
        </h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {[1, 2, 3, 4].map((item) => (
            <Card key={item} interactive elevation="medium">
              <div>
                <h4 style={{ margin: "0 0 8px 0", color: "#1E293B" }}>
                  Feature {item}
                </h4>
                <p style={{ margin: 0, color: "#64748B", fontSize: "14px" }}>
                  This is feature card number {item} in a responsive grid
                  layout.
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  ),
};
