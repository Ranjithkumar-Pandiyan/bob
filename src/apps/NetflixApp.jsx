import { useState } from 'react';
import '../styles/netflix.css';
import { categories, featuredMovie } from '../data/mockData';
import VideoModal from '../components/VideoModal';
import MovieRow from '../components/MovieRow';
import HeroBanner from '../components/HeroBanner';
import Navbar from '../components/Navbar';

function NetflixApp() {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  const filteredCategories = searchQuery
    ? categories.map(category => ({
        ...category,
        movies: category.movies.filter(movie =>
          movie.title.toLowerCase().includes(searchQuery.toLowerCase())
        )
      })).filter(category => category.movies.length > 0)
    : categories;

  return (
    <div className="netflix-app">
      <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <HeroBanner movie={featuredMovie} onPlayClick={() => handleMovieClick(featuredMovie)} />
      
      <div className="movie-rows">
        {filteredCategories.map(category => (
          <MovieRow
            key={category.id}
            title={category.title}
            movies={category.movies}
            onMovieClick={handleMovieClick}
          />
        ))}
      </div>

      {selectedMovie && (
        <VideoModal movie={selectedMovie} onClose={handleCloseModal} />
      )}
    </div>
  );
}

export default NetflixApp;
