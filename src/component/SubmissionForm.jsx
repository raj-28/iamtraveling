import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/submissions');
      if (response.ok) {
        const data = await response.json();
        setSubmittedData(data);
      } else {
        console.log('Failed to fetch form data');
      }
    } catch (error) {
      console.log('Failed to fetch form data', error);
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Home Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {submittedData.map((data) => (
          <div
            key={data._id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <h2 className="text-xl font-bold mb-2">Current Country: {data.currentCountry}</h2>
            <p className='mb-1'>Name: {data.YourName}</p>
            <p className="mb-1">From: {data.from}</p>
            <p className="mb-1">To: {data.to}</p>
            <p className="mb-1">Journey Date: {data.journeyDate}</p>
            <p className="mb-1">Return Date: {data.returnDate}</p>
            <p className="mb-1">Airlines: {data.airlines}</p>
            <p className="mb-1">Contact Number: {data.contactNumber}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;