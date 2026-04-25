import { useState } from 'react';
import '../styles/maps.css';

function MapsApp() {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const locations = [
    {
      id: 1,
      name: 'Central Park',
      category: 'park',
      address: 'New York, NY 10024',
      rating: 4.8,
      reviews: 12453,
      image: 'https://images.unsplash.com/photo-1568515387631-8b650bbcdb90?w=400&h=300&fit=crop',
      lat: 40.785091,
      lng: -73.968285
    },
    {
      id: 2,
      name: 'The Coffee House',
      category: 'cafe',
      address: '123 Main St, New York, NY',
      rating: 4.5,
      reviews: 892,
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&h=300&fit=crop',
      lat: 40.758896,
      lng: -73.985130
    },
    {
      id: 3,
      name: 'Metropolitan Museum',
      category: 'museum',
      address: '1000 5th Ave, New York, NY',
      rating: 4.9,
      reviews: 25678,
      image: 'https://images.unsplash.com/photo-1566127444979-b3d2b654e3d7?w=400&h=300&fit=crop',
      lat: 40.779437,
      lng: -73.963244
    },
    {
      id: 4,
      name: 'Brooklyn Bridge',
      category: 'landmark',
      address: 'Brooklyn Bridge, New York, NY',
      rating: 4.7,
      reviews: 18234,
      image: 'https://images.unsplash.com/photo-1513581166391-887a96ddeafd?w=400&h=300&fit=crop',
      lat: 40.706086,
      lng: -73.996864
    },
    {
      id: 5,
      name: 'Times Square',
      category: 'landmark',
      address: 'Manhattan, NY 10036',
      rating: 4.6,
      reviews: 34567,
      image: 'https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop',
      lat: 40.758896,
      lng: -73.985130
    },
    {
      id: 6,
      name: 'Riverside Park',
      category: 'park',
      address: 'Riverside Dr, New York, NY',
      rating: 4.4,
      reviews: 5432,
      image: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
      lat: 40.802080,
      lng: -73.971249
    }
  ];

  const categories = [
    { id: 'all', name: 'All', icon: '🗺️' },
    { id: 'park', name: 'Parks', icon: '🌳' },
    { id: 'cafe', name: 'Cafes', icon: '☕' },
    { id: 'museum', name: 'Museums', icon: '🏛️' },
    { id: 'landmark', name: 'Landmarks', icon: '🗽' }
  ];

  const filteredLocations = locations.filter(loc => {
    const matchesSearch = loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         loc.address.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || loc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="maps-app">
      <div className="maps-sidebar">
        <div className="maps-search">
          <input
            type="text"
            placeholder="Search for places..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
        </div>

        <div className="maps-categories">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{cat.name}</span>
            </button>
          ))}
        </div>

        <div className="locations-list">
          {filteredLocations.map(location => (
            <div
              key={location.id}
              className={`location-card ${selectedLocation?.id === location.id ? 'selected' : ''}`}
              onClick={() => setSelectedLocation(location)}
            >
              <img src={location.image} alt={location.name} className="location-image" />
              <div className="location-info">
                <h3 className="location-name">{location.name}</h3>
                <p className="location-address">{location.address}</p>
                <div className="location-rating">
                  <span className="rating-stars">⭐ {location.rating}</span>
                  <span className="rating-reviews">({location.reviews.toLocaleString()})</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="maps-main">
        <div className="map-container">
          <div className="map-placeholder">
            <div className="map-markers">
              {filteredLocations.map(location => (
                <div
                  key={location.id}
                  className={`map-marker ${selectedLocation?.id === location.id ? 'active' : ''}`}
                  style={{
                    left: `${(location.lng + 74) * 50}%`,
                    top: `${(41 - location.lat) * 50}%`
                  }}
                  onClick={() => setSelectedLocation(location)}
                >
                  📍
                </div>
              ))}
            </div>
            <div className="map-overlay">
              <div className="map-text">Interactive Map View</div>
              <div className="map-subtext">Click markers to view details</div>
            </div>
          </div>
        </div>

        {selectedLocation && (
          <div className="location-details">
            <button className="close-details" onClick={() => setSelectedLocation(null)}>✕</button>
            <img src={selectedLocation.image} alt={selectedLocation.name} className="details-image" />
            <div className="details-content">
              <h2>{selectedLocation.name}</h2>
              <p className="details-address">📍 {selectedLocation.address}</p>
              <div className="details-rating">
                <span className="rating-stars">⭐ {selectedLocation.rating}</span>
                <span className="rating-reviews">({selectedLocation.reviews.toLocaleString()} reviews)</span>
              </div>
              <div className="details-actions">
                <button className="action-button primary">Get Directions</button>
                <button className="action-button">Save</button>
                <button className="action-button">Share</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MapsApp;
