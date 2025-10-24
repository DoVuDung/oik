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

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a pull request

## Author

Dung Do - https://www.dungdo.site

## License

This project is for educational purposes and is not licensed for commercial use.