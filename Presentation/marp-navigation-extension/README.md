# Marp F20 Navigation Extension

This browser extension automatically adds F20 key navigation to any Marp presentation you open in Firefox.

## Installation

1. Open Firefox
2. Go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on..."
4. Navigate to this folder and select `manifest.json`
5. The extension will be loaded and active

## Usage

- Open any Marp presentation HTML file
- Press **F20** to go forward through slides
- Works in both main presentation view and presenter view
- The extension automatically detects Marp presentations and enables F20 navigation

## Features

- Automatically detects Marp presentations
- Works with all Marp-exported HTML files
- No need to modify your presentation files
- Persistent across browser sessions (until you restart Firefox)

## How it works

The extension injects JavaScript that:
1. Detects if the current page is a Marp presentation
2. Finds the Bespoke.js deck instance
3. Adds F20 key listener for forward navigation
4. Works in both main and presenter views