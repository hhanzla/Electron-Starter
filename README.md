# 🚀 Electron Starter Pack

A minimal, production-ready **Electron Starter Template** designed to kickstart your next desktop application. This repository provides a clean, bloat-free foundation with a beautiful **Splash Screen to Home Page transition**, internet connectivity checking, and a pre-configured packaging setup.

Whether you are building a Point of Sale (POS), a management dashboard, or any desktop utility, you can clone this separate repository and immediately start building your UI.

## ✨ Features
- **Smooth Splash Screen**: A non-intrusive, frameless splash screen that smoothly fades in and out.
- **Internet Connectivity Check**: Built-in backend DNS check before allowing the user to proceed.
- **Clean Architecture**: Simplified `main.js` and `preload.js` with only the absolute necessities (no bloated IPC handlers).
- **Custom Frameless Window**: The main window comes with a custom draggable top-bar and a working exit button.
- **Auto-reloading**: Pre-configured `nodemon` and `electron-reload` for fast UI development.
- **Packaging Ready**: Configured with `electron-builder` for creating Windows executables (`.exe`).

## 📂 Project Structure
- `main.js`: Main Electron process that handles window creation, opacity fade transitions, and backend logic.
- `preload.js`: Secure bridge exposing backend functions (Node.js) to the frontend safely.
- `index.html`: Splash screen UI (entry point).
- `assets/css/splash.css` & `assets/js/splash.js`: Styling and logic for the splash screen.
- `pages/home/home.html`: The main window page where your actual application interface will be developed.
- `pages/home/home.css`: Styling for the main home page (includes the custom draggable top bar).
- `pages/home/home.js`: Frontend logic for the home page.

## 🛠️ Installation

Clone this repository and install all dependencies:

```bash
git clone https://github.com/hhanzla/Electron-Starter.git
cd Electron-Starter
npm install
```

## 💻 Usage

Start the development server. It will automatically reload when you make changes to your files:

```bash
npm start
```

## 📦 Build

To build a standalone Windows executable (`.exe`) installer:

```bash
npm run build:win
```

## 🎨 How to Customize
1. **Rename the App**: Open `package.json` and change the `name` and `build.productName` fields to your new app's name.
2. **Change the Icon**: Replace `assets/icon.png` with your own logo.
3. **Start Building**: Open `pages/home/home.html` and start building your interface!
