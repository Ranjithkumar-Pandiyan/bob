import { useEffect, useRef, useState } from 'react';

function VideoModal({ movie, onClose }) {
  const [isLiked, setIsLiked] = useState(false);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('video-modal')) {
      onClose();
    }
  };

  // Extract YouTube video ID if it's a YouTube URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const youtubeId = getYouTubeId(movie.videoUrl);

  return (
    <div className="video-modal" onClick={handleBackdropClick}>
      <div className="video-container">
        <button className="close-button" onClick={onClose}>
          ✕
        </button>
        
        {youtubeId ? (
          <iframe
            className="video-player"
            src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
            title={movie.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ width: '100%', aspectRatio: '16/9', border: 'none' }}
          />
        ) : (
          <video
            className="video-player"
            controls
            autoPlay
            controlsList="nodownload"
            playsInline
            preload="metadata"
            style={{ width: '100%', aspectRatio: '16/9' }}
          >
            <source src={movie.videoUrl} type="video/mp4" />
            <p style={{ color: '#fff', padding: '20px', textAlign: 'center' }}>
              Your browser does not support the video tag.
            </p>
          </video>
        )}
        
        <div className="video-info">
          <div className="video-info-header">
            <h2 className="video-title">{movie.title}</h2>
            <div className="video-actions">
              <button 
                className="icon-button"
                onClick={() => setIsAdded(!isAdded)}
                title={isAdded ? "Remove from My List" : "Add to My List"}
              >
                {isAdded ? '✓' : '+'}
              </button>
              <button 
                className="icon-button"
                onClick={() => setIsLiked(!isLiked)}
                title={isLiked ? "Unlike" : "Like"}
              >
                {isLiked ? '❤️' : '🤍'}
              </button>
            </div>
          </div>
          
          <div className="video-metadata">
            <span className="match-score">98% Match</span>
            <span>{movie.year}</span>
            <span>{movie.rating}</span>
            <span>{movie.duration}</span>
          </div>
          
          <p className="video-description">{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoModal;
