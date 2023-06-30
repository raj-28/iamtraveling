// import React, { useState } from 'react';

// const TravelForm = () => {
//   const [formData, setFormData] = useState({
//     currentCountry: '',
//     from: '',
//     to: '',
//     journeyDate: '',
//     returnDate: '',
//     airlines: '',
//     contactNumber: '',
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform form validation
//     const validationErrors = validateForm();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//     } else {
//       // Submit the form data
//       // You can perform further actions here, such as saving to a database
//       console.log(formData);
//       // Reset the form after submission
//       setFormData({
//         currentCountry: '',
//         from: '',
//         to: '',
//         journeyDate: '',
//         returnDate: '',
//         airlines: '',
//         contactNumber: '',
//       });
//       setErrors({});
//     }
//   };

//   const validateForm = () => {
//     const errors = {};
//     if (formData.currentCountry.trim() === '') {
//       errors.currentCountry = 'Current country is required';
//     }
//     if (formData.from.trim() === '') {
//       errors.from = 'From field is required';
//     }
//     if (formData.to.trim() === '') {
//       errors.to = 'To field is required';
//     }
//     if (formData.journeyDate.trim() === '') {
//       errors.journeyDate = 'Journey date is required';
//     }
//     if (formData.airlines.trim() === '') {
//       errors.airlines = 'Airlines field is required';
//     }
//     if (formData.contactNumber.trim() === '') {
//       errors.contactNumber = 'Contact number is required';
//     }
//     // Add more validations based on your requirements
//     return errors;
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-md shadow-md">
//       <h2 className="text-2xl mb-6">Travel Form</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="currentCountry" className="block mb-1">
//             Current Country:
//           </label>
//           <input
//             type="text"
//             id="currentCountry"
//             name="currentCountry"
//             value={formData.currentCountry}
//             onChange={handleChange}
//             className={`w-full p-2 border ${
//               errors.currentCountry ? 'border-red-500' : 'border-gray-300'
//             } rounded`}
//           />
//           {errors.currentCountry && (
//             <span className="text-red-500 text-sm">{errors.currentCountry}</span>
//           )}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="from" className="block mb-1">
//             From:
//           </label>
//           <input
//             type="text"
//             id="from"
//             name="from"
//             value={formData.from}
//             onChange={handleChange}
//             className={`w-full p-2 border ${
//               errors.from ? 'border-red-500' : 'border-gray-300'
//             } rounded`}
//           />
//           {errors.from && <span className="text-red-500 text-sm">{errors.from}</span>}
//         </div>
//         <div className="
// mb-4">
//           <label htmlFor="to" className="block mb-1">
//             To:
//           </label>
//           <input
//             type="text"
//             id="to"
//             name="to"
//             value={formData.to}
//             onChange={handleChange}
//             className={`w-full p-2 border ${
//               errors.to ? 'border-red-500' : 'border-gray-300'
//             } rounded`}
//           />
//           {errors.to && <span className="text-red-500 text-sm">{errors.to}</span>}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="journeyDate" className="block mb-1">
//             Journey Date:
//           </label>
//           <input
//             type="date"
//             id="journeyDate"
//             name="journeyDate"
//             value={formData.journeyDate}
//             onChange={handleChange}
//             className={`w-full p-2 border ${
//               errors.journeyDate ? 'border-red-500' : 'border-gray-300'
//             } rounded`}
//           />
//           {errors.journeyDate && (
//             <span className="text-red-500 text-sm">{errors.journeyDate}</span>
//           )}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="returnDate" className="block mb-1">
//             Return Date (optional):
//           </label>
//           <input
//             type="date"
//             id="returnDate"
//             name="returnDate"
//             value={formData.returnDate}
//             onChange={handleChange}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//         <div className="mb-4">
//           <label htmlFor="airlines" className="block mb-1">
//             Airlines:
//           </label>
//           <input
//             type="text"
//             id="airlines"
//             name="airlines"
//             value={formData.airlines}
//             onChange={handleChange}
//             className={`w-full p-2 border ${
//               errors.airlines ? 'border-red-500' : 'border-gray-300'
//             } rounded`}
//           />
//           {errors.airlines && (
//             <span className="text-red-500 text-sm">{errors.airlines}</span>
//           )}
//         </div>
//         <div className="mb-4">
//           <label htmlFor="contactNumber" className="block mb-1">
//             Contact Number:
//           </label>
//           <input
//             type="tel"
//             id="contactNumber"
//             name="contactNumber"
//             value={formData.contactNumber}
//             onChange={handleChange}
//             className={`w-full p-2 border ${
//               errors.contactNumber ? 'border-red-500' : 'border-gray-300'
//             } rounded`}
//           />
//           {errors.contactNumber && (
//             <span className="text-red-500 text-sm">{errors.contactNumber}</span>
//           )}
//         </div>
//         <div>
//           <button
//             type="submit"
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default TravelForm;

import React, { useState } from 'react';

const TravelForm = () => {
  const [formData, setFormData] = useState({
    currentCountry: '',
    from: '',
    to: '',
    journeyDate: '',
    returnDate: '',
    airlines: '',
    contactNumber: '',
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform final form validation
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit the form data
      // You can perform further actions here, such as saving to a database
      console.log(formData);
      // Reset the form after submission
      setFormData({
        currentCountry: '',
        from: '',
        to: '',
        journeyDate: '',
        returnDate: '',
        airlines: '',
        contactNumber: '',
      });
      setErrors({});
    }
  };

  const validateForm = () => {
    const errors = {};
    // Add your validation rules for the entire form
    if (formData.currentCountry.trim() === '') {
      errors.currentCountry = 'Current country is required';
    }
    if (formData.from.trim() === '') {
      errors.from = 'From field is required';
    }
    if (formData.to.trim() === '') {
      errors.to = 'To field is required';
    }
    if (formData.journeyDate.trim() === '') {
      errors.journeyDate = 'Journey date is required';
    }
    if (formData.airlines.trim() === '') {
      errors.airlines = 'Airlines field is required';
    }
    if (formData.contactNumber.trim() === '') {
      errors.contactNumber = 'Contact number is required';
    }
    // Add more validations based on your requirements
    return errors;
  };

  const validateField = (fieldName, value) => {
    const fieldErrors = {};
    // Add your validation rules for each field
    switch (fieldName) {
      case 'currentCountry':
        if (value.trim() === '') {
          fieldErrors[fieldName] = 'Current country is required';
        }
        break;
      case 'from':
        if (value.trim() === '') {
          fieldErrors[fieldName] = 'From field is required';
        }
        break;
      case 'to':
        if (value.trim() === '') {
          fieldErrors[fieldName] = 'To field is required';
        }
        break;
      case 'journeyDate':
        if (value.trim() === '') {
          fieldErrors[fieldName] = 'Journey date is required';
        }else{
            const currentDate = new Date();
            const selectedDate = new Date(value);
            if(selectedDate <= currentDate){
                fieldErrors[fieldName]='Journey date should not be in the past'
            }
        }
        break;
        case 'returnDate':
        if (value.trim() === '') {
          fieldErrors[fieldName] = 'Journey date is required';
        }else{
            const currentDate = new Date();
            const selectedDate = new Date(value);
            if(selectedDate <= currentDate){
                fieldErrors[fieldName]='Journey date should not be in the past'
            }
        }
        break;
      case 'airlines':
        if (value.trim() === '') {
          fieldErrors[fieldName] = 'Airlines field is required';
        }
        break;
      case 'contactNumber':
        if (value.trim() === '') {
          fieldErrors[fieldName] = 'Contact number is required';
        }else if(!/^\d+$/.test(value)){
            fieldErrors[fieldName]='Contact Number Should contain Only Numbers'
        }
        break;
      // Add more field-specific validations
      default:
        break;
    }
    return fieldErrors;
  };

  const countries = ['India','Canada','Australia','UK','USA']
  return (
    <div className="max-w-md mx-auto mt-8 bg-white p-6 rounded-md shadow-md">
      <h2 className="text-2xl mb-6">Travel Form</h2>
      <form onSubmit={handleSubmit}>
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
              errors.currentCountry ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          ><option value="">Select Country</option>
          {countries.map((country)=>(
            <option key={country} value={country}>{country}</option>
          ))}</select>
          {errors.currentCountry && (
            <span className="text-red-500 text-sm">{errors.currentCountry}</span>
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
              errors.from ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.from && <span className="text-red-500 text-sm">{errors.from}</span>}
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
              errors.to ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.to && <span className="text-red-500 text-sm">{errors.to}</span>}
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
              errors.journeyDate ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.journeyDate && (
            <span className="text-red-500 text-sm">{errors.journeyDate}</span>
          )}
        </div>
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
              errors.airlines ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.airlines
          && (
            <span className="text-red-500 text-sm">{errors.airlines}</span>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="contactNumber" className="block mb-1">
            Contact Number:(Only Give Whatsapp Number)
          </label>
          <input
            type="tel"
            id="contactNumber"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            className={`w-full p-2 border ${
              errors.contactNumber ? 'border-red-500' : 'border-gray-300'
            } rounded`}
          />
          {errors.contactNumber && (
            <span className="text-red-500 text-sm">{errors.contactNumber}</span>
          )}
        </div>
        <div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TravelForm;