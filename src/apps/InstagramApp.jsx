import { useState } from 'react';
import '../styles/instagram.css';

function InstagramApp() {
  const [posts] = useState([
    {
      id: 1,
      username: 'travel_explorer',
      userImage: 'https://i.pravatar.cc/150?img=1',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop',
      likes: 1234,
      caption: 'Amazing mountain views! 🏔️',
      comments: 45,
      timestamp: '2 hours ago'
    },
    {
      id: 2,
      username: 'food_lover',
      userImage: 'https://i.pravatar.cc/150?img=2',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=600&fit=crop',
      likes: 892,
      caption: 'Delicious breakfast spread 🍳☕',
      comments: 23,
      timestamp: '5 hours ago'
    },
    {
      id: 3,
      username: 'city_lights',
      userImage: 'https://i.pravatar.cc/150?img=3',
      image: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=600&h=600&fit=crop',
      likes: 2156,
      caption: 'Urban nightlife ✨',
      comments: 67,
      timestamp: '1 day ago'
    },
    {
      id: 4,
      username: 'beach_vibes',
      userImage: 'https://i.pravatar.cc/150?img=4',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop',
      likes: 3421,
      caption: 'Paradise found 🏖️🌊',
      comments: 89,
      timestamp: '2 days ago'
    }
  ]);

  const [stories] = useState([
    { id: 1, username: 'Your Story', image: 'https://i.pravatar.cc/150?img=10', isOwn: true },
    { id: 2, username: 'travel_explorer', image: 'https://i.pravatar.cc/150?img=1' },
    { id: 3, username: 'food_lover', image: 'https://i.pravatar.cc/150?img=2' },
    { id: 4, username: 'city_lights', image: 'https://i.pravatar.cc/150?img=3' },
    { id: 5, username: 'beach_vibes', image: 'https://i.pravatar.cc/150?img=4' },
    { id: 6, username: 'nature_shots', image: 'https://i.pravatar.cc/150?img=5' },
    { id: 7, username: 'art_gallery', image: 'https://i.pravatar.cc/150?img=6' }
  ]);

  const [likedPosts, setLikedPosts] = useState(new Set());
  const [savedPosts, setSavedPosts] = useState(new Set());

  const toggleLike = (postId) => {
    setLikedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  const toggleSave = (postId) => {
    setSavedPosts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(postId)) {
        newSet.delete(postId);
      } else {
        newSet.add(postId);
      }
      return newSet;
    });
  };

  return (
    <div className="instagram-app">
      <header className="instagram-header">
        <div className="header-content">
          <h1 className="instagram-logo">Instagram</h1>
          <div className="header-actions">
            <button className="header-btn">❤️</button>
            <button className="header-btn">✉️</button>
          </div>
        </div>
      </header>

      <div className="instagram-content">
        <div className="stories-container">
          <div className="stories-scroll">
            {stories.map(story => (
              <div key={story.id} className="story-item">
                <div className={`story-ring ${story.isOwn ? 'own-story' : ''}`}>
                  <img src={story.image} alt={story.username} />
                </div>
                <span className="story-username">{story.username}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="posts-container">
          {posts.map(post => (
            <article key={post.id} className="post">
              <div className="post-header">
                <div className="post-user">
                  <img src={post.userImage} alt={post.username} className="post-user-image" />
                  <span className="post-username">{post.username}</span>
                </div>
                <button className="post-options">⋯</button>
              </div>

              <div className="post-image-container">
                <img src={post.image} alt="Post" className="post-image" />
              </div>

              <div className="post-actions">
                <div className="post-actions-left">
                  <button 
                    className={`action-btn ${likedPosts.has(post.id) ? 'liked' : ''}`}
                    onClick={() => toggleLike(post.id)}
                  >
                    {likedPosts.has(post.id) ? '❤️' : '🤍'}
                  </button>
                  <button className="action-btn">💬</button>
                  <button className="action-btn">✈️</button>
                </div>
                <button 
                  className={`action-btn ${savedPosts.has(post.id) ? 'saved' : ''}`}
                  onClick={() => toggleSave(post.id)}
                >
                  {savedPosts.has(post.id) ? '🔖' : '🏷️'}
                </button>
              </div>

              <div className="post-info">
                <div className="post-likes">
                  {post.likes + (likedPosts.has(post.id) ? 1 : 0)} likes
                </div>
                <div className="post-caption">
                  <span className="caption-username">{post.username}</span>
                  {' '}
                  <span className="caption-text">{post.caption}</span>
                </div>
                <button className="view-comments">
                  View all {post.comments} comments
                </button>
                <div className="post-timestamp">{post.timestamp}</div>
              </div>

              <div className="post-comment-input">
                <input type="text" placeholder="Add a comment..." />
                <button className="post-btn">Post</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InstagramApp;
