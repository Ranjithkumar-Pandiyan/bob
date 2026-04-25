import { useState } from 'react'
import './App.css'
import NetflixApp from './apps/NetflixApp'
import InstagramApp from './apps/InstagramApp'
import SpotifyApp from './apps/SpotifyApp'
import MapsApp from './apps/MapsApp'

function App() {
  const [currentApp, setCurrentApp] = useState('netflix')

  const apps = [
    { id: 'netflix', name: 'Netflix', icon: '🎬', color: '#E50914' },
    { id: 'instagram', name: 'Instagram', icon: '📸', color: '#E4405F' },
    { id: 'spotify', name: 'Spotify', icon: '🎵', color: '#1DB954' },
    { id: 'maps', name: 'Maps', icon: '🗺️', color: '#4285F4' }
  ]

  const renderApp = () => {
    switch(currentApp) {
      case 'netflix': return <NetflixApp />
      case 'instagram': return <InstagramApp />
      case 'spotify': return <SpotifyApp />
      case 'maps': return <MapsApp />
      default: return <NetflixApp />
    }
  }

  return (
    <div className="mega-app">
      <nav className="app-nav">
        <div className="nav-brand">
          <span className="nav-logo">🚀</span>
          <span className="nav-title">Mega App</span>
        </div>
        <div className="nav-apps">
          {apps.map(app => (
            <button
              key={app.id}
              className={`nav-app-btn ${currentApp === app.id ? 'active' : ''}`}
              onClick={() => setCurrentApp(app.id)}
              style={{ '--app-color': app.color }}
            >
              <span className="nav-app-icon">{app.icon}</span>
              <span className="nav-app-name">{app.name}</span>
            </button>
          ))}
        </div>
      </nav>
      
      <main className="app-content">
        {renderApp()}
      </main>
    </div>
  )
}

export default App