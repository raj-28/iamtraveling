import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  return <div className="px-2 md:px-0 py-3 space-y-2 md:space-y-0 md:space-x-2 font-medium text-slate-700">
    <Link
      to="/"
      className="block md:inline-block px-3 py-2 rounded-md text-white bg-gray-900 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      Home
    </Link>
    <Link
      to="#"
      className="disable block md:inline-block px-3 py-2 rounded-md text-orange-500	 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      I Have Accomodation
    </Link>
    <Link
      to="iamtraveling"
      className="block md:inline-block px-3 py-2 rounded-md text-blue-600	 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      Add Your Travel
    </Link>
    <a
      href="#"
      className="disable block md:inline-block px-3 py-2 rounded-md text-lime-500		hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white focus:bg-gray-700"
    >
      Contact-Us
    </a>
  </div>
}

export default Menu;