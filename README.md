# DS Monorepo

This monorepo is the home of a cross-platform **Design System** built with **TypeScript, Turbo, pnpm workspaces**, and modern frontend frameworks.

It contains:

- **apps/**
  - **web/** → Next.js demo app showcasing the Design System with brand & theme switcher.
  - **mobile/** → React Native app scaffold (future showcase of DS components on mobile).
- **packages/**
  - **tokens/** → Centralized Design Tokens (base, brands, themes, component-specific tokens).
  - **design-system/** → Reusable UI components Library (Button, Input, Card) with Storybook playground.

---

## Overview

Welcome to the **DS Monorepo**! This repository serves as a **central hub for building, testing, and showcasing a modern cross-platform Design System**.

It’s designed to:

- Provide **consistent UI components** for both web and mobile platforms.
- Demonstrate **component usage, themes, and brand variations** in a real-world web app.
- Enable **fast iteration and testing** of design tokens and UI components in isolation via Storybook.
- Serve as a **foundation for scalable, maintainable, and reusable UI libraries**.

---

## Features

- **Cross-platform UI library** with reusable components
- **Design Tokens** for themes, colors, typography, and spacing
- **Web demo app** (Next.js) showcasing components in real-world layouts
- **Mobile scaffold** (React Native) ready for DS integration
- **Storybook playground** for visualizing component variants
- **TypeScript first** for type safety and autocompletion
- **TurboRepo + pnpm workspaces** for monorepo efficiency and caching

---

## Want to see it in action?

<!-- - **Web App Demo:** [Live Portfolio Preview](https://your-web-app-link.com)
  _Explore how DS components come together in a complete web app with brand & theme switching._ -->

- **Design System Playground:** [Storybook](https://adeepika1991.github.io/ds-monorepo/storybook)  
  _View all component variants, interact with props, and see the design tokens in action._

---

## Tech Stack

- **pnpm workspaces** for dependency management
- **TurboRepo** for task running and caching
- **TypeScript** everywhere
- **Storybook** for DS component playground
- **Next.js** (apps/web)
- **React Native** (apps/mobile)

---

## Project Structure

```
ds-monorepo/
├── apps/
│ ├── web/ # Next.js portfolio app
│ └── mobile/ # React Native scaffold
├── packages/
│ ├── tokens/ # Base, brands, and theme tokens
│ └── design-system/ # UI components + Storybook
├── turbo.json
├── package.json
└── tsconfig.json
```
