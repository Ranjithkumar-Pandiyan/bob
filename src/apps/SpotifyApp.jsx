import { useState, useRef, useEffect } from 'react';
import '../styles/spotify.css';

function SpotifyApp() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [currentTrack, setCurrentTrack] = useState(0);

  const playlists = [
    { id: 1, name: 'Today\'s Top Hits', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop' },
    { id: 2, name: 'RapCaviar', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop' },
    { id: 3, name: 'All Out 2020s', cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop' },
    { id: 4, name: 'Rock Classics', cover: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop' }
  ];

  const tracks = [
    {
      id: 1,
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:20',
      cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    },
    {
      id: 2,
      title: 'Levitating',
      artist: 'Dua Lipa',
      album: 'Future Nostalgia',
      duration: '3:23',
      cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
    },
    {
      id: 3,
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      album: 'After Hours',
      duration: '3:35',
      cover: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?w=300&h=300&fit=crop',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
    },
    {
      id: 4,
      title: 'Good 4 U',
      artist: 'Olivia Rodrigo',
      album: 'SOUR',
      duration: '2:58',
      cover: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?w=300&h=300&fit=crop',
      audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
    }
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      setIsPlaying(false);
      if (currentTrack < tracks.length - 1) {
        setCurrentTrack(currentTrack + 1);
      }
    };

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [currentTrack, tracks.length]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const playTrack = (index) => {
    setCurrentTrack(index);
    setIsPlaying(true);
    setTimeout(() => {
      audioRef.current.play();
    }, 100);
  };

  const nextTrack = () => {
    if (currentTrack < tracks.length - 1) {
      playTrack(currentTrack + 1);
    }
  };

  const prevTrack = () => {
    if (currentTrack > 0) {
      playTrack(currentTrack - 1);
    }
  };

  const formatTime = (time) => {
    if (isNaN(time)) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const track = tracks[currentTrack];

  return (
    <div className="spotify-app">
      <aside className="spotify-sidebar">
        <div className="sidebar-header">
          <h1 className="spotify-logo">Spotify</h1>
        </div>
        <nav className="sidebar-nav">
          <a href="#" className="nav-item active">🏠 Home</a>
          <a href="#" className="nav-item">🔍 Search</a>
          <a href="#" className="nav-item">📚 Your Library</a>
        </nav>
        <div className="sidebar-playlists">
          <h3>Playlists</h3>
          {playlists.map(playlist => (
            <div key={playlist.id} className="playlist-item">
              <img src={playlist.cover} alt={playlist.name} />
              <span>{playlist.name}</span>
            </div>
          ))}
        </div>
      </aside>

      <main className="spotify-main">
        <div className="main-header">
          <h2>Your Queue</h2>
        </div>
        <div className="tracks-list">
          {tracks.map((t, index) => (
            <div
              key={t.id}
              className={`track-item ${index === currentTrack ? 'active' : ''}`}
              onClick={() => playTrack(index)}
            >
              <div className="track-number">{index + 1}</div>
              <img src={t.cover} alt={t.title} className="track-cover" />
              <div className="track-info">
                <div className="track-title">{t.title}</div>
                <div className="track-artist">{t.artist}</div>
              </div>
              <div className="track-album">{t.album}</div>
              <div className="track-duration">{t.duration}</div>
            </div>
          ))}
        </div>
      </main>

      <footer className="spotify-player">
        <div className="player-track-info">
          <img src={track.cover} alt={track.title} className="player-cover" />
          <div className="player-details">
            <div className="player-title">{track.title}</div>
            <div className="player-artist">{track.artist}</div>
          </div>
          <button className="player-like">🤍</button>
        </div>

        <div className="player-controls">
          <div className="player-buttons">
            <button className="control-btn">🔀</button>
            <button className="control-btn" onClick={prevTrack}>⏮️</button>
            <button className="control-btn play-btn" onClick={togglePlay}>
              {isPlaying ? '⏸️' : '▶️'}
            </button>
            <button className="control-btn" onClick={nextTrack}>⏭️</button>
            <button className="control-btn">🔁</button>
          </div>
          <div className="player-progress">
            <span className="time">{formatTime(currentTime)}</span>
            <input
              type="range"
              className="progress-bar"
              min="0"
              max={duration || 0}
              value={currentTime}
              onChange={handleSeek}
            />
            <span className="time">{formatTime(duration)}</span>
          </div>
        </div>

        <div className="player-volume">
          <span>🔊</span>
          <input
            type="range"
            className="volume-bar"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>

        <audio ref={audioRef} src={track.audioUrl} />
      </footer>
    </div>
  );
}

export default SpotifyApp;
