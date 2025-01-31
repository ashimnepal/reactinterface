import React from 'react';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { FaSearch, FaCaretDown,FaCheck } from "react-icons/fa";
import { useState } from 'react';


const Search = () => {
  let [toggleDrop, setToggleDrop] = useState(false);
  return (
    <div className="py-5">
      <div className="mt-1 relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FaSearch />
          <label htmlFor="query" className="sr-only"></label>
        </div>
        
        <input
          type="text"
          name="query"
          id="query"
          value=""
          className="pl-2 rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-s"
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <div>
            <button onClick={()=>{setToggleDrop(!toggleDrop)} }
              type="button"
              className="justify-center px-4 py-2 bg-blue-400 border-2 border-blue-400 text-sm text-white"
            >
              Sort By <FaCaretDown className="ml-2" />
            </button>
            <DropDown toggle={toggleDrop}/>
          </div>
        </div>
      </div>
    </div>
  );
};
const DropDown = ({toggle}) => {
  if (!toggle)
    {
      return null;
    }
  return(
    <div className="origin-top-right absolute right-0 mt-2 w-56
    rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <div
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem">Pet Name <FaCheck /></div>
      <div
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem">Owner Name  <FaCheck /></div>
      <div
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem">Date <FaCheck /></div>
      <div
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer border-gray-1 border-t-2"
        role="menuitem">Asc <FaCheck /></div>
      <div
        className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex justify-between cursor-pointer"
        role="menuitem">Desc <FaCheck /></div>
    </div>
  </div>
  )
}
export default Search;
