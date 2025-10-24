# CSS Reuse Guide

## Overview
This directory contains a consolidated CSS file (`main.css`) that combines styles from across the OIK website project. This approach promotes code reuse and maintainability.

## File Structure
```
assets/
└── css/
    ├── main.css       # Consolidated CSS styles
    └── README.md      # This file
```

## How to Use
To use the consolidated styles in your HTML files, simply include the following link in the `<head>` section of your HTML documents:

```html
<link rel="stylesheet" href="assets/css/main.css">
```

## What's Included
The `main.css` file contains:

1. **Base Styles** - Reset and base typography from `styles.css`
2. **Navigation Styles** - Header and menu styling
3. **News Meta Styles** - Styles for news metadata display
4. **Chatbox Styles** - All chatbox-related styles
5. **Chatbox Preview Styles** - Styles for chatbox preview sections
6. **Utility Classes** - Reusable utility classes
7. **Modal Styles** - Login/signup modal styling
8. **Responsive Design** - Media queries for different screen sizes

## Benefits
- **Reduced Code Duplication**: Styles are defined in one place
- **Easier Maintenance**: Changes only need to be made in one file
- **Improved Performance**: Fewer HTTP requests
- **Consistent Design**: Ensures visual consistency across pages

## Migration Notes
When migrating from inline styles or multiple CSS files:
1. Remove individual `<style>` blocks from HTML files
2. Remove links to separate CSS files
3. Add the link to `main.css`
4. Verify that all styles are still working correctly

## Customization
To customize styles for specific pages:
1. Add page-specific classes to your HTML elements
2. Use those classes to override or extend the base styles in `main.css`
3. Consider adding a page-specific CSS file if extensive customizations are needed

## Example Usage
```html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="assets/css/main.css">
</head>
<body>
    <div class="container">
        <button class="btn primary-btn">Click Me</button>
        <div class="chatbox-container">
            <!-- Chatbox content -->
        </div>
    </div>
</body>
</html>
```