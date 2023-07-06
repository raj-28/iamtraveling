const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json())
const port = process.env.PORT || 5000;

// Middleware
// app.use(cors());
app.use(express.json());
app.use(cors({origin: 'https://triptravel.vercel.app'}));


// Connect to the database
mongoose.connect('mongodb://rajkp:rajkp@ac-tztvajn-shard-00-00.r2wovh1.mongodb.net:27017,ac-tztvajn-shard-00-01.r2wovh1.mongodb.net:27017,ac-tztvajn-shard-00-02.r2wovh1.mongodb.net:27017/?replicaSet=atlas-ow5jdw-shard-0&ssl=true&authSource=admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to the database');
});

// Routes
const submissionsRouter = require('./routes/Submission.js');
app.use('/api/submission', submissionsRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});