import React from 'react';
import './Home.css'; // Import the CSS file for your styles

function Home() {
  return (
    <div className="container"> {/* Use className instead of style */}
      <h2>Welcome to Your Music Recommendation App</h2>
      <p>Discover new music based on your preferences and listening habits.</p>

      <h3>Features</h3>
      <ul>
        <li>Personalized music recommendations</li>
        <li>Explore popular genres and artists</li>
        <li>Create playlists and save your favorite tracks</li>
      </ul>

      <h3>How It Works</h3>
      <p>Our app uses advanced algorithms to analyze your listening habits and preferences. Based on this analysis, we recommend new music that we think you'll love.</p>

      <h3>Popular Genres</h3>
      <div className="genreContainer"> {/* Use className instead of style */}
        <div className="genre">Pop</div> {/* Use className instead of style */}
        <div className="genre">Rock</div> {/* Use className instead of style */}
        <div className="genre">Hip Hop</div> {/* Use className instead of style */}
        <div className="genre">Electronic</div> {/* Use className instead of style */}
        <div className="genre">Indie</div> {/* Use className instead of style */}
      </div>
    </div>
  );
}

export default Home;