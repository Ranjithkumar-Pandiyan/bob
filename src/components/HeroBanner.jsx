import { useState, useEffect } from 'react';

function HeroBanner({ movie, onPlayClick }) {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = movie.image;
    img.onload = () => setImageLoaded(true);
  }, [movie.image]);

  return (
    <div 
      className={`hero-banner ${imageLoaded ? 'loaded' : ''}`}
      style={{ backgroundImage: imageLoaded ? `url(${movie.image})` : 'none' }}
      role="banner"
    >
      <div className="hero-content">
        <h1 className="hero-title">{movie.title}</h1>
        <div className="hero-info">
          <span>{movie.year}</span>
          <span>{movie.rating}</span>
          <span>{movie.duration}</span>
        </div>
        {movie.genres && (
          <div className="hero-genres">
            {movie.genres.map((genre, index) => (
              <span key={index} className="genre-tag">{genre}</span>
            ))}
          </div>
        )}
        <p className="hero-description">{movie.description}</p>
        <div className="hero-buttons">
          <button 
            className="btn btn-play" 
            onClick={onPlayClick}
            aria-label={`Play ${movie.title}`}
          >
            ▶️ Play
          </button>
          <button 
            className="btn btn-info"
            aria-label={`More information about ${movie.title}`}
          >
            ℹ️ More Info
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroBanner;