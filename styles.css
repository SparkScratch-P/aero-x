/* Base Styles and Variables */
:root {
    /* Colors */
    --color-bg-primary: #0A0E17;
    --color-bg-secondary: #121824;
    --color-accent-primary: #00F0FF;
    --color-accent-secondary: #FF00AA;
    --color-text-primary: #FFFFFF;
    --color-text-secondary: #B8C1CF;
    --color-text-muted: #6D7A8C;
    --color-border: rgba(255, 255, 255, 0.1);
    --color-success: #00F0A0;
    --color-warning: #FFB800;
    --color-error: #FF3D71;
    
    /* Spacing (8px grid system) */
    --space-xs: 8px;
    --space-sm: 16px;
    --space-md: 24px;
    --space-lg: 32px;
    --space-xl: 48px;
    --space-xxl: 64px;
    
    /* Typography */
    --font-family-heading: 'Orbitron', sans-serif;
    --font-family-body: 'Roboto', sans-serif;
    --font-weight-light: 300;
    --font-weight-regular: 400;
    --font-weight-medium: 500;
    --font-weight-bold: 700;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-md: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.5rem;
    --font-size-xxl: 2rem;
    --font-size-xxxl: 3rem;
    
    /* Borders */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    --border-radius-xl: 24px;
    --border-radius-circle: 50%;
    
    /* Transitions */
    --transition-fast: 0.2s ease;
    --transition-medium: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Shadows */
    --shadow-small: 0 2px 8px rgba(0, 0, 0, 0.15);
    --shadow-medium: 0 4px 16px rgba(0, 0, 0, 0.2);
    --shadow-large: 0 8px 32px rgba(0, 0, 0, 0.25);
    
    /* Z-index layers */
    --z-background: -10;
    --z-normal: 1;
    --z-overlay: 10;
    --z-dropdown: 20;
    --z-modal: 30;
    --z-popover: 40;
    --z-tooltip: 50;
}

/* Reset & Global Styles */
*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

html {
    scroll-behavior: smooth;
    scroll-padding-top: 100px;
}

body {
    font-family: var(--font-family-body);
    font-weight: var(--font-weight-regular);
    color: var(--color-text-primary);
    background-color: var(--color-bg-primary);
    line-height: 1.5;
    overflow-x: hidden;
    cursor: none;
}

a {
    color: inherit;
    text-decoration: none;
}

ul, ol {
    list-style: none;
}

button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    outline: none;
    border: none;
    background: none;
}

img {
    max-width: 100%;
    height: auto;
    display: block;
}

h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    line-height: 1.2;
}

h1 {
    font-size: var(--font-size-xxxl);
    text-transform: uppercase;
}

h2 {
    font-size: var(--font-size-xxl);
    margin-bottom: var(--space-md);
}

h3 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--space-sm);
}

h4 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-xs);
}

p {
    margin-bottom: var(--space-md);
    color: var(--color-text-secondary);
}

/* Custom Cursor */
.cursor {
    width: 8px;
    height: 8px;
    background-color: var(--color-accent-primary);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: var(--z-tooltip);
    transition: transform 0.1s ease;
}

.cursor-follower {
    width: 40px;
    height: 40px;
    border: 1px solid var(--color-accent-primary);
    border-radius: 50%;
    position: fixed;
    pointer-events: none;
    transform: translate(-50%, -50%);
    z-index: var(--z-tooltip);
    transition: transform 0.15s ease, width 0.3s ease, height 0.3s ease, border 0.3s ease;
    opacity: 0.5;
}

/* Noise Overlay */
.noise-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC43IiBudW1PY3RhdmVzPSIzIiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+CiAgICA8ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwIi8+CiAgPC9maWx0ZXI+CiAgPHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuMDUiLz4KPC9zdmc+');
    pointer-events: none;
    z-index: var(--z-background);
    opacity: 0.035;
}

/* Header Styles */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) var(--space-xl);
    z-index: var(--z-dropdown);
    transition: background-color var(--transition-medium);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

header.scrolled {
    background-color: rgba(10, 14, 23, 0.9);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.logo {
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xl);
    position: relative;
    z-index: var(--z-dropdown);
}

.logo span {
    background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
}

.logo span::after {
    content: '';
    position: absolute;
    left: -5px;
    top: -5px;
    width: calc(100% + 10px);
    height: calc(100% + 10px);
    border: 1px solid var(--color-accent-primary);
    opacity: 0.3;
    border-radius: var(--border-radius-sm);
}

nav ul {
    display: flex;
    gap: var(--space-lg);
}

nav ul li a {
    position: relative;
    display: inline-block;
    padding: var(--space-xs) 0;
    font-weight: var(--font-weight-medium);
    transition: color var(--transition-fast);
}

nav ul li a::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
    transition: width var(--transition-medium);
}

nav ul li a:hover {
    color: var(--color-accent-primary);
}

nav ul li a:hover::after {
    width: 100%;
}

.cta-button a {
    display: inline-block;
    padding: var(--space-xs) var(--space-md);
    background: linear-gradient(45deg, var(--color-accent-primary), var(--color-accent-secondary));
    border-radius: var(--border-radius-md);
    font-weight: var(--font-weight-medium);
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: transform var(--transition-fast);
}

.cta-button a::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--color-accent-secondary), var(--color-accent-primary));
    z-index: -1;
    opacity: 0;
    transition: opacity var(--transition-fast);
}

.cta-button a:hover {
    transform: translateY(-2px);
}

.cta-button a:hover::before {
    opacity: 1;
}

.mobile-menu-toggle {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 20px;
    cursor: pointer;
    z-index: var(--z-dropdown);
}

.mobile-menu-toggle span {
    width: 100%;
    height: 2px;
    background-color: var(--color-text-primary);
    transition: all var(--transition-fast);
}

.mobile-menu {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    height: 100vh;
    background-color: var(--color-bg-primary);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: var(--z-modal);
    transition: right var(--transition-medium);
}

.mobile-menu.active {
    right: 0;
}

.mobile-menu ul {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
    text-align: center;
}

.mobile-menu ul li a {
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    display: inline-block;
    padding: var(--space-xs);
    transition: color var(--transition-fast);
}

.mobile-menu ul li a:hover {
    color: var(--color-accent-primary);
}

.mobile-menu-toggle.active span:nth-child(1) {
    transform: translateY(9px) rotate(45deg);
}

.mobile-menu-toggle.active span:nth-child(2) {
    opacity: 0;
}

.mobile-menu-toggle.active span:nth-child(3) {
    transform: translateY(-9px) rotate(-45deg);
}

/* Hero Section */
.hero-section {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    padding: 0 var(--space-xl);
}

.hero-content {
    width: 100%;
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    z-index: var(--z-normal);
    position: relative;
    margin: 0 auto;
    padding: 6rem 0;
    background: rgba(18, 24, 36, 0.55);
    border-radius: var(--border-radius-md);
    box-shadow: 0 8px 32px 0 rgba(0,0,0,0.18);
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    border: 1.5px solid rgba(0,240,255,0.10);
    transition: background 0.5s;
}

.hero-content h1 {
    margin-bottom: var(--space-md);
    position: relative;
    font-size: 4.5rem;
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--color-text-primary);
    text-shadow: 0.05em 0 0 rgba(255, 0, 170, 0.75),
                 -0.025em -0.05em 0 rgba(0, 240, 255, 0.75),
                 0.025em 0.05em 0 rgba(0, 240, 255, 0.75);
    animation: hero-fade-in-up 1.2s cubic-bezier(0.23, 1, 0.32, 1) both, glitch 2s infinite 1.2s;
}

.hero-content h1::before,
.hero-content h1::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.hero-content h1::before {
    left: 2px;
    text-shadow: -2px 0 var(--color-accent-secondary);
    animation: glitch-1 2s infinite linear alternate-reverse;
}

.hero-content h1::after {
    left: -2px;
    text-shadow: 2px 0 var(--color-accent-primary);
    animation: glitch-2 3s infinite linear alternate-reverse;
}

.hero-content p {
    font-size: var(--font-size-lg);
    max-width: 600px;
    margin-bottom: var(--space-lg);
    color: var(--color-text-secondary);
}

.hero-cta {
    display: flex;
    gap: var(--space-md);
    justify-content: center;
    width: 100%;
}

.primary-button {
    display: inline-block;
    padding: var(--space-sm) var(--space-lg);
    background: linear-gradient(45deg, var(--color-accent-primary), var(--color-accent-secondary));
    border-radius: var(--border-radius-md);
    font-weight: var(--font-weight-medium);
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: transform var(--transition-fast);
}

.primary-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--color-accent-secondary), var(--color-accent-primary));
    z-index: -1;
    opacity: 0;
    transition: opacity var(--transition-fast);
}

.primary-button:hover {
    transform: translateY(-2px);
}

.primary-button:hover::before {
    opacity: 1;
}

.secondary-button {
    display: inline-block;
    padding: var(--space-sm) var(--space-lg);
    background: transparent;
    border: 1px solid var(--color-accent-primary);
    border-radius: var(--border-radius-md);
    font-weight: var(--font-weight-medium);
    transition: all var(--transition-fast);
}

.secondary-button:hover {
    background-color: rgba(0, 240, 255, 0.1);
    transform: translateY(-2px);
}

.hero-3d-container {
    position: absolute;
    top: 0; left: 0; width: 100%; height: 100%;
    z-index: 0;
    pointer-events: none;
    overflow: hidden;
}
.hero-3d-container model-viewer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0; left: 0;
    z-index: 0;
    pointer-events: none;
    background: transparent !important;
}
#hero-drone {
    width: 100%;
    height: 100%;
    display: block;
}
.hero-content, .hero-overlay {
    position: relative;
    z-index: 1;
}

.hero-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 50%, rgba(10, 14, 23, 0.2), rgba(10, 14, 23, 0.8) 70%);
    z-index: var(--z-normal);
}

.scroll-indicator {
    position: absolute;
    bottom: var(--space-lg);
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    opacity: 0.7;
    transition: opacity var(--transition-fast);
}

.scroll-indicator:hover {
    opacity: 1;
}

.scroll-indicator span {
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-xs);
    text-transform: uppercase;
    letter-spacing: 2px;
}

.scroll-arrow {
    width: 30px;
    height: 30px;
    border-right: 2px solid var(--color-accent-primary);
    border-bottom: 2px solid var(--color-accent-primary);
    transform: rotate(45deg);
    animation: scrollArrow 2s infinite;
}

@keyframes scrollArrow {
    0% {
        transform: rotate(45deg) translate(0, 0);
        opacity: 0.4;
    }
    50% {
        transform: rotate(45deg) translate(10px, 10px);
        opacity: 0.8;
    }
    100% {
        transform: rotate(45deg) translate(0, 0);
        opacity: 0.4;
    }
}

/* Glitch Effect */
.glitch {
    position: relative;
    text-shadow: 0.05em 0 0 rgba(255, 0, 170, 0.75),
                -0.025em -0.05em 0 rgba(0, 240, 255, 0.75),
                0.025em 0.05em 0 rgba(0, 240, 255, 0.75);
    animation: glitch 2s infinite;
}

.glitch::before,
.glitch::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.glitch::before {
    left: 2px;
    text-shadow: -2px 0 var(--color-accent-secondary);
    animation: glitch-1 2s infinite linear alternate-reverse;
}

.glitch::after {
    left: -2px;
    text-shadow: 2px 0 var(--color-accent-primary);
    animation: glitch-2 3s infinite linear alternate-reverse;
}

@keyframes glitch {
    0% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 170, 0.75),
                    -0.025em -0.05em 0 rgba(0, 240, 255, 0.75),
                    0.025em 0.05em 0 rgba(0, 240, 255, 0.75);
    }
    14% {
        text-shadow: 0.05em 0 0 rgba(255, 0, 170, 0.75),
                    -0.025em -0.05em 0 rgba(0, 240, 255, 0.75),
                    0.025em 0.05em 0 rgba(0, 240, 255, 0.75);
    }
    15% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 170, 0.75),
                    0.025em 0.025em 0 rgba(0, 240, 255, 0.75),
                    -0.05em -0.05em 0 rgba(0, 240, 255, 0.75);
    }
    49% {
        text-shadow: -0.05em -0.025em 0 rgba(255, 0, 170, 0.75),
                    0.025em 0.025em 0 rgba(0, 240, 255, 0.75),
                    -0.05em -0.05em 0 rgba(0, 240, 255, 0.75);
    }
    50% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 170, 0.75),
                    0.05em 0 0 rgba(0, 240, 255, 0.75),
                    0 -0.05em 0 rgba(0, 240, 255, 0.75);
    }
    99% {
        text-shadow: 0.025em 0.05em 0 rgba(255, 0, 170, 0.75),
                    0.05em 0 0 rgba(0, 240, 255, 0.75),
                    0 -0.05em 0 rgba(0, 240, 255, 0.75);
    }
    100% {
        text-shadow: -0.025em 0 0 rgba(255, 0, 170, 0.75),
                    -0.025em -0.025em 0 rgba(0, 240, 255, 0.75),
                    -0.025em -0.05em 0 rgba(0, 240, 255, 0.75);
    }
}

@keyframes glitch-1 {
    0% {
        clip-path: inset(20% 0 36% 0);
    }
    20% {
        clip-path: inset(33% 0 33% 0);
    }
    40% {
        clip-path: inset(3% 0 69% 0);
    }
    60% {
        clip-path: inset(18% 0 71% 0);
    }
    80% {
        clip-path: inset(54% 0 8% 0);
    }
    100% {
        clip-path: inset(67% 0 27% 0);
    }
}

@keyframes glitch-2 {
    0% {
        clip-path: inset(63% 0 1% 0);
    }
    20% {
        clip-path: inset(13% 0 55% 0);
    }
    40% {
        clip-path: inset(37% 0 21% 0);
    }
    60% {
        clip-path: inset(28% 0 69% 0);
    }
    80% {
        clip-path: inset(21% 0 21% 0);
    }
    100% {
        clip-path: inset(35% 0 35% 0);
    }
}

@keyframes hero-fade-in-up {
    0% {
        opacity: 0;
        transform: translateY(40px) scale(0.98);
    }
    80% {
        opacity: 1;
        transform: translateY(-6px) scale(1.03);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Section Common Styles */
section {
    padding: var(--space-xxl) var(--space-xl);
    position: relative;
}

.section-header {
    text-align: center;
    margin-bottom: var(--space-xl);
}

.section-header.left-aligned {
    text-align: left;
}

.section-header h2 {
    margin-bottom: var(--space-xs);
}

.section-header p {
    font-size: var(--font-size-lg);
    max-width: 600px;
    margin: 0 auto;
}

.section-header.left-aligned p {
    margin: 0;
}

.highlight {
    color: var(--color-accent-primary);
    position: relative;
}

.highlight::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, var(--color-accent-primary), transparent);
}

/* Products Section */
.products-section {
    background-color: var(--color-bg-secondary);
    overflow: hidden;
    position: relative;
}

.products-section::before {
    content: '';
    position: absolute;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, var(--color-accent-primary) 0%, transparent 70%);
    opacity: 0.1;
    top: -250px;
    right: -250px;
    border-radius: 50%;
    filter: blur(50px);
    z-index: var(--z-background);
}

.product-showcase {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xl);
    justify-content: center;
}

.product-card {
    width: calc(33.333% - var(--space-xl));
    min-width: 280px;
    background: rgba(18, 24, 36, 0.7);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid var(--color-border);
    transition: transform var(--transition-medium), box-shadow var(--transition-medium);
    cursor: pointer;
    position: relative;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.product-visual {
    height: 240px;
    position: relative;
    overflow: hidden;
    background: linear-gradient(to bottom, var(--color-bg-secondary), rgba(10, 14, 23, 0.3));
}

.product-3d-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.product-shadow {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 20px;
    background: radial-gradient(ellipse at center, rgba(0, 240, 255, 0.3) 0%, transparent 70%);
    filter: blur(10px);
    border-radius: 50%;
}

.product-info {
    padding: var(--space-md);
}

.product-info h3 {
    font-size: var(--font-size-lg);
    margin-bottom: var(--space-xs);
    color: var(--color-accent-primary);
}

.product-info p {
    font-size: var(--font-size-md);
    margin-bottom: var(--space-md);
    color: var(--color-text-secondary);
}

.product-specs {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xs);
    margin-bottom: var(--space-md);
}

.product-specs li {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
}

.product-specs li span {
    color: var(--color-text-muted);
    margin-right: var(--space-xs);
}

.tech-button {
    display: inline-block;
    padding: var(--space-xs) var(--space-md);
    background: transparent;
    border: 1px solid var(--color-accent-primary);
    border-radius: var(--border-radius-md);
    color: var(--color-accent-primary);
    font-size: var(--font-size-sm);
    font-weight: var(--font-weight-medium);
    transition: background-color var(--transition-fast);
}

.tech-button:hover {
    background-color: rgba(0, 240, 255, 0.1);
}

/* Features Section */
.features-section {
    background-color: var(--color-bg-primary);
    position: relative;
    overflow: hidden;
}

.features-section::after {
    content: '';
    position: absolute;
    bottom: -300px;
    left: -300px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, var(--color-accent-secondary) 0%, transparent 70%);
    opacity: 0.1;
    border-radius: 50%;
    filter: blur(50px);
    z-index: var(--z-background);
}

.features-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: var(--space-lg);
}

.feature-card {
    background: rgba(18, 24, 36, 0.5);
    border-radius: var(--border-radius-lg);
    padding: var(--space-lg);
    border: 1px solid var(--color-border);
    transition: transform var(--transition-medium), box-shadow var(--transition-medium);
    position: relative;
    overflow: hidden;
}

.feature-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, transparent, rgba(0, 240, 255, 0.05), transparent);
    transform: translateX(-100%);
    transition: transform 0.8s ease;
}

.feature-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.feature-card:hover::before {
    transform: translateX(100%);
}

.feature-icon {
    width: 60px;
    height: 60px;
    background: rgba(0, 240, 255, 0.1);
    border-radius: var(--border-radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--space-md);
}

.feature-icon svg {
    width: 30px;
    height: 30px;
    color: var(--color-accent-primary);
}

.feature-card h3 {
    margin-bottom: var(--space-sm);
}

.feature-card p {
    color: var(--color-text-secondary);
    margin-bottom: 0;
}

/* About Section */
.about-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
    align-items: center;
    background-color: var(--color-bg-secondary);
    position: relative;
    overflow: hidden;
}

.about-content {
    padding-right: var(--space-lg);
}

.about-text {
    margin-bottom: var(--space-lg);
}

.stat-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-md);
}

.stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.stat-number {
    font-family: var(--font-family-heading);
    font-size: var(--font-size-xl);
    font-weight: var(--font-weight-bold);
    color: var(--color-accent-primary);
    margin-bottom: var(--space-xs);
}

.stat-label {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
}

.about-visual {
    position: relative;
    height: 100%;
    min-height: 400px;
}

.tech-circle {
    position: absolute;
    width: 300px;
    height: 300px;
    border: 1px solid var(--color-accent-primary);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: rotate 20s linear infinite;
}

.tech-circle::before,
.tech-circle::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
}

.tech-circle::before {
    width: 95%;
    height: 95%;
    border: 1px dashed rgba(0, 240, 255, 0.2);
    animation: rotate-reverse 15s linear infinite;
}

.tech-circle::after {
    width: 90%;
    height: 90%;
    border: 1px dotted rgba(0, 240, 255, 0.1);
    animation: rotate 25s linear infinite;
}

@keyframes rotate {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(360deg);
    }
}

@keyframes rotate-reverse {
    0% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(-360deg);
    }
}

.about-image-container {
    position: absolute;
    width: 80%;
    height: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    box-shadow: var(--shadow-large);
}

.about-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform var(--transition-medium);
}

.about-image-container:hover .about-image {
    transform: scale(1.05);
}

/* Contact Section */
.contact-section {
    background-color: var(--color-bg-primary);
    position: relative;
    overflow: hidden;
}

.contact-section::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 400px;
    height: 400px;
    background: radial-gradient(circle, var(--color-accent-primary) 0%, transparent 70%);
    opacity: 0.1;
    border-radius: 50%;
    filter: blur(50px);
    z-index: var(--z-background);
}

.contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-xl);
    margin-top: var(--space-lg);
}

.contact-form {
    background: rgba(18, 24, 36, 0.5);
    border-radius: var(--border-radius-lg);
    padding: var(--space-lg);
    border: 1px solid var(--color-border);
}

.form-group {
    margin-bottom: var(--space-md);
}

.form-group label {
    display: block;
    margin-bottom: var(--space-xs);
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
}

.form-group input,
.form-group select,
.form-group textarea {
    width: 100%;
    padding: var(--space-sm);
    background: rgba(10, 14, 23, 0.5);
    border: 1px solid var(--color-border);
    border-radius: var(--border-radius-md);
    color: var(--color-text-primary);
    transition: border-color var(--transition-fast);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    border-color: var(--color-accent-primary);
}

.submit-button {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-lg);
    background: linear-gradient(45deg, var(--color-accent-primary), var(--color-accent-secondary));
    border-radius: var(--border-radius-md);
    font-weight: var(--font-weight-medium);
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: transform var(--transition-fast);
    cursor: pointer;
}

.submit-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, var(--color-accent-secondary), var(--color-accent-primary));
    z-index: -1;
    opacity: 0;
    transition: opacity var(--transition-fast);
}

.submit-button:hover {
    transform: translateY(-2px);
}

.submit-button:hover::before {
    opacity: 1;
}

.submit-button svg {
    width: 20px;
    height: 20px;
    transition: transform var(--transition-fast);
}

.submit-button:hover svg {
    transform: translateX(4px);
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.info-item {
    display: flex;
    gap: var(--space-md);
    align-items: flex-start;
}

.info-icon {
    width: 48px;
    height: 48px;
    background: rgba(0, 240, 255, 0.1);
    border-radius: var(--border-radius-circle);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
}

.info-icon svg {
    width: 24px;
    height: 24px;
    color: var(--color-accent-primary);
}

.info-item h4 {
    margin-bottom: var(--space-xs);
    color: var(--color-text-primary);
}

.info-item p {
    margin-bottom: var(--space-xs);
    color: var(--color-text-secondary);
}

/* Footer Styles */
footer {
    background-color: var(--color-bg-secondary);
    padding: var(--space-xl) var(--space-xl) var(--space-lg);
    position: relative;
    overflow: hidden;
}

footer::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, var(--color-accent-primary), transparent);
}

.footer-top {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    gap: var(--space-xl);
    margin-bottom: var(--space-xl);
}

.footer-logo {
    font-family: var(--font-family-heading);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-xl);
}

.footer-logo span {
    background: linear-gradient(90deg, var(--color-accent-primary), var(--color-accent-secondary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.footer-logo p {
    font-size: var(--font-size-sm);
    margin-top: var(--space-xs);
    font-family: var(--font-family-body);
    color: var(--color-text-secondary);
}

.footer-links {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: var(--space-lg);
}

.footer-column h4 {
    margin-bottom: var(--space-md);
    color: var(--color-text-primary);
}

.footer-column ul {
    display: flex;
    flex-direction: column;
    gap: var(--space-xs);
}

.footer-column ul li a {
    font-size: var(--font-size-sm);
    color: var(--color-text-secondary);
    transition: color var(--transition-fast);
}

.footer-column ul li a:hover {
    color: var(--color-accent-primary);
}

.footer-newsletter h4 {
    margin-bottom: var(--space-xs);
    color: var(--color-text-primary);
}

.footer-newsletter p {
    font-size: var(--font-size-sm);
    margin-bottom: var(--space-md);
    color: var(--color-text-secondary);
}

.newsletter-form {
    display: flex;
    overflow: hidden;
    border-radius: var(--border-radius-md);
    border: 1px solid var(--color-border);
}

.newsletter-form input {
    flex: 1;
    padding: var(--space-sm);
    background: rgba(10, 14, 23, 0.5);
    color: var(--color-text-primary);
    border: none;
}

.newsletter-form button {
    padding: var(--space-sm);
    background: var(--color-accent-primary);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background-color var(--transition-fast);
}

.newsletter-form button svg {
    width: 20px;
    height: 20px;
    color: var(--color-bg-primary);
}

.newsletter-form button:hover {
    background-color: var(--color-accent-secondary);
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: var(--space-lg);
    border-top: 1px solid var(--color-border);
}

.copyright p {
    font-size: var(--font-size-sm);
    color: var(--color-text-muted);
    margin-bottom: 0;
}

.social-links {
    display: flex;
    gap: var(--space-md);
}

.social-link {
    width: 40px;
    height: 40px;
    border-radius: var(--border-radius-circle);
    background: rgba(0, 240, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all var(--transition-fast);
}

.social-link svg {
    width: 20px;
    height: 20px;
    color: var(--color-accent-primary);
    transition: color var(--transition-fast);
}

.social-link:hover {
    background-color: var(--color-accent-primary);
}

.social-link:hover svg {
    color: var(--color-bg-primary);
}

/* Modal */
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(10, 14, 23, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: var(--z-modal);
    opacity: 0;
    visibility: hidden;
    transition: opacity var(--transition-medium), visibility var(--transition-medium);
}

.modal.active {
    opacity: 1;
    visibility: visible;
}

.modal-content {
    width: 90%;
    max-width: 800px;
    background-color: var(--color-bg-secondary);
    border-radius: var(--border-radius-lg);
    overflow: hidden;
    transform: scale(0.9);
    transition: transform var(--transition-medium);
    border: 1px solid var(--color-border);
}

.modal.active .modal-content {
    transform: scale(1);
}

.modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-md) var(--space-lg);
    border-bottom: 1px solid var(--color-border);
}

.modal-header h3 {
    margin-bottom: 0;
    color: var(--color-accent-primary);
}

.modal-close {
    font-size: var(--font-size-xl);
    color: var(--color-text-secondary);
    cursor: pointer;
    transition: color var(--transition-fast);
}

.modal-close:hover {
    color: var(--color-accent-primary);
}

.modal-body {
    padding: var(--space-lg);
}

.video-container {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    overflow: hidden;
    border-radius: var(--border-radius-md);
}

.video-placeholder {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.play-button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background: rgba(0, 240, 255, 0.3);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all var(--transition-fast);
}

.play-button svg {
    width: 30px;
    height: 30px;
    color: var(--color-text-primary);
    margin-left: 5px;
}

.play-button:hover {
    background: var(--color-accent-primary);
    transform: translate(-50%, -50%) scale(1.1);
}

/* Responsive Styles */
@media (max-width: 1200px) {
    .hero-content {
        width: 60%;
    }
    
    .hero-3d-container {
        width: 50%;
    }
    
    .product-card {
        width: calc(50% - var(--space-lg));
    }
}

@media (max-width: 992px) {
    :root {
        --font-size-xxxl: 2.5rem;
        --font-size-xxl: 1.8rem;
    }
    
    header {
        padding: var(--space-md) var(--space-md);
    }
    
    nav {
        display: none;
    }
    
    .cta-button {
        display: none;
    }
    
    .mobile-menu-toggle {
        display: flex;
    }
    
    .hero-content {
        padding: 3rem 0.5rem;
        max-width: 100vw;
    }
    
    .hero-content h1 {
        font-size: 2.5rem;
    }
    
    .hero-content p {
        font-size: var(--font-size-md);
    }
    
    .hero-3d-container {
        width: 100%;
        opacity: 0.3;
    }
    
    .about-section {
        grid-template-columns: 1fr;
    }
    
    .about-visual {
        order: -1;
        margin-bottom: var(--space-lg);
    }
    
    .contact-container {
        grid-template-columns: 1fr;
    }
    
    .footer-top {
        grid-template-columns: 1fr;
        gap: var(--space-lg);
    }
    
    .footer-links {
        grid-template-columns: 1fr 1fr;
    }
    
    .footer-bottom {
        flex-direction: column;
        gap: var(--space-md);
    }
}

@media (max-width: 768px) {
    :root {
        --font-size-xxxl: 2rem;
        --font-size-xxl: 1.5rem;
        --space-xl: 32px;
        --space-xxl: 48px;
    }
    
    section {
        padding: var(--space-xl) var(--space-md);
    }
    
    .hero-section {
        padding: 0 var(--space-md);
    }
    
    .product-card {
        width: 100%;
    }
    
    .features-grid {
        grid-template-columns: 1fr;
    }
    
    .stat-grid {
        grid-template-columns: 1fr;
        gap: var(--space-md);
    }
    
    .footer-links {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 480px) {
    :root {
        --font-size-xxxl: 1.8rem;
        --font-size-xxl: 1.4rem;
        --space-lg: 24px;
        --space-xl: 32px;
    }
    
    .hero-cta {
        flex-direction: column;
        width: 100%;
    }
    
    .primary-button,
    .secondary-button {
        width: 100%;
        text-align: center;
    }
}
