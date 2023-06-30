const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  currentCountry: String,
            from: String,
            to: String,
            journeyDate: Date,
            returnDate: Date,
            airlines: String,
            contactNumber: Number,
});

module.exports = mongoose.model('Submission', submissionSchema);