import React, { useState } from 'react';
import axios from 'axios';

const SubmissionForm = () => {
  const [formData, setFormData] = useState({
    currentCountry: '',
    fromCountry: '',
    toCountry: '',
    journeyDate: '',
    returnDate: '',
    airlines: '',
    contactNumber: '',
  });
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/submissions', formData);
      console.log(response.data); // Handle the response data as needed
      // Optionally, reset the form fields
      setFormData({
        currentCountry: '',
        fromCountry: '',
        toCountry: '',
        journeyDate: '',
        returnDate: '',
        airlines: '',
        contactNumber: '',
      });
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred. Please try again.'); // Handle the error message display as needed
    }
  };

  return (
    <div>
      <h2>Submission Form</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        {/* Form fields */}
        <input type="text" name="currentCountry" value={formData.currentCountry} onChange={handleChange} placeholder="Current Country" required />
        <input type="text" name="fromCountry" value={formData.fromCountry} onChange={handleChange} placeholder="From Country" required />
        <input type="text" name="toCountry" value={formData.toCountry} onChange={handleChange} placeholder="To Country" required />
        <input type="date" name="journeyDate" value={formData.journeyDate} onChange={handleChange} placeholder="Journey Date" required />
        <input type="date" name="returnDate" value={formData.returnDate} onChange={handleChange} placeholder="Return Date" />
        <input type="text" name="airlines" value={formData.airlines} onChange={handleChange} placeholder="Airlines" required />
        <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} placeholder="Contact Number" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmissionForm;