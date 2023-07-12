import React, { useState, useEffect } from "react";

const HomePage = () => {
  const [submittedData, setSubmittedData] = useState([]);
  const [filterOptions, setFilterOptions] = useState({
    from: "",
    to: "",
    currentCountry: "",
  });

  useEffect(() => {
    fetchData();
  }, [filterOptions]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://iamtraveling.vercel.app/api/submissions");
      if (response.ok) {
        const data = await response.json();
        const filteredData = data.filter((data)=>{
          if(
            (filterOptions.from !== "" && data.from !== filterOptions.from) ||
      (filterOptions.to !== "" && data.to !== filterOptions.to) ||
      (filterOptions.currentCountry !== "" &&
        data.currentCountry !== filterOptions.currentCountry)
          ){return false;} return true;
        })
        filteredData.sort((a,b)=> new Date(a.journeyDate)-new Date(b.journeyDate))
        setSubmittedData(filteredData);
      } else {
        console.log("Failed to fetch form data");
      }
    } catch (error) {
      console.log("Failed to fetch form data", error);
    }
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };



  const getAvailableOptions = (field) => {
    const options = new Set();
    submittedData.forEach((data)=>{ 
      options.add(data[field]);
    })
    return Array.from(options)
  }

  const handleResetFilters=()=>{
    setFilterOptions({
      from:"",
      to:"",
      currentCountry:"",
    })
  }

  return (
    <div className="container mx-auto p-8 ">
      <h1 className="text-2xl font-bold mb-6">Travellers</h1>
      <div className="flex items-center mb-4">
        <label htmlFor="from" className="mr-2">
          From:
        </label>
        <select
          id="from"
          name="from"
          value={filterOptions.from}
          onChange={handleFilterChange}
          className="w-full px-4 border border-gray-300 rounded p-2"
        >
          <option value="">All</option>
          {/* Add options for available "from countries" */}
          {getAvailableOptions('from').map((option)=>(
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <label htmlFor="to" className="mx-4">
          To:
        </label>
        <select
          id="to"
          name="to"
          value={filterOptions.to}
          onChange={handleFilterChange}
          className="w-full px-4 border border-gray-300 rounded p-2"
        >
          <option value="">All</option>
          {/* Add options for available "from countries" */}
          {getAvailableOptions('to').map((option)=>(
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <label htmlFor="currentCountry" className="mx-4">
          Current Country:
        </label>
        <select
          id="currentCountry"
          name="currentCountry"
          value={filterOptions.currentCountry}
          onChange={handleFilterChange}
          className="w-full px-4 border border-gray-300 rounded p-2"
        >
          <option value="">All</option>
          {/* Add options for available "from countries" */}
          {getAvailableOptions('currentCountry').map((option)=>(
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded mx-4" onClick={handleResetFilters}>Reset Filters</button>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {submittedData.map((data) => (
          <div
            key={data._id}
            className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition duration-300"
          >
            <div className="bg-black text-white p-4 rounded-t-lg">
              <h2 className="text-xl font-bold mb-2">
                Current Country:{" "}
                <b className="bg-amber-500	">{data.currentCountry}</b>
              </h2>
              <p className="mb-1">
                <b>Name:</b> {data.YourName}
              </p>
              <p className="mb-1" >
                <b className="bg-emerald-700">From:</b> {data.from}
              </p>
              <p className="mb-1 	">
                <b className="bg-emerald-700">To:</b> {data.to}
              </p>
            </div>
            <div className="bg-slate-600 p-4 rounded-b-lg">
              <p className="mb-1">
                <b>Journey Date:</b> {new Date(data.journeyDate).toLocaleDateString()}
              </p>
              <p className="mb-1">
                <b>Return Date:</b> {new Date(data.returnDate).toLocaleDateString()}
              </p>
              <p className="mb-1">
                <b>Airlines:</b> {data.airlines}
              </p>
              <p className="mb-1">
                <b>Contact Number:</b> {data.contactNumber}
              </p>
              <p className="mb-1">
                <b>Connect on Instagram:</b> {data.instagramprofile}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
};

export default HomePage;
