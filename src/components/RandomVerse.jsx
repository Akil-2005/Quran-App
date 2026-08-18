// client/src/components/RandomVerse.js
import React from 'react';
import './RandomVerse.css';
import VerseCard from './VerseCard';

function RandomVerse({ randomVerse, onFetchRandom }) {
  return (
    <div className="random-verse-section">
      <div className="dice-container">
        <button className="dice-button" onClick={onFetchRandom} title="Get Random Verse">
          🎲 Get Random Verse
        </button>
      </div>

      {randomVerse && (
        <div className="random-verse-display animate-fade-in">
          <VerseCard verse={randomVerse} />
        </div>
      )}
    </div>
  );
}

export default RandomVerse;