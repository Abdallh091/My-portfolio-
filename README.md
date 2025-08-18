# Alex - Creative Developer Portfolio

## Overview
This portfolio website showcases the work and skills of Alex Morgan, a creative frontend developer and UI/UX designer. The site features a modern design with interactive elements, smooth animations, and a responsive layout that works across all devices.

![Portfolio Screenshot](https://i.imgur.com/placeholder-image.png)

## Key Features

### 🚀 Modern Design Elements
- **Gradient Backgrounds**: Using blue and purple color scheme (#4361ee and #ff0a78)
- **Glass Morphism Effects**: Frosted glass UI elements with subtle borders
- **Interactive Cursor**: Custom cursor with follower effect
- **Particle.js Background**: Interactive particle animation in the background

### ⚡ Interactive Components
- **Theme Switcher**: Toggle between dark and light modes
- **Animated Skill Bars**: Progress bars that animate on scroll
- **Hover Effects**: Interactive elements with smooth transitions
- **Floating Icons**: Animated tech icons around profile image

### 📱 Responsive Design
- Mobile-first approach
- Flexbox and Grid layouts
- Media queries for different screen sizes
- Hamburger menu for mobile navigation

### ✨ Special Effects
- **GSAP Animations**: For smooth scrolling and element animations
- **ScrollTrigger**: For animation on scroll
- **Preloader Screen**: With name animation
- **Ripple Click Effect**: Visual feedback on clicks

## Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, animations, gradients
- **JavaScript**: Interactive functionality
- **GSAP**: Advanced animations (GreenSock Animation Platform)
- **Particle.js**: Background particle effects
- **Font Awesome**: Icons

### Development Tools
- Responsive design with media queries
- CSS variables for theme management
- LocalStorage for theme preference persistence
- Modern CSS features (flexbox, grid, clip-path)

## Project Structure

```
index.html
│
├── Preloader Section
│   - Animated "ALEX." text
│   - Gradient background
│
├── Header
│   - Logo with gradient effect
│   - Navigation links
│   - Theme switcher (dark/light mode)
│
├── Hero Section
│   - Main headline with gradient text
│   - Call-to-action buttons
│   - Scroll down indicator
│
├── About Section
│   - Profile image with floating tech icons
│   - Skill progress bars
│   - Personal description
│
├── Projects Section
│   - Project cards with hover effects
│   - Tech tags for each project
│   - Live demo and details buttons
│
├── Contact Section
│   - Contact information
│   - Social media links with tooltips
│   - Contact form with floating labels
│
├── Footer
│   - Copyright information
│
└── Scripts
    - Particles.js initialization
    - GSAP animations
    - Theme switching logic
    - Form validation
    - Scroll animations
```

## How to Customize

### 1. Personal Information
Update the following sections in the HTML:
- Hero section text
- About section content
- Contact information
- Social media links

### 2. Projects
Add your own projects in the projects section:
```html
<div class="project-card animate-on-scroll">
  <div class="project-image">
    <!-- Your project image/placeholder -->
  </div>
  <h3>Project Name</h3>
  <p>Project description</p>
  <div class="project-tags">
    <span class="project-tag">Technology</span>
  </div>
  <div class="project-actions">
    <a href="#" class="btn btn-primary">Live Demo</a>
    <a href="#" class="btn btn-outline">Details</a>
  </div>
</div>
```

### 3. Skills
Update skills in the about section:
```html
<div class="skill">
  <div class="skill-info">
    <span class="skill-name">Skill Name</span>
    <span>95%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress" data-width="95"></div>
  </div>
</div>
```

### 4. Colors
Modify the CSS variables at the top of the style section:
```css
:root {
  --primary-blue: #4361ee;
  --primary-pink: #ff0a78;
  --dark-bg-1: #0f0c29;
  --dark-bg-2: #24243e;
  /* ... other variables ... */
}
```

### 5. Theme Customization
Adjust light mode colors in the CSS:
```css
body.light-mode {
  --text-light: #2d3748;
  --text-gray: #4a5568;
  --glass-bg: rgba(255, 255, 255, 0.7);
  /* ... other variables ... */
}
```

## Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Open the project folder:
```bash
cd portfolio
```

3. Open `index.html` in your browser

No build process required - it's pure HTML/CSS/JS!

## Performance Optimizations

- **Lazy Loading**: Images load only when in viewport
- **CSS Minification**: All CSS in single file
- **Efficient Animations**: Using GSAP for performant animations
- **Debounced Scroll Events**: For better performance

## License
This project is licensed under the MIT License. Feel free to use it as a template for your own portfolio.

## Credits
- Particle.js for background effects
- GSAP for advanced animations
- Font Awesome for icons
- Google Fonts for typography

---

**Live Demo**: [https://alex-morgan-portfolio.netlify.app](https://alex-morgan-portfolio.netlify.app)  
**GitHub Repository**: [https://github.com/yourusername/portfolio](https://github.com/yourusername/portfolio)