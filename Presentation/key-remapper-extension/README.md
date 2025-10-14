# F19/F20 Key Remapper Extension

A simple Firefox extension that remaps:
- **F19** → **Left Arrow** (backward navigation)
- **F20** → **Right Arrow** (forward navigation)

## Why This is Better

Instead of complex Marp-specific code, this extension simply translates F19/F20 to standard arrow keys that work with:
- ✅ Marp presentations
- ✅ PowerPoint online
- ✅ Google Slides  
- ✅ Any web-based presentation software
- ✅ Image galleries
- ✅ Video players
- ✅ Any application that uses arrow keys for navigation

## Installation

1. Open Firefox
2. Go to `about:debugging#/runtime/this-firefox`
3. Click "Load Temporary Add-on..."
4. Navigate to this folder and select `manifest.json`
5. The extension will be active immediately

## Usage

- Press **F19** → acts like **Left Arrow** (go backward)
- Press **F20** → acts like **Right Arrow** (go forward)
- Works on any website, in any presentation
- No configuration needed

## Technical Details

The extension:
- Intercepts F19/F20 key events at the browser level
- Prevents the original F19/F20 event from propagating
- Creates and dispatches new Left/Right arrow key events
- Works with all frames and iframes
- Has minimal performance impact

This approach is much more robust than trying to hook into specific presentation frameworks!