// client/src/App.js
import React, { useState } from 'react';
import './styles/global.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchBar from './components/SearchBar';
import VerseCard from './components/VerseCard';
import RandomVerse from './components/RandomVerse';
import SituationForm from './components/SituationForm';

// Dummy static data for checking UI
const dummyVerse1 = {
  surahNumber: 2,
  surahName: "Al-Baqarah",
  ayahNumber: 286,
  arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
  english: "Allah does not burden a soul beyond that it can bear.",
  tamil: "அல்லாஹ் எந்த ஓர் ஆத்மாவையும் அது தாங்கிக் கொள்ளக் கூடிய அளவுக்கு மேல் கஷ்டப்படுத்துவதில்லை.",
  topic: "Hope",
  tafsirShort: "Allah knows your limits."
};

const dummyVerse2 = {
  surahNumber: 94,
  surahName: "Ash-Sharh",
  ayahNumber: 5,
  arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
  english: "For indeed, with hardship [will be] ease.",
  tamil: "நிச்சயமாக கஷ்டத்துடன் ஒரு எளிமை இருக்கிறது.",
  topic: "Patience",
  tafsirShort: "Relief is coming after hardship."
};

function App() {
  const [searchedVerse, setSearchedVerse] = useState(null);
  const [randomVerse, setRandomVerse] = useState(null);
  const [guidanceVerses, setGuidanceVerses] = useState(null);

  const handleSearch = (surah, ayah) => {
    setSearchedVerse(dummyVerse1);
  };

  const handleFetchRandom = () => {
    setRandomVerse(dummyVerse2);
  };

  const handleFetchGuidance = (text) => {
    // Array context simulating multiple verses returned
    setGuidanceVerses([dummyVerse1, dummyVerse2]);
  };

  return (
    <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      
      <main style={{ flex: 1, padding: '40px 20px', maxWidth: '800px', margin: '0 auto', width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '10px', color: '#fff' }}>
            Quran <span style={{ color: 'var(--accent-color)' }}>Verses</span>
          </h1>
          <p style={{ opacity: 0.7 }}>Explore and reflect upon the Holy Quran</p>
        </div>
        
        {/* Section 1: Search */}
        <SearchBar onSearch={handleSearch} />
        {searchedVerse && <VerseCard verse={searchedVerse} />}
        
        <hr style={{ border: 'none', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

        {/* Section 2: Random Verse */}
        <RandomVerse randomVerse={randomVerse} onFetchRandom={handleFetchRandom} />

        <hr style={{ border: 'none', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '40px 0' }} />

        {/* Section 3: Situation Guidance */}
        <SituationForm guidanceVerses={guidanceVerses} onFetchGuidance={handleFetchGuidance} />
      </main>

      <Footer />
    </div>
  );
}

export default App;