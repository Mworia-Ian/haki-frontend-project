import React, { useState, useEffect } from 'react';
import { IoIosNotifications } from 'react-icons/io';
import { MdOutlineMessage } from 'react-icons/md';
import { parseISO, format } from 'date-fns';

const Header = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const fetchSubscriptionStatus = async () => {
      try {
        const session = JSON.parse(localStorage.getItem('session'));
        const token = session?.accessToken;

        if (!token) {
          console.error('No token found in localStorage');
          setNotifications(["Error: No token found. Please log in again."]);
          return;
        }

        const response = await fetch('http://localhost:5000/subscription', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.ok) {
          const data = await response.json();
          console.log('Fetched subscription data:', data);

          if (data.message) {
            console.warn(data.message);
            setNotifications([data.message]);
            return;
          }

          const { start_date, end_date } = data;

          if (!start_date || !end_date) {
            setNotifications(["Error: Subscription data is missing dates."]);
            return;
          }

          let formattedStartDate = 'N/A';
          let formattedEndDate = 'N/A';

          try {
            const startDate = parseISO(start_date);
            const endDate = parseISO(end_date);

            if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) {
              throw new Error('Invalid date format');
            }

            formattedStartDate = format(startDate, 'MM/dd/yyyy');
            formattedEndDate = format(endDate, 'MM/dd/yyyy');
          } catch (error) {
            console.error('Error parsing dates:', error);
            setNotifications(["Error: Invalid date format received."]);
            return;
          }

          setNotifications([`Your subscription is active from ${formattedStartDate} to ${formattedEndDate}.`]);
        } else {
          console.error('Failed to fetch subscription status:', response.statusText);
          setNotifications(["Error fetching subscription status."]);
        }
      } catch (error) {
        console.error('Error occurred while fetching subscription status:', error);
        setNotifications(["Error fetching subscription status."]);
      }
    };

    fetchSubscriptionStatus();
  }, []);

  return (
    <div className="flex justify-end">
      <div className="flex mr-14 text-3xl gap-5 mb-5 text-[#37B9F1]">
        <div className="relative">
          <button onClick={() => setShowNotifications(!showNotifications)}>
            <IoIosNotifications />
          </button>
          {showNotifications && (
            <div className="text-sm absolute right-0 mt-2 w-64 bg-white rounded-md shadow-lg py-2 z-10">
              {notifications.length > 0 ? (
                notifications.map((notification, index) => (
                  <div key={index} className="px-4 py-2">{notification}</div>
                ))
              ) : (
                <div className="px-4 py-2">No notifications available.</div>
              )}
            </div>
          )}
        </div>
        <div className="relative">
          <button>
            <MdOutlineMessage />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
