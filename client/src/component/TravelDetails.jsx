import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify';

const TravelForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    YourName: "",
    currentCountry: "",
    from: "",
    to: "",
    journeyDate: "",
    returnDate: "",
    airlines: "",
    contactNumber: "",
    instagramprofile:"",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // Perform live form validation
    const validationErrors = validateField(name, value);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validationErrors[name],
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform final form validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      try {
        // Send the form data to the backend
        const response = await fetch("https://iamtraveling.vercel.app/api/submissions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          // Form submitted successfully
          

          console.log("Form submitted successfully");
          //Redirect to home Page after 3 Seconds
          setTimeout(()=>{
            navigate('/')
          },2500)

          // Reset the form after submission
          setFormData({
            YourName: "",
            currentCountry: "",
            from: "",
            to: "",
            journeyDate: "",
            returnDate: "",
            airlines: "",
            contactNumber: "",
            instagramprofile:"",
            submitted:true,
          });
          
          setErrors({});
        } else {
          // Error occurred while submitting the form
          alert("Error occurred while submitting the form");

          // Handle the error as needed
        }
      } catch (error) {
        alert("Error occurred while submitting the form", error);
        console.log(error);
        // Handle the error as needed
      }
    }
  };

  const validateForm = () => {
    const errors = {};
    // Add your validation rules for the entire form
    if (formData.YourName.trim() === "") {
      errors.YourName = "You dont have name weird";
    }
    if (formData.currentCountry.trim() === "") {
      errors.currentCountry = "Current country is required";
    }
    if (formData.from.trim() === "") {
      errors.from = "From field is required";
    }
    if (formData.to.trim() === "") {
      errors.to = "To field is required";
    }
    if (formData.journeyDate.trim() === "") {
      errors.journeyDate = "Journey date is required";
    }
    if (formData.airlines.trim() === "") {
      errors.airlines = "Airlines field is required";
    }
    if (formData.contactNumber.trim() === "") {
      if(formData.instagramprofile.trim() ===""){
        errors.contactNumber="Please Provide either a contact number or an Instagram Profile"
      }
      // errors.contactNumber = "Contact number is required";
    }
    // if (!formData.contactNumber && !formData.instagramprofile) {
    //   errors.message = "Please Provide either a contact number or an Instagram Profile";
    // }
    // Add more validations based on your requirements
    return errors;
  };

  const validateField = (fieldName, value) => {
    const fieldErrors = {};
    // Add your validation rules for each field
    switch (fieldName) {
      case "YourName":
        if (value.trim() === "") {
          fieldErrors[fieldName] = "You Dont Have Name Weird";
        }
        break;
      case "currentCountry":
        if (value.trim() === "") {
          fieldErrors[fieldName] = "Current country is required";
        }
        break;
      case "from":
        if (value.trim() === "") {
          fieldErrors[fieldName] = "From field is required";
        }
        break;
      case "to":
        if (value.trim() === "") {
          fieldErrors[fieldName] = "To field is required";
        }
        break;
      case "journeyDate":
        if (value.trim() === "") {
          fieldErrors[fieldName] = "Journey date is required";
        } else {
          const currentDate = new Date();
          const selectedDate = new Date(value);
          if (selectedDate <= currentDate) {
            fieldErrors[fieldName] = "Journey date should not be in the past";
          }
        }
        break;
      case "returnDate":
        if (value.trim() === "") {
          fieldErrors[fieldName] = "Journey date is required";
        } else {
          const currentDate = new Date();
          const selectedDate = new Date(value);
          if (selectedDate <= currentDate) {
            fieldErrors[fieldName] = "Journey date should not be in the past";
          }
        }
        break;
      case "airlines":
        if (value.trim() === "") {
          fieldErrors[fieldName] = "Airlines field is required";
        }
        break;
      case "contactNumber":
        if (value.trim() === "") {
          fieldErrors[fieldName] = "Please Provide either a contact number or an Instagram Profile";
        } else if (!/^\d+$/.test(value)) {
          fieldErrors[fieldName] = "Contact Number Should contain Only Numbers";
        }
        break;
      case "instagramprofile":
        if (value.trim() === "") {
          fieldErrors[fieldName] = "Please Provide either a contact number or an Instagram Profile";
        } else {
          fieldErrors[fieldName] = null;
        }
      break;
      // Add more field-specific validations
      default:
        break;
    }
    return fieldErrors;
  };

  const countries = ["India", "Canada", "Australia", "UK", "USA"];
  return (
    <div className="bg-cyan-700	max-w-md mx-auto mt-8  p-6 rounded-md shadow-md">
      <h2 className="text-2xl mb-6 font-extrabold">Travel Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="yourName" className="">
            Your-Name
          </label>
          <input
            type="text"
            id="YourName"
            name="YourName"
            value={formData.YourName}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.YourName ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.YourName && (
            <span className="text-red-500 text-sm">{errors.YourName}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="currentCountry" className="block mb-1">
            Current Country:
          </label>
          <select
            type="text"
            id="currentCountry"
            name="currentCountry"
            value={formData.currentCountry}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.currentCountry ? "border-red-500" : "border-gray-300"
            } rounded`}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.currentCountry && (
            <span className="text-red-500 text-sm">
              {errors.currentCountry}
            </span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="from" className="block mb-1">
            From Airport:
          </label>
          <input
            type="text"
            id="from"
            name="from"
            value={formData.from}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.from ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.from && (
            <span className="text-red-500 text-sm">{errors.from}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="to" className="block mb-1">
            To Airport:
          </label>
          <input
            type="text"
            id="to"
            name="to"
            value={formData.to}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.to ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.to && (
            <span className="text-red-500 text-sm">{errors.to}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="journeyDate" className="block mb-1">
            Journey Date:
          </label>
          <input
            type="date"
            id="journeyDate"
            name="journeyDate"
            value={formData.journeyDate}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.journeyDate ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.journeyDate && (
            <span className="text-red-500 text-sm">{errors.journeyDate}</span>
          )}
        </div>
      {/* Conditionally render the return date field */}
        
        <div className="mb-4">
          <label htmlFor="returnDate" className="block mb-1">
            Return Date (optional):
          </label>
          <input
            type="date"
            id="returnDate"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="airlines" className="block mb-1">
            Airlines:
          </label>
          <input
            type="text"
            id="airlines"
            name="airlines"
            value={formData.airlines}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.airlines ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.airlines && (
            <span className="text-red-500 text-sm">{errors.airlines}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block mb-1">
            Contact Number:(Only Give Whatsapp Number)
          </label>
          <input
            type="text"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.contactNumber ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.contactNumber && (
            <span className="text-red-500 text-sm">{errors.contactNumber}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="instagramprofile" className="block mb-1">
            Connect on instagram (For Ex: @master__raj)
          </label>
          <input
            type="text"
            id="instagramprofile"
            name="instagramprofile"
            value={formData.instagramprofile}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.contactNumber ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.contactNumber && (
            <span className="text-red-500 text-sm">{errors.contactNumber}</span>
          )}
        </div>
        <div className="grid grid-cols-3 gap-3">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
          {formData.submitted && (
            <p className="text-green-500 mt-2">Travel Saved...!!!</p>
          )}
        </div>
      </form>
    </div>
  );
};

export default TravelForm;
