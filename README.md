# 🚀 Mega App - All-in-One Entertainment Suite

A unified React application combining four popular apps into one seamless experience: Netflix, Instagram, Spotify, and Google Maps.

## ✨ Features

### 🎬 Netflix Clone
- Browse movies and TV shows by category
- Watch trailers and videos
- Search functionality
- Hero banner with featured content
- Responsive movie rows with smooth scrolling

### 📸 Instagram Clone
- View photo feed with posts
- Interactive stories carousel
- Like, comment, and save posts
- User profiles and timestamps
- Smooth animations and transitions

### 🎵 Spotify Clone
- Browse and play music tracks
- Full audio player with controls
- Playlist management
- Volume control and seek functionality
- Queue management

### 🗺️ Google Maps Clone
- Interactive location browser
- Category filtering (Parks, Cafes, Museums, Landmarks)
- Location details with ratings and reviews
- Search functionality
- Visual map with markers

## 🛠️ Tech Stack

- **React 18.3** - UI framework
- **Vite 6.0** - Build tool and dev server
- **CSS3** - Styling with animations
- **HTML5 Audio API** - Music playback

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd mega-app

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5173` (or next available port)

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Project Structure

```
mega-app/
├── src/
│   ├── apps/              # Individual app components
│   │   ├── NetflixApp.jsx
│   │   ├── InstagramApp.jsx
│   │   ├── SpotifyApp.jsx
│   │   └── MapsApp.jsx
│   ├── components/        # Shared components
│   │   ├── ErrorBoundary.jsx
│   │   ├── Footer.jsx
│   │   ├── HeroBanner.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── MovieRow.jsx
│   │   ├── Navbar.jsx
│   │   └── VideoModal.jsx
│   ├── data/             # Mock data
│   │   └── mockData.js
│   ├── styles/           # App-specific styles
│   │   ├── netflix.css
│   │   ├── instagram.css
│   │   ├── spotify.css
│   │   └── maps.css
│   ├── App.jsx           # Main app component
│   ├── App.css           # Global styles
│   ├── main.jsx          # Entry point
│   └── index.css         # Base styles
├── public/               # Static assets
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🎨 Features & Improvements

### Iteration 1: Enhanced UX
- ✅ Smooth animations and transitions
- ✅ Responsive design for all screen sizes
- ✅ Interactive hover effects
- ✅ Loading states and spinners

### Iteration 2: Theme & Persistence
- ✅ Beautiful gradient navigation
- ✅ Consistent color scheme across apps
- ✅ Smooth app switching
- ✅ Optimized performance

### Iteration 3: Polish & Refinement
- ✅ Error boundaries for stability
- ✅ Accessibility improvements
- ✅ Code organization and cleanup
- ✅ Production-ready build

## 🎯 Usage

1. **Navigation**: Click on any app icon in the top navigation bar to switch between apps
2. **Netflix**: Browse movies, click to watch trailers, use search to find content
3. **Instagram**: Scroll through posts, like/save content, view stories
4. **Spotify**: Play music, control playback, adjust volume, browse tracks
5. **Maps**: Search locations, filter by category, view details, explore map

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Adding New Apps

1. Create new app component in `src/apps/`
2. Create corresponding CSS file in `src/styles/`
3. Add app configuration to `apps` array in `App.jsx`
4. Import and add to switch statement in `renderApp()`

## 🎨 Customization

### Changing Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --nav-bg: #1a1a2e;
  --transition-speed: 0.3s;
}
```

### Adding New Features
Each app is self-contained in its own component, making it easy to add features without affecting other apps.

## 📱 Responsive Design

The app is fully responsive and works on:
- 📱 Mobile devices (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Large screens (1440px+)

## 🚀 Performance

- Fast initial load with Vite
- Code splitting for optimal bundle size
- Lazy loading of images
- Smooth 60fps animations
- Optimized re-renders

## 🐛 Known Issues

- Audio files use placeholder URLs (replace with real audio sources)
- Map uses visual representation (integrate real map API for production)
- Some images use placeholder services (replace with real assets)

## 🔮 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] User authentication
- [ ] Real API integrations
- [ ] Offline support with PWA
- [ ] More apps (YouTube, Twitter, etc.)
- [ ] Keyboard shortcuts
- [ ] State persistence

## 📄 License

MIT License - feel free to use this project for learning and development.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 👨‍💻 Author

Built with ❤️ using React and Vite

---

**Note**: This is a demo project for educational purposes. All app designs are inspired by their respective original applications.
