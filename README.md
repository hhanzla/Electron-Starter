# Electron Starter Pack

Currently, this repository serves as a **clean, boilerplate Electron Starter Pack** with a simple, smooth transition from a **Splash Screen** to a **Home Page**. The actual application functionality will be built on top of this foundation in the future.

## Features
- **Smooth Splash Screen**: A non-intrusive, frameless splash screen that checks for internet connectivity.
- **Clean Architecture**: Simplified `main.js` and `preload.js` with only the absolute necessities.
- **Auto-reloading**: Pre-configured `nodemon` for fast UI development.
- **Packaging Ready**: Configured with `electron-builder` for creating Windows executables.

## Project Structure
- `main.js`: Main Electron process that handles window creation and transition logic.
- `preload.js`: Secure bridge between the backend (Node.js) and frontend.
- `index.html`: Splash screen UI (entry point).
- `assets/css/splash.css`: Styling and animations for the splash screen.
- `assets/js/splash.js`: Logic to check internet connectivity and trigger the transition to Home Page.
- `pages/home/home.html`: The main window page where the user interface will be developed.
- `pages/home/home.css`: Styling for the main home page (includes custom draggable top bar).
- `pages/home/home.js`: Frontend logic for the home page (handles window controls like closing the app).

## Installation

Install all dependencies:

```bash
npm install
```

## Usage

Start the development server with auto-reload:

```bash
npm start
```

## Build

Build the Windows executable/package:

```bash
npm run build:win
```
