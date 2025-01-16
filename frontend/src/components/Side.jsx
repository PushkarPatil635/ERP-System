// "use client";
// import React from 'react';
// import Link from 'next/link';

// const Side = () => {
//   return (
//     <aside class=" absolute  bg-gray-800 text-white w-64 min-h-screen p-4">
//     <nav>
//       <ul class="space-y-2 mt-48">
//         <li class="opcion-con-desplegable">
//           <div class="flex items-center justify-between p-2 hover:bg-gray-800 hover:text-green-500 duration-200">
//             <div class="flex items-center">
//               <Link href="/" className=' '>Home</Link>
//             </div>
//           </div>
//         </li>
//         <li class="opcion-con-desplegable">
//           <div class="flex items-center justify-between p-2 hover:bg-gray-800 hover:text-green-500 duration-200">
//             <div class="flex items-center">
//               <Link href="/students">Student Detials</Link>
//             </div>
//             <i class="fas fa-chevron-down text-xs"></i>
//           </div>
//         </li>
//       </ul>
//     </nav>
//   </aside>
//   )
// }

// export default Side
"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { FaChevronLeft } from "react-icons/fa";

const Side = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <aside className="absolute bg-gray-800 text-white w-64 min-h-screen p-4">
      <nav>
        <ul className="space-y-2 mt-48">
          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-800 hover:text-green-500 duration-200">
              <div className="flex items-center">
                <Link href="/home">Home</Link>
              </div>
            </div>
          </li>
          <li className="opcion-con-desplegable">
            <div className="flex items-center justify-between p-2 hover:bg-gray-800 hover:text-green-500 duration-200">
              <div className="flex items-center">
                <Link href="/statistics">Statistics</Link>
              </div>
            </div>
          </li>
          <li className="opcion-con-desplegable">
            <div 
              className="flex items-center justify-between p-2 hover:bg-gray-800 hover:text-green-500 duration-200 cursor-pointer" 
              onClick={toggleDropdown}
            >
              <div className="flex items-center">
                <a>All Branches</a>
              </div>
              <FaChevronLeft className={` text-xs transform duration-200 ${isDropdownOpen ? '-rotate-90' : 'rotate-180'}`}/>
            </div>
            {isDropdownOpen && (
              <ul className="ml-4 mt-2 space-y-1">
                <li>
                  <Link href="/computerEng" className="block p-2 hover:bg-gray-700 hover:text-green-500 duration-200">
                    Computer Science
                  </Link>
                </li>
                <li>
                  <Link href="/informationTechEng" className="block p-2 hover:bg-gray-700 hover:text-green-500 duration-200">
                    Information Technology
                  </Link>
                </li>
                <li>
                  <Link href="/mechanicalEng" className="block p-2 hover:bg-gray-700 hover:text-green-500 duration-200">
                    Mechanical
                  </Link>
                </li>
                <li>
                  <Link href="/civilEng" className="block p-2 hover:bg-gray-700 hover:text-green-500 duration-200">
                    Civil
                  </Link>
                </li>
                <li>
                  <Link href="/autoMobileEng" className="block p-2 hover:bg-gray-700 hover:text-green-500 duration-200">
                    Automobile eng 
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Side;

