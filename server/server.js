// server/server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// Path correctness-a confirm panniko da (Check spelling and casing)
const Verse = require('./models/Verse'); 
const verseRoutes = require('./routes/verseRoutes');