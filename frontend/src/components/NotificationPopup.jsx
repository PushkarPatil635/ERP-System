import React, { useState } from 'react';
import StudentForm from './StudentForm';

const NotificationPopup = ({ onClose, notifications }) => {
  return (
    <div className="absolute right-10 top-28 bg-gray-100 text-black shadow-md p-4 rounded-lg w-64 z-50">
      <div className="flex justify-between items-center">
        <h4 className="text-lg font-semibold">Notifications</h4>
        <button onClick={onClose} className="text-red-500 font-bold">X</button>
      </div>
      <ul className="mt-4">
        {notifications.length > 0 ? (
          notifications.map((notification, index) => (
            <li key={index} className="py-2 border-b">{notification}</li>
          ))
        ) : (
          <li className="py-2 text-gray-500">No notifications</li>
        )}
      </ul>
    </div>
  );
};

const App = () => {
  const [notifications, setNotifications] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  const notify = (message) => {
    setNotifications((prevNotifications) => [...prevNotifications, message]);
    setShowPopup(true);
  };

  const closePopup = () => setShowPopup(false);

  return (
    <div>
      {/* Conditionally render the notification popup */}
      {showPopup && (
        <NotificationPopup onClose={closePopup} notifications={notifications} />
      )}
      
      <div className="mt-4">
        {/* Test notification button */}
        <button
          onClick={() => notify("Test notification")}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg"
        >
          Test Notification
        </button>
      </div>
      <StudentForm notify={notify} />

    </div>
  );
};

export default App;
