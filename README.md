# React TypeScript AtomicDesign Boilerplate

This is a boilerplate for frontend development with React in TypeScript.

It applies a component design pattern based on AtomicDesign, using Webpack for the bandler and styled-components for CSS.

## Live Demo

### Storybook

https://tachibanayu24.github.io/react-ts-atomicdesign-boilerplate

## Setup

Webpack-dev-server will launch and https://localhost:3000 will open in browser.

```sh
$ yarn install
$ yarn start
```

## UI Component Explore

Storybook will launch and https://localhost:6006 will open in browser.

```sh
$ yarn storybook
$ yarn build-storybook # build command
```

## CLI tools

### create-component

Create index.ts, Component.ts, Component.stories.tsx, and Component.spec.tsx with a one command 🚀

Here is an example usage.

```sh
$ yarn create-component -C atoms/Icon

✨ Create component ./src/components/atoms/Icon/index.ts
✨ Create component ./src/components/atoms/Icon/Icon.tsx
✨ Create component ./src/components/atoms/Icon/Icon.stories.tsx
✨ Create component ./src/components/atoms/Icon/Icon.spec.tsx
```
