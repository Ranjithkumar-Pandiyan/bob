import { useState, useEffect } from 'react';

function Navbar({ searchQuery, setSearchQuery }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchToggle = () => {
    setIsSearchExpanded(!isSearchExpanded);
    if (isSearchExpanded) {
      setSearchQuery('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isSearchExpanded) {
      setIsSearchExpanded(false);
      setSearchQuery('');
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} role="navigation" aria-label="Main navigation">
      <div className="navbar-left">
        <div className="navbar-logo" role="img" aria-label="Netflix">NETFLIX</div>
        <ul className="navbar-links" role="menubar">
          <li role="menuitem" tabIndex={0}>Home</li>
          <li role="menuitem" tabIndex={0}>TV Shows</li>
          <li role="menuitem" tabIndex={0}>Movies</li>
          <li role="menuitem" tabIndex={0}>New & Popular</li>
          <li role="menuitem" tabIndex={0}>My List</li>
        </ul>
      </div>
      <div className="navbar-right">
        <div className={`search-box ${isSearchExpanded ? 'expanded' : ''}`}>
          <button 
            className="search-icon" 
            onClick={handleSearchToggle}
            aria-label={isSearchExpanded ? "Close search" : "Open search"}
            aria-expanded={isSearchExpanded}
          >
            🔍
          </button>
          {isSearchExpanded && (
            <input
              type="text"
              placeholder="Search titles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              aria-label="Search movies and shows"
              autoFocus
            />
          )}
        </div>
        <div className="user-profile" role="button" tabIndex={0} aria-label="User profile">U</div>
      </div>
    </nav>
  );
}

export default Navbar;