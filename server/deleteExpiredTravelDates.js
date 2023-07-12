const Submission = require('./models/Submission');


const deleteExpiredTravelData = async() =>{
    try{
      const currentDate = new Date();
      await Submission.deleteMany({journeyDate:{$lt:currentDate}});
      console.log('Expired travel records deleted');
    }catch(error){
      console.log("error deleting expired travel records:", error);
    }
  };

  module.exports = deleteExpiredTravelData;