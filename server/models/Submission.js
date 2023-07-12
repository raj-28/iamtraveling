const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  YourName:String,
  currentCountry: String,
            from: String,
            to: String,
            journeyDate: Date,
            // returnDate: Date,
            airlines: String,
            contactNumber: Number,
            instagramprofile: String,
});

module.exports = mongoose.model('Submission', submissionSchema);