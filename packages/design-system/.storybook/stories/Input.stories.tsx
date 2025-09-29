// packages/design-system/.storybook/stories/Input.stories.tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "../../src";
import { DesignSystemProvider } from "../../src/providers";
import React from "react";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
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
          <div style={{ width: "100%", maxWidth: "400px" }}>
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
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "outline", "glass"],
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

// Default story that shows all controls
export const Default: Story = {
  args: {
    label: "Default Input",
    placeholder: "Enter your text...",
  },
};

// Variant Stories
export const DefaultVariant: Story = {
  name: "Default Variant",
  args: {
    variant: "default",
    label: "Default Input",
    placeholder: "This is the default variant",
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    label: "Filled Input",
    placeholder: "This is the filled variant",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    label: "Outline Input",
    placeholder: "This is the outline variant",
  },
};

export const Glass: Story = {
  args: {
    variant: "glass",
    label: "Glass Input",
    placeholder: "This is the glass variant",
  },
  parameters: {
    backgrounds: { default: "dark" },
  },
};

// State Stories
export const WithError: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    error: "Please enter a valid email address",
    defaultValue: "invalid-email",
  },
};

export const WithSuccess: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    success: true,
    helperText: "Email validated successfully",
    defaultValue: "user@example.com",
  },
};

export const WithHelperText: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "Enter your password",
    helperText: "Must be at least 8 characters long",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
  },
};

export const Required: Story = {
  args: {
    label: "Required Field",
    placeholder: "This field is required",
    required: true,
  },
};

// Type Stories
export const Email: Story = {
  args: {
    type: "email",
    label: "Email Address",
    placeholder: "user@example.com",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter your password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    label: "Age",
    placeholder: "Enter your age",
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
        width: "100%",
      }}
    >
      <div>
        <h3 style={{ marginBottom: "1rem", color: "#374151" }}>All Variants</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Input
            variant="default"
            label="Default Variant"
            placeholder="Default input"
          />
          <Input
            variant="filled"
            label="Filled Variant"
            placeholder="Filled input"
          />
          <Input
            variant="outline"
            label="Outline Variant"
            placeholder="Outline input"
          />
          <Input
            variant="glass"
            label="Glass Variant"
            placeholder="Glass input"
          />
        </div>
      </div>
    </div>
  ),
};

export const AllStatesShowcase = {
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
        <h3 style={{ marginBottom: "1rem", color: "#374151" }}>Input States</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Input
            label="Normal Input"
            placeholder="This is a normal input"
            helperText="This is helper text"
          />
          <Input
            label="Error State"
            placeholder="This input has an error"
            error="This field is required"
          />
          <Input
            label="Success State"
            placeholder="This input is successful"
            success={true}
            helperText="Validation passed"
          />
          <Input
            label="Disabled Input"
            placeholder="This input is disabled"
            disabled={true}
          />
          <Input
            label="Required Field"
            placeholder="This field is required"
            required={true}
          />
        </div>
      </div>
    </div>
  ),
};

export const InputTypesShowcase = {
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
        <h3 style={{ marginBottom: "1rem", color: "#374151" }}>Input Types</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <Input type="text" label="Text Input" placeholder="Enter text" />
          <Input
            type="email"
            label="Email Input"
            placeholder="user@example.com"
          />
          <Input
            type="password"
            label="Password Input"
            placeholder="Enter password"
          />
          <Input
            type="number"
            label="Number Input"
            placeholder="Enter number"
          />
          <Input
            type="tel"
            label="Telephone Input"
            placeholder="Enter phone number"
          />
        </div>
      </div>
    </div>
  ),
};

export const WithoutLabel = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      <Input placeholder="Input without label" />
      <Input
        placeholder="With helper text"
        helperText="This is helper text without label"
      />
      <Input placeholder="With error" error="This field has an error" />
    </div>
  ),
};

// Interactive Examples
export const LoginFormExample = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
        width: "100%",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem", color: "#374151" }}>Login Form</h3>
      <Input
        type="email"
        label="Email Address"
        placeholder="Enter your email"
        required={true}
      />
      <Input
        type="password"
        label="Password"
        placeholder="Enter your password"
        required={true}
        helperText="Must be at least 8 characters"
      />
    </div>
  ),
};

export const RegistrationFormExample = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        width: "100%",
      }}
    >
      <h3 style={{ marginBottom: "0.5rem", color: "#374151" }}>
        Registration Form
      </h3>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}
      >
        <Input label="First Name" placeholder="John" required />
        <Input label="Last Name" placeholder="Doe" required />
      </div>
      <Input
        type="email"
        label="Email"
        placeholder="john.doe@example.com"
        required
      />
      <Input type="tel" label="Phone Number" placeholder="+1 (555) 123-4567" />
      <Input
        type="password"
        label="Password"
        placeholder="Create password"
        required
      />
    </div>
  ),
};
