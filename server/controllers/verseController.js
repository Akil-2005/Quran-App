// server/controllers/verseController.js
const Verse = require('../models/Verse');

// @desc    Get specific verse by Surah and Ayah number
// @route   GET /api/verse/:surah/:ayah
exports.getVerseByNumber = async (req, res) => {
  try {
    const { surah, ayah } = req.params;
    const verse = await Verse.findOne({ surahNumber: Number(surah), ayahNumber: Number(ayah) });
    
    if (!verse) {
      return res.status(404).json({ message: "Verse not found." });
    }
    
    res.json(verse);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};