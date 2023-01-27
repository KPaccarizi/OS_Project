# OS Project

This project is done using [React](https://reactjs.org/) with [TypeScript](https://www.typescriptlang.org/) and [Vite](https://vitejs.dev/) for compiling & bundling. 

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white&style=for-the-badge) ![TypeScript](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=for-the-badge) ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge) ![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/-Prettier-F7B93E?logo=prettier&logoColor=white&style=for-the-badge) ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Features

- Authentication flow with validation.
- Main screen.
- Menu Bar - Preferences & Time.
- Applications - Camera, Browser, News, Folders/Documents.
- Power off button.

## Live Version

TO DO: Deploy to Netlify

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

- Recommended `node` : `>=16.13.0`.
- Recommended to use `pnpm` for better experience, but `npm` or `yarn` works for the commands below too.

### Setup

- Clone the repository.
- Install all dependencies using: - `npm install`.

### Directory Structure

| Name               | Description                                                                                    |
| ------------------ | -----------------------------------------------------------------------------------------------|
| **public/**        | Static assets (fonts, css, js, img).                                                           |
| **scripts/**       | Automation scripts such as generate-icons.                                                     |
| **src/api**        | Api endpoints are placed here.                                                                 |
| **src/assets**     | Contains assets like icons or fonts.                                                           |
| **src/components** | React components that are used for specific pages, the ones that are generic are placed inside the  shared folder.|
| **src/context**    | Contains context providers that are used for global state or specific for certain components.  |
| **src/pages**      | Main screen components like Login & MainScreen are added here.                                 |
| **src/styles**     | Global style configurations are added here.                                                    |

## Scripts

##### Start dev server

- `npm run dev`

Starts the development mode to the browser at `http://localhost:8000`

##### Build for production

- `npm run build`

After creating the production build you can preview the build, by running:
- `npm run preview`

##### Generate Icons

- `npm run generate:icons`

This script will generate all the icons from the `assets/icons` into a single component called `Icon.generated.tsx` that we can use throughout the application where we need to render an Icon.