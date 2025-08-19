# Abdallh Nasser Ahmed Mansour - Creative Developer Portfolio

## Overview
This portfolio website showcases the work and skills of **Abdallh Nasser Ahmed Mansour**, a creative frontend developer and UI/UX designer.  
The site features a modern design with interactive elements, smooth animations, and a responsive layout that works across all devices.

![Portfolio Screenshot](https://i.postimg.cc/bwfWprzR/file-000000006d9c620aa3de6c8a7dbb2162.png)

---

## Key Features

### Modern Design Elements
- **Gradient Backgrounds:** Blue and purple color scheme `#4361ee` and `#ff0a78`
- **Glass Morphism Effects:** Frosted glass UI elements with subtle borders
- **Interactive Cursor:** Custom cursor with follower effect
- **Particle.js Background:** Interactive particle animation

### Interactive Components
- **Theme Switcher:** Toggle between dark and light modes
- **Animated Skill Bars:** Progress bars animate on scroll
- **Hover Effects:** Smooth interactive transitions
- **Floating Icons:** Tech icons animated around profile image

### Responsive Design
- Mobile-first approach
- Flexbox and Grid layouts
- Media queries for different screen sizes
- Hamburger menu for mobile navigation

### Special Effects
- **GSAP Animations:** Smooth scrolling and element animations
- **ScrollTrigger:** Animation on scroll
- **Preloader Screen:** With name animation
- **Ripple Click Effect:** Visual feedback on clicks

---

## Technologies Used

### Frontend
- **HTML5:** Semantic markup  
- **CSS3:** Custom properties, animations, gradients  
- **JavaScript:** Interactive functionality  
- **GSAP:** Advanced animations (GreenSock Animation Platform)  
- **Particle.js:** Background particle effects  
- **Font Awesome:** Icons  

### Development Tools
- Responsive design with media queries  
- CSS variables for theme management  
- LocalStorage for theme preference persistence  
- Modern CSS features (flexbox, grid, clip-path)  

---

## Project Structure

index.html
│
├── Preloader Section
│   ├── Animated "ABDALLH." text
│   └── Gradient background
│
├── Header
│   ├── Logo with gradient effect
│   ├── Navigation links
│   └── Theme switcher
│
├── Hero Section
│   ├── Main headline with gradient text
│   ├── Call-to-action buttons
│   └── Scroll down indicator
│
├── About Section
│   ├── Profile image with floating tech icons
│   ├── Skill progress bars
│   └── Personal description
│
├── Projects Section
│   ├── Project cards with hover effects
│   ├── Tech tags
│   └── Live demo / details buttons
│
├── Contact Section
│   ├── Contact info
│   ├── Social media links
│   └── Contact form with floating labels
│
├── Footer
│   └── Copyright
│
└── Scripts
    ├── Particles.js init
    ├── GSAP animations
    ├── Theme switching logic
    ├── Form validation
    └── Scroll animations
---

## How to Customize

### 1. Personal Information
Update:
- Hero section text → your full name  
- About section content  
- Contact information  
- Social media links  

### 2. Projects
Add in **Projects Section**:
```html
<div class="project-card animate-on-scroll">
  <div class="project-image">
    <!-- Project image here -->
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

3. Skills

<div class="skill">
  <div class="skill-info">
    <span class="skill-name">Skill Name</span>
    <span>95%</span>
  </div>
  <div class="skill-bar">
    <div class="skill-progress" data-width="95"></div>
  </div>
</div>

4. Colors (CSS Variables)

:root {
  --primary-blue: #4361ee;
  --primary-pink: #ff0a78;
  --dark-bg-1: #0f0c29;
  --dark-bg-2: #24243e;
}

5. Light Mode Colors

body.light-mode {
  --text-light: #2d3748;
  --text-gray: #4a5568;
  --glass-bg: rgba(255, 255, 255, 0.7);
}


---

Setup Instructions

1. Clone repository:



git clone https://github.com/Abdallh091/portfolio.git

2. Open folder:



cd portfolio

3. Run project:



open index.html

> No build process required – pure HTML/CSS/JS




---

Performance Optimizations

Lazy Loading for images

Minified CSS

GSAP for efficient animations

Debounced scroll events



---

License

MIT License – Free to use and customize.


---

Credits

Particle.js – background effects

GSAP – advanced animations

Font Awesome – icons

Google Fonts – typography



---

Live Demo: Portfolio Website
GitHub Repository: Abdallh091/portfolio
