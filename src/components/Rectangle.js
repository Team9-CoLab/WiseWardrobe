import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const Rectangle = () => {
  return (
    <div className="flex gap-2">
      <div className="w-24 h-28  bg-gray-300  flex  justify-end items-end  py-0 ">
      <FontAwesomeIcon icon={faHeart} className=" cursor-pointer text-white py-1 px-1 " />
      </div>
      
      <div className="w-24 h-28 bg-gray-300  flex  justify-end items-end  py-0 rectangle">
      <FontAwesomeIcon icon={faHeart} className="text-white cursor-pointer  py-1 px-1 " />
      </div>
      <div className="w-24 h-28  bg-gray-300  flex  justify-end items-end  py-0">
      <FontAwesomeIcon icon={faHeart} className="text-white cursor-pointer  py-1 px-1 " />
      </div>
    </div>
  );
}

export default Rectangle;
