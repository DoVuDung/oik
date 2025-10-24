# OIK School Website

This is the official website for THPT Ông Ích Khiêm (OIK High School) built with HTML, CSS, and JavaScript.

## Features

- Responsive design that works on all devices
- Interactive FAQ accordion section
- Image gallery carousel using Swiper.js
- AI chatbox assistant
- User authentication system (login/signup)
- News and events section
- School information and programs

## Getting Started

### Prerequisites

- A modern web browser
- Python 3 (for local development server)

### Running the Project Locally

1. Clone or download this repository
2. Navigate to the project directory
3. Start a local server using Python:

```bash
python3 -m http.server 8000
```

4. Open your browser and go to `http://localhost:8000`

### Alternative Method (if Python is not available)

1. Clone or download this repository
2. Open the `index.html` file directly in your browser

## Project Structure

```
.
├── index.html          # Main HTML file
├── script.js           # JavaScript functionality
├── styles.css          # Additional CSS styles
├── assets/
│   └── css/
│       └── main.css    # Consolidated CSS styles
├── img/                # Image assets
└── README.md           # This file
```

## Key Components

### FAQ Section
- Features an accordion-style interface for questions and answers
- Clean visual separation between headers and content
- Smooth expand/collapse animations

### Image Gallery
- Uses Swiper.js for a responsive carousel
- Auto-play functionality
- Navigation controls

### Chatbox
- AI-powered assistant for school-related queries
- Persistent chat history
- Responsive design

## Customization

### Colors
- Primary: #4e54c8 (blue)
- Secondary: Various grays and whites
- Accents: Blue gradients

### Fonts
- Primary: 'Segoe UI' with fallbacks

## Dependencies

All dependencies are loaded via CDN:
- Tailwind CSS
- Font Awesome
- Swiper.js
- Accordion.js

## Implementation Guide

### Adding New Pages
1. Create a new HTML file based on the existing structure
2. Ensure consistent header and footer content
3. Link to the main CSS file (`assets/css/main.css`)
4. Add navigation links in both desktop and mobile menus

### Modifying Styles
1. All CSS should be added to `assets/css/main.css`
2. Use existing classes as examples for consistency
3. Follow the mobile-first approach with appropriate media queries

### Adding New Features
1. Add HTML structure in the appropriate section
2. Implement CSS in `assets/css/main.css`
3. Add JavaScript functionality in `script.js` if needed
4. Test across different device sizes

### Working with the Chatbox
1. The chatbox uses simple pattern matching for responses
2. Add new response patterns in the `getAIResponse` function
3. Ensure responses are in Vietnamese for consistency

### Updating the Image Gallery
1. Add new images to the `img/` directory
2. Update the Swiper carousel HTML with new image tags
3. Ensure images are properly optimized for web

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

### Code Standards
- Follow existing code formatting and structure
- Use semantic HTML elements
- Maintain consistent CSS class naming
- Comment complex JavaScript functionality
- Test changes across different browsers

### Reporting Issues
- Use the GitHub Issues tracker
- Provide detailed descriptions of problems
- Include steps to reproduce issues
- Specify browser and device information

## Author

Dung Do - https://www.dungdo.site

## License

This project is for educational purposes and is not licensed for commercial use.