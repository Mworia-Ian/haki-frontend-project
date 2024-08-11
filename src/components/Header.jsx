import React, { useState } from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { MdOutlineMessage } from 'react-icons/md';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  return (
    <div className="flex justify-end">
      <div className="flex mr-14 text-3xl gap-5 mb-5 text-[#37B9F1]">
        <div className="relative">
          <button onClick={() => setShowNotifications(!showNotifications)}>
            <IoIosNotifications />
          </button>
          {showNotifications && (
            <div className="text-sm absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
              {/* Notifications content */}
              <div className="px-4 py-2">Notification 1</div>
              <div className="px-4 py-2">Notification 2</div>
            </div>
          )}
        </div>
        <div className="relative">
          <button onClick={() => setShowMessages(!showMessages)}>
            <MdOutlineMessage />
          </button>
          {showMessages && (
            <div className="text-sm absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
              {/* Messages content */}
              <div className="px-4 py-2">Message 1</div>
              <div className="px-4 py-2">Message 2</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;