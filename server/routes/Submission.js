const express = require('express');
const router = express.Router();
const Submission = require('../models/Submission');



// Fetch all from submissions
router.get('/',async(req,res)=>{
  try{
    const submissions = await Submission.find();
    res.json(submissions);
  }catch(error){
    res.status(500).json({error:'Failed to fetch form data'});
  }
})

router.post('/', async (req, res) => {
  try {
    const newSubmission = new Submission(req.body);
    await newSubmission.save();
    res.status(201).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;

// const express = require('express');
// const submissionsModel = require('../models/Submission');

// const router = express.Router();

// router.post('/', async (req, res) => {
//   const { currentCountry, from, to, journeyDate, returnDate, airlines, contactNumber } = req.body;

//   const submission = await submissionsModel.create({
//     currentCountry,
//     from,
//     to,
//     journeyDate,
//     returnDate,
//     airlines,
//     contactNumber,
//   });

//   res.status(201).json(submission);
// });

// module.exports = router;
