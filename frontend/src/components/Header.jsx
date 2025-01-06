'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { CgProfile } from "react-icons/cg";
import { FaRegBell } from "react-icons/fa";
import NotificationPopup from './NotificationPopup';


const Header = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [notification, setNotification] = useState([]);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const notify = (message) => {
    setNotification((prevNotification) => [...prevNotification, message]);
  };
  return (
    <div>
      <header className="header h-24 sticky top-0 bg-gray-800  flex items-center justify-between px-8 py-02">
        <Image
          width={200}
          height={200}
          src={"/logo.png"}
          alt=''
          className=''
        />

        <nav className="nav font-semibold text-lg text-white">
          <ul className="flex items-center ml-64">

            <li className="p-4 border-b-2 marker: mt-5 border-green-500 border-opacity-0 hover:border-opacity-100  duration-200 cursor-pointer">
              <FaRegBell
                className='text-4xl'
                onClick={togglePopup} // Toggle popup on click
              />
              {isPopupOpen && (
                <NotificationPopup
                  onClose={closePopup}
                // notification={notification}
                /> // Display the popup when open
              )}
            </li>
            <li className="p-4 border-b-2 mt-5 border-green-500 border-opacity-0 hover:border-opacity-100  duration-200 cursor-pointer">
              <CgProfile
                className='text-4xl'
              />
            </li>
          </ul>
        </nav>
      </header>
      {/* <StudentTable
        students={[]}
        
        notify={notify}
      /> */}

    </div>
  )
}

export default Header
