import { useRef, useState } from 'react';

function MovieRow({ title, movies, onMovieClick }) {
  const rowRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScrollPosition = () => {
    if (rowRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = rowRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction) => {
    if (rowRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      rowRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setTimeout(checkScrollPosition, 300);
    }
  };

  return (
    <div className="movie-row">
      <h2 className="row-title">{title}</h2>
      <div className="row-container">
        {showLeftArrow && (
          <button 
            className="scroll-arrow scroll-arrow-left"
            onClick={() => scroll('left')}
            aria-label="Scroll left"
          >
            ‹
          </button>
        )}
        <div 
          className="row-posters" 
          ref={rowRef}
          onScroll={checkScrollPosition}
        >
          {movies.map(movie => (
            <div
              key={movie.id}
              className="movie-card"
              onClick={() => onMovieClick(movie)}
              role="button"
              tabIndex={0}
              onKeyPress={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  onMovieClick(movie);
                }
              }}
            >
              <img src={movie.image} alt={movie.title} loading="lazy" />
              <div className="movie-card-overlay">
                <h3 className="movie-card-title">{movie.title}</h3>
                <div className="movie-card-info">
                  <span>{movie.year}</span>
                  <span>{movie.rating}</span>
                  <span>{movie.duration}</span>
                </div>
                <p className="movie-card-description">{movie.description}</p>
              </div>
            </div>
          ))}
        </div>
        {showRightArrow && (
          <button 
            className="scroll-arrow scroll-arrow-right"
            onClick={() => scroll('right')}
            aria-label="Scroll right"
          >
            ›
          </button>
        )}
      </div>
    </div>
  );
}

export default MovieRow;