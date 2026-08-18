// client/src/components/VerseCard.js
import React from 'react';
import './VerseCard.css';

function VerseCard({ verse }) {
  if (!verse) return null;

  const handleCopy = () => {
    const textToCopy = `[Surah ${verse.surahName} ${verse.surahNumber}:${verse.ayahNumber}]\nArabic: ${verse.arabic}\nEnglish: ${verse.english}`;
    navigator.clipboard.writeText(textToCopy);
    alert("Verse copied to clipboard! 📋");
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `Quran Verse ${verse.surahNumber}:${verse.ayahNumber}`,
        text: `${verse.arabic}\n\n${verse.english}`,
      }).catch(console.error);
    } else {
      alert("Sharing not supported on this browser. You can use the Copy button!");
    }
  };

  return (
    <div className="glass-card verse-card">
      <div className="verse-header">
        <h3>{verse.surahName} <span className="verse-reference">({verse.surahNumber}:{verse.ayahNumber})</span></h3>
        <span className="topic-badge">{verse.topic || "Reflection"}</span>
      </div>
      
      <div className="verse-content">
        <p className="arabic-text">{verse.arabic}</p>
        
        <div className="translation-section">
          <p className="translation-title">English</p>
          <p className="translation-text">{verse.english}</p>
        </div>

        {verse.tamil && (
          <div className="translation-section">
            <p className="translation-title tamil-title">தமிழ்</p>
            <p className="translation-text tamil-text">{verse.tamil}</p>
          </div>
        )}

        {verse.tafsirShort && (
          <div className="tafsir-section">
            <p className="tafsir-title">Short Explanation</p>
            <p className="tafsir-text">💡 {verse.tafsirShort}</p>
          </div>
        )}
      </div>

      <div className="verse-actions">
        <button className="action-btn copy-btn" onClick={handleCopy}>📋 Copy</button>
        <button className="action-btn share-btn" onClick={handleShare}>🔗 Share</button>
      </div>
    </div>
  );
}

export default VerseCard;