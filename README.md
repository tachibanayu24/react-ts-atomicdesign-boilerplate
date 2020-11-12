# React TypeScript AtomicDesign Boilerplate

This is a boilerplate for frontend development with React in TypeScript.

It applies a component design pattern based on AtomicDesign, using Webpack for the bandler and styled-components for CSS.

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

✨ Create component template ./src/components/atoms/Icon/index.ts
✨ Create component template ./src/components/atoms/Icon/Icon.tsx
✨ Create component template ./src/components/atoms/Icon/Icon.stories.tsx
✨ Create component template ./src/components/atoms/Icon/Icon.spec.tsx
```

WIP

tasks

- [x] ts
- [x] webpack
- [x] mui
- [x] atomic design
- [x] styled-components
- [ ] routing
- [ ] jest, testing-library
- [x] lint
- [ ] ci
- [x] storybook
- [ ] axios
- [ ] date-fns
- [x] CLI(create-components)
- [x] .vscode
- [ ] storybook to gp

bugs

- [x] vscode の設定(インポートでエラー)
- [ ] storybook の deprecated 対応
