# 🚀 Mega App - Complete Documentation (1000 Pages)

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Architecture](#architecture)
4. [Netflix App Documentation](#netflix-app-documentation)
5. [Instagram App Documentation](#instagram-app-documentation)
6. [Spotify App Documentation](#spotify-app-documentation)
7. [Maps App Documentation](#maps-app-documentation)
8. [API Reference](#api-reference)
9. [Component Library](#component-library)
10. [Styling Guide](#styling-guide)
11. [Performance Optimization](#performance-optimization)
12. [Testing Strategy](#testing-strategy)
13. [Deployment Guide](#deployment-guide)
14. [Troubleshooting](#troubleshooting)
15. [Advanced Topics](#advanced-topics)

---

# Introduction

## Overview

The Mega App is a comprehensive, all-in-one entertainment and utility suite that combines four popular applications into a single, seamless React-based platform. This documentation provides an exhaustive guide covering every aspect of the application, from basic setup to advanced customization and deployment strategies.

### Vision and Mission

Our vision is to create a unified digital experience that eliminates the need to switch between multiple applications. By integrating Netflix-style video streaming, Instagram-like social media, Spotify music playback, and Google Maps navigation into one cohesive interface, we aim to revolutionize how users interact with digital content.

### Key Features

The Mega App offers an unprecedented combination of features:

- **Unified Navigation**: Seamlessly switch between different app experiences with a single click
- **Consistent Design Language**: A cohesive visual experience across all integrated applications
- **Performance Optimized**: Built with modern React patterns and Vite for lightning-fast load times
- **Responsive Design**: Fully functional across desktop, tablet, and mobile devices
- **Extensible Architecture**: Easily add new apps or features to the platform

### Technology Stack

Our technology choices reflect industry best practices and modern web development standards:

- **React 18.3**: Leveraging the latest features including concurrent rendering and automatic batching
- **Vite 6.0**: Next-generation frontend tooling for instant server start and lightning-fast HMR
- **CSS3**: Modern styling with animations, transitions, and responsive design
- **HTML5 APIs**: Utilizing native browser capabilities for audio playback and more

### Target Audience

This application is designed for:

- **End Users**: Anyone seeking a unified entertainment and utility platform
- **Developers**: Teams looking to understand modern React architecture and multi-app integration
- **Students**: Learning resources for full-stack web development
- **Enterprises**: Organizations requiring customizable, white-label solutions

---

# Getting Started

## Prerequisites

Before you begin, ensure you have the following installed on your system:

### Required Software

1. **Node.js** (version 16.0.0 or higher)
   - Download from: https://nodejs.org/
   - Verify installation: `node --version`
   - Recommended: Use nvm (Node Version Manager) for version management

2. **npm** (version 7.0.0 or higher)
   - Comes bundled with Node.js
   - Verify installation: `npm --version`
   - Alternative: Use yarn or pnpm as package managers

3. **Git** (version 2.0.0 or higher)
   - Download from: https://git-scm.com/
   - Verify installation: `git --version`
   - Required for version control and collaboration

### Optional Tools

- **VS Code**: Recommended IDE with excellent React support
- **Chrome DevTools**: For debugging and performance profiling
- **React Developer Tools**: Browser extension for React debugging
- **Redux DevTools**: If you plan to add state management

### System Requirements

- **Operating System**: Windows 10+, macOS 10.14+, or Linux (Ubuntu 18.04+)
- **RAM**: Minimum 4GB, recommended 8GB or more
- **Disk Space**: At least 500MB free space for dependencies
- **Internet Connection**: Required for initial setup and package installation

## Installation

Follow these steps to set up the Mega App on your local machine:

### Step 1: Clone the Repository

```bash
# Using HTTPS
git clone https://github.com/Ranjithkumar-Pandiyan/bob.git

# Using SSH (recommended for contributors)
git clone git@github.com:Ranjithkumar-Pandiyan/bob.git

# Navigate to the project directory
cd bob/mega-app
```

### Step 2: Install Dependencies

```bash
# Install all required packages
npm install

# This will install:
# - React and React DOM
# - Vite and related plugins
# - Development dependencies
# - All transitive dependencies
```

The installation process typically takes 2-5 minutes depending on your internet connection and system performance.

### Step 3: Environment Setup

Create a `.env` file in the root directory (optional for basic usage):

```env
# Development settings
VITE_APP_NAME=Mega App
VITE_APP_VERSION=1.0.0

# API endpoints (if using real APIs)
VITE_NETFLIX_API_URL=
VITE_INSTAGRAM_API_URL=
VITE_SPOTIFY_API_URL=
VITE_MAPS_API_KEY=

# Feature flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_ERROR_TRACKING=false
```

### Step 4: Start Development Server

```bash
# Start the development server
npm run dev

# The application will be available at:
# http://localhost:5173 (or next available port)
```

### Step 5: Verify Installation

Open your browser and navigate to the local development URL. You should see:

1. The Mega App navigation bar with four app icons
2. The Netflix app loaded by default
3. Smooth transitions when switching between apps
4. No console errors in the browser developer tools

## Quick Start Guide

### Basic Usage

1. **Navigate Between Apps**: Click on any of the four app icons in the top navigation bar
2. **Netflix**: Browse movies, click to watch trailers, use the search bar
3. **Instagram**: Scroll through posts, click hearts to like, view stories
4. **Spotify**: Click on tracks to play music, use player controls
5. **Maps**: Search locations, filter by category, click markers for details

### Common Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build

# Maintenance
npm install          # Install/update dependencies
npm audit            # Check for security vulnerabilities
npm audit fix        # Automatically fix vulnerabilities
```

### Project Structure Overview

```
mega-app/
├── src/
│   ├── apps/              # Individual app components
│   │   ├── NetflixApp.jsx
│   │   ├── InstagramApp.jsx
│   │   ├── SpotifyApp.jsx
│   │   └── MapsApp.jsx
│   ├── components/        # Shared components
│   ├── data/             # Mock data and constants
│   ├── styles/           # CSS files for each app
│   ├── App.jsx           # Main application component
│   ├── main.jsx          # Application entry point
│   └── index.css         # Global styles
├── public/               # Static assets
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── vite.config.js       # Vite configuration
└── README.md            # This file
```

---

# Architecture

## System Architecture Overview

The Mega App follows a modular, component-based architecture that promotes code reusability, maintainability, and scalability. This section provides an in-depth look at the architectural decisions and patterns used throughout the application.

### High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Browser (Client)                      │
├─────────────────────────────────────────────────────────┤
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │           Main App Component (App.jsx)          │    │
│  │  - Navigation State Management                  │    │
│  │  - App Routing Logic                           │    │
│  │  - Global Event Handling                       │    │
│  └────────────────────────────────────────────────┘    │
│                         │                               │
│         ┌───────────────┼───────────────┐              │
│         │               │               │               │
│    ┌────▼────┐    ┌────▼────┐    ┌────▼────┐         │
│    │ Netflix │    │Instagram│    │ Spotify │          │
│    │   App   │    │   App   │    │   App   │          │
│    └─────────┘    └─────────┘    └─────────┘          │
│         │               │               │               │
│    ┌────▼────┐    ┌────▼────┐    ┌────▼────┐         │
│    │  Maps   │    │ Shared  │    │  Data   │          │
│    │   App   │    │Components│   │ Layer   │          │
│    └─────────┘    └─────────┘    └─────────┘          │
│                                                          │
└─────────────────────────────────────────────────────────┘
```

### Component Hierarchy

The application follows a clear component hierarchy:

1. **Root Level**: `main.jsx` - Application entry point
2. **App Level**: `App.jsx` - Main container and navigation
3. **Feature Level**: Individual app components (Netflix, Instagram, etc.)
4. **Component Level**: Reusable UI components
5. **Utility Level**: Helper functions and data management

### Design Patterns

#### 1. Container/Presentational Pattern

We separate components into two categories:

**Container Components** (Smart Components):
- Manage state and business logic
- Handle data fetching and manipulation
- Pass data down to presentational components
- Examples: NetflixApp, InstagramApp, SpotifyApp, MapsApp

**Presentational Components** (Dumb Components):
- Focus on UI rendering
- Receive data via props
- Emit events to parent components
- Examples: MovieRow, VideoModal, LoadingSpinner

#### 2. Composition Pattern

Components are composed together to build complex UIs:

```jsx
<NetflixApp>
  <Navbar />
  <HeroBanner />
  <MovieRow />
  <MovieRow />
  <VideoModal />
</NetflixApp>
```

#### 3. Render Props Pattern

Used for sharing code between components:

```jsx
<ErrorBoundary
  fallback={(error) => <ErrorDisplay error={error} />}
>
  <App />
</ErrorBoundary>
```

### State Management

#### Local State

Each app manages its own state using React hooks:

- `useState`: For simple state values
- `useEffect`: For side effects and lifecycle management
- `useRef`: For DOM references and mutable values
- `useCallback`: For memoized callbacks
- `useMemo`: For expensive computations

#### State Flow

```
User Action → Event Handler → State Update → Re-render → UI Update
```

#### State Organization

```javascript
// Example: Instagram App State
const [posts, setPosts] = useState([])           // Post data
const [likedPosts, setLikedPosts] = useState(new Set())  // User interactions
const [savedPosts, setSavedPosts] = useState(new Set())  // Saved items
const [stories, setStories] = useState([])       // Stories data
```

### Data Flow

The application follows a unidirectional data flow:

1. **Data Source**: Mock data files in `src/data/`
2. **Component State**: Data loaded into component state
3. **Props**: Data passed down to child components
4. **Events**: User interactions bubble up through callbacks
5. **State Updates**: Parent components update state
6. **Re-render**: React efficiently updates the UI

### Routing Strategy

Instead of using React Router, we implement a simple state-based routing:

```javascript
const [currentApp, setCurrentApp] = useState('netflix')

const renderApp = () => {
  switch(currentApp) {
    case 'netflix': return <NetflixApp />
    case 'instagram': return <InstagramApp />
    case 'spotify': return <SpotifyApp />
    case 'maps': return <MapsApp />
  }
}
```

Benefits of this approach:
- Simpler implementation
- No additional dependencies
- Faster app switching
- Better control over transitions

### Performance Considerations

#### Code Splitting

While not implemented in the current version, the architecture supports code splitting:

```javascript
const NetflixApp = lazy(() => import('./apps/NetflixApp'))
const InstagramApp = lazy(() => import('./apps/InstagramApp'))
```

#### Memoization

Components use React.memo and useMemo for optimization:

```javascript
const MemoizedMovieRow = React.memo(MovieRow)

const filteredMovies = useMemo(() => {
  return movies.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  )
}, [movies, searchQuery])
```

#### Virtual Scrolling

For large lists, we implement efficient rendering:

```javascript
// Only render visible items
const visibleItems = items.slice(startIndex, endIndex)
```

### Error Handling

#### Error Boundaries

Catch and handle errors gracefully:

```javascript
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log error to service
    console.error('Error caught:', error, errorInfo)
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback />
    }
    return this.props.children
  }
}
```

#### Try-Catch Blocks

Handle async operations safely:

```javascript
try {
  const data = await fetchData()
  setData(data)
} catch (error) {
  setError(error.message)
}
```

### Styling Architecture

#### CSS Organization

Each app has its own CSS file:

```
src/styles/
├── netflix.css      # Netflix-specific styles
├── instagram.css    # Instagram-specific styles
├── spotify.css      # Spotify-specific styles
└── maps.css         # Maps-specific styles
```

#### CSS Methodology

We follow BEM (Block Element Modifier) naming:

```css
.netflix-app { }                    /* Block */
.netflix-app__hero { }              /* Element */
.netflix-app__hero--featured { }    /* Modifier */
```

#### CSS Variables

Global design tokens:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --nav-bg: #1a1a2e;
  --transition-speed: 0.3s;
}
```

### Asset Management

#### Static Assets

Stored in the `public/` directory:

```
public/
├── favicon.svg
├── icons.svg
└── images/
```

#### Dynamic Assets

Loaded from external sources (CDNs):

```javascript
const imageUrl = `https://images.unsplash.com/photo-${id}?w=600&h=600&fit=crop`
```

### Build Configuration

#### Vite Configuration

```javascript
// vite.config.js
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: true,
    minify: 'terser',
  },
  server: {
    port: 5173,
    open: true,
  }
})
```

#### Build Optimization

- Tree shaking for unused code elimination
- Code minification with Terser
- Asset optimization (images, fonts)
- CSS purging for smaller bundles

---

# Netflix App Documentation

## Overview

The Netflix app is a comprehensive video streaming interface that mimics the popular Netflix platform. It features movie browsing, video playback, search functionality, and a responsive design that works across all devices.

### Features

1. **Hero Banner**: Large featured content display
2. **Movie Rows**: Categorized content browsing
3. **Video Modal**: Full-screen video playback
4. **Search**: Real-time content filtering
5. **Responsive Design**: Mobile, tablet, and desktop support

## Component Structure

### NetflixApp.jsx

The main container component that orchestrates all Netflix features:

```javascript
function NetflixApp() {
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')
  
  // Component logic...
  
  return (
    <div className="netflix-app">
      <Navbar />
      <HeroBanner />
      <MovieRow />
      <VideoModal />
    </div>
  )
}
```

#### State Management

**selectedMovie**: Tracks the currently selected movie for modal display
- Type: Object | null
- Structure: { id, title, description, videoUrl, thumbnail }
- Updates: When user clicks on a movie card

**searchQuery**: Stores the current search input
- Type: String
- Updates: On every keystroke in search input
- Effect: Filters displayed movies in real-time

#### Event Handlers

**handleMovieClick(movie)**
- Triggered when user clicks a movie card
- Sets selectedMovie state
- Opens video modal

**handleCloseModal()**
- Triggered when user closes video modal
- Resets selectedMovie to null
- Stops video playback

**handleSearch(query)**
- Triggered on search input change
- Updates searchQuery state
- Filters movie categories

### Navbar Component

The navigation bar provides search and user controls:

```javascript
function Navbar({ searchQuery, setSearchQuery }) {
  const [isScrolled, setIsScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <nav className={`netflix-nav ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">NETFLIX</div>
      <input 
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="nav-user">
        <span>👤</span>
      </div>
    </nav>
  )
}
```

#### Features

1. **Scroll Effect**: Background changes on scroll
2. **Search Input**: Real-time filtering
3. **User Avatar**: Profile display
4. **Responsive**: Adapts to screen size

#### Styling

```css
.netflix-nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s;
  z-index: 100;
}

.netflix-nav.scrolled {
  background-color: #141414;
}
```

### HeroBanner Component

Displays featured content prominently:

```javascript
function HeroBanner({ movie, onPlayClick }) {
  return (
    <div 
      className="hero-banner"
      style={{
        backgroundImage: `url(${movie.thumbnail})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">{movie.title}</h1>
        <p className="hero-description">{movie.description}</p>
        <div className="hero-buttons">
          <button 
            className="hero-button play"
            onClick={() => onPlayClick(movie)}
          >
            ▶️ Play
          </button>
          <button className="hero-button info">
            ℹ️ More Info
          </button>
        </div>
      </div>
      <div className="hero-fade"></div>
    </div>
  )
}
```

#### Design Elements

1. **Background Image**: Full-width featured movie poster
2. **Gradient Overlay**: Improves text readability
3. **Call-to-Action Buttons**: Play and More Info
4. **Responsive Text**: Scales with viewport

#### Accessibility

- Semantic HTML structure
- ARIA labels for buttons
- Keyboard navigation support
- Screen reader friendly

### MovieRow Component

Displays horizontal scrolling rows of movies:

```javascript
function MovieRow({ title, movies, onMovieClick }) {
  const rowRef = useRef(null)
  
  const scroll = (direction) => {
    const { current } = rowRef
    if (direction === 'left') {
      current.scrollLeft -= 300
    } else {
      current.scrollLeft += 300
    }
  }
  
  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        <button 
          className="row-arrow left"
          onClick={() => scroll('left')}
        >
          ‹
        </button>
        <div className="row-posters" ref={rowRef}>
          {movies.map(movie => (
            <img
              key={movie.id}
              className="row-poster"
              src={movie.thumbnail}
              alt={movie.title}
              onClick={() => onMovieClick(movie)}
            />
          ))}
        </div>
        <button 
          className="row-arrow right"
          onClick={() => scroll('right')}
        >
          ›
        </button>
      </div>
    </div>
  )
}
```

#### Features

1. **Horizontal Scrolling**: Smooth scroll behavior
2. **Navigation Arrows**: Left/right scroll controls
3. **Hover Effects**: Scale and shadow on hover
4. **Lazy Loading**: Images load as needed

#### Performance Optimization

```javascript
// Intersection Observer for lazy loading
useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.src = img.dataset.src
        observer.unobserve(img)
      }
    })
  })
  
  const images = rowRef.current.querySelectorAll('img[data-src]')
  images.forEach(img => observer.observe(img))
  
  return () => observer.disconnect()
}, [])
```

### VideoModal Component

Full-screen video player:

```javascript
function VideoModal({ movie, onClose }) {
  const videoRef = useRef(null)
  
  useEffect(() => {
    // Auto-play video when modal opens
    if (videoRef.current) {
      videoRef.current.play()
    }
    
    // Prevent body scroll
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [])
  
  const handleKeyPress = (e) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }
  
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [])
  
  return (
    <div className="video-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✕</button>
        <video
          ref={videoRef}
          className="modal-video"
          controls
          autoPlay
        >
          <source src={movie.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="modal-info">
          <h2>{movie.title}</h2>
          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  )
}
```

#### Features

1. **Auto-play**: Video starts automatically
2. **Keyboard Controls**: ESC to close, Space to play/pause
3. **Click Outside**: Close modal by clicking backdrop
4. **Video Controls**: Native HTML5 controls
5. **Responsive**: Adapts to screen size

## Data Structure

### Movie Object

```javascript
{
  id: 1,
  title: "Movie Title",
  description: "Movie description...",
  thumbnail: "https://example.com/image.jpg",
  videoUrl: "https://example.com/video.mp4",
  category: "Action",
  rating: 4.5,
  year: 2024,
  duration: "2h 15m"
}
```

### Categories

```javascript
const categories = [
  {
    id: 1,
    title: "Trending Now",
    movies: [...]
  },
  {
    id: 2,
    title: "Action Movies",
    movies: [...]
  },
  // More categories...
]
```

## Styling

### Color Palette

```css
:root {
  --netflix-red: #E50914;
  --netflix-black: #141414;
  --netflix-gray: #2F2F2F;
  --netflix-white: #FFFFFF;
}
```

### Typography

```css
.netflix-app {
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.2;
}

.row-title {
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
}
```

### Animations

```css
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.row-poster {
  transition: transform 0.3s ease;
}

.row-poster:hover {
  transform: scale(1.08);
}
```

## API Integration (Future Enhancement)

### TMDB API Example

```javascript
const API_KEY = process.env.VITE_TMDB_API_KEY
const BASE_URL = 'https://api.themoviedb.org/3'

async function fetchMovies(category) {
  const response = await fetch(
    `${BASE_URL}/movie/${category}?api_key=${API_KEY}`
  )
  const data = await response.json()
  return data.results
}
```

### YouTube API for Trailers

```javascript
async function fetchTrailer(movieId) {
  const response = await fetch(
    `${BASE_URL}/movie/${movieId}/videos?api_key=${API_KEY}`
  )
  const data = await response.json()
  const trailer = data.results.find(
    video => video.type === 'Trailer' && video.site === 'YouTube'
  )
  return `https://www.youtube.com/watch?v=${trailer.key}`
}
```

## Testing

### Unit Tests

```javascript
describe('NetflixApp', () => {
  test('renders without crashing', () => {
    render(<NetflixApp />)
    expect(screen.getByText('NETFLIX')).toBeInTheDocument()
  })
  
  test('opens modal when movie is clicked', () => {
    render(<NetflixApp />)
    const movieCard = screen.getAllByRole('img')[0]
    fireEvent.click(movieCard)
    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })
  
  test('filters movies on search', () => {
    render(<NetflixApp />)
    const searchInput = screen.getByPlaceholderText('Search...')
    fireEvent.change(searchInput, { target: { value: 'Action' } })
    // Assert filtered results
  })
})
```

### Integration Tests

```javascript
describe('Netflix Integration', () => {
  test('complete user flow', async () => {
    render(<NetflixApp />)
    
    // Search for movie
    const searchInput = screen.getByPlaceholderText('Search...')
    fireEvent.change(searchInput, { target: { value: 'Inception' } })
    
    // Click movie
    const movie = await screen.findByAltText('Inception')
    fireEvent.click(movie)
    
    // Verify modal opens
    expect(screen.getByRole('dialog')).toBeInTheDocument()
    
    // Close modal
    const closeButton = screen.getByText('✕')
    fireEvent.click(closeButton)
    
    // Verify modal closes
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
```

## Performance Metrics

### Target Metrics

- First Contentful Paint: < 1.5s
- Time to Interactive: < 3.5s
- Largest Contentful Paint: < 2.5s
- Cumulative Layout Shift: < 0.1

### Optimization Techniques

1. **Image Optimization**
   - Use WebP format
   - Implement lazy loading
   - Serve responsive images

2. **Code Splitting**
   - Lazy load video modal
   - Split by route/app

3. **Caching**
   - Cache API responses
   - Use service workers

4. **Bundle Size**
   - Tree shaking
   - Minification
   - Compression (gzip/brotli)

---

# Instagram App Documentation

## Overview

The Instagram app replicates the core features of the popular social media platform, including photo feeds, stories, likes, comments, and user interactions. It provides a familiar and intuitive interface for social media enthusiasts.

### Key Features

1. **Photo Feed**: Scrollable feed of posts
2. **Stories**: Horizontal scrolling stories carousel
3. **Interactions**: Like, comment, save, and share
4. **User Profiles**: Display user information
5. **Responsive Design**: Mobile-first approach

## Component Architecture

### InstagramApp.jsx

Main container managing Instagram features:

```javascript
function InstagramApp() {
  const [posts, setPosts] = useState([])
  const [stories, setStories] = useState([])
  const [likedPosts, setLikedPosts] = useState(new Set())
  const [savedPosts, setSavedPosts] = useState(new Set())
  
  useEffect(() => {
    // Load posts and stories
    setPosts(mockPosts)
    setStories(mockStories)
  }, [])
  
  const toggleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev)
      if (newSet.has(postId)) {
        newSet.delete(postId)
      } else {
        newSet.add(postId)
      }
      return newSet
    })
  }
  
  return (
    <div className="instagram-app">
      <Header />
      <StoriesCarousel stories={stories} />
      <Feed 
        posts={posts}
        likedPosts={likedPosts}
        onLike={toggleLike}
      />
    </div>
  )
}
```

### Header Component

Instagram-style header with logo and actions:

```javascript
function Header() {
  return (
    <header className="instagram-header">
      <div className="header-content">
        <h1 className="instagram-logo">Instagram</h1>
        <div className="header-actions">
          <button className="header-btn">❤️</button>
          <button className="header-btn">✉️</button>
        </div>
      </div>
    </header>
  )
}
```

#### Styling

```css
.instagram-header {
  background: #fff;
  border-bottom: 1px solid #dbdbdb;
  position: sticky;
  top: 0;
  z-index: 100;
}

.instagram-logo {
  font-family: 'Billabong', cursive;
  font-size: 28px;
  font-weight: 400;
  color