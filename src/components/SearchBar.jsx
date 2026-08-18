// client/src/components/SearchBar.js
import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    // User type பண்றதை "Surah" மற்றும் "Verse" தனியா பிரிப்போம் (e.g., "2:255")
    const parts = query.split(':');
    if (parts.length === 2) {
      const surah = parts[0].trim();
      const ayah = parts[1].trim();
      onSearch(surah, ayah);
    } else {
      alert("Please enter in Surah:Verse format (e.g., 2:255)");
    }
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Verse (e.g., 2:255, 36:58, 112:1)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">🔍 Search</button>
      </div>
    </form>
  );
}

export default SearchBar;