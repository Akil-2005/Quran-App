// server/models/Verse.js
const mongoose = require('mongoose');

const VerseSchema = new mongoose.Schema({
  surahNumber: { type: Number, required: true },
  surahName: { type: String, required: true },
  ayahNumber: { type: Number, required: true },
  arabic: { type: String, required: true },
  english: { type: String, required: true },
  tamil: { type: String, default: "" },
  keywords: { type: [String], default: [] }, // e.g., ["hope", "patience"]
  topic: { type: String, default: "Reflection" },
  tafsirShort: { type: String, default: "" }
});

module.exports = mongoose.model('Verse', VerseSchema, 'quran');