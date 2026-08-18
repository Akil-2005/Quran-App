// client/src/components/SituationForm.js
import React, { useState } from 'react';
import './SituationForm.css';
import VerseCard from './VerseCard';

function SituationForm({ guidanceVerses, onFetchGuidance }) {
  const [situation, setSituation] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!situation.trim()) return;
    onFetchGuidance(situation);
  };

  return (
    <div className="situation-section glass-card">
      <h3>💡 Seek Guidance & Reflection</h3>
      <p className="situation-desc">Describe your situation or emotion (e.g., "I am feeling anxious", "I lost hope") to find relevant Quran verses.</p>
      
      <form onSubmit={handleSubmit} className="situation-form">
        <textarea
          placeholder="Describe your situation here..."
          value={situation}
          onChange={(e) => setSituation(e.target.value)}
          rows="4"
          required
        />
        <button type="submit" className="guidance-btn">Find Guidance</button>
      </form>

      {guidanceVerses && guidanceVerses.length > 0 && (
        <div className="guidance-results">
          {/* Strict Requirement Disclaimer */}
          <blockquote className="guidance-disclaimer">
            "These Quran verses may provide guidance and reflection for your situation. This suggestion is intended for reflection."
          </blockquote>
          
          <div className="guidance-cards-list">
            {guidanceVerses.map((verse, index) => (
              <VerseCard key={index} verse={verse} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SituationForm;