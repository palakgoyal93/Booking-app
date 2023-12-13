import React, { useState, useEffect } from 'react';

const BookingList = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    
    const fetchBookings = async () => {
      try {
        const response = await fetch('http://localhost:8080/bookings');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setBookings(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    
    fetchBookings();
  }, []);

  return (
    <div>
      <h2>Booking List</h2>
      <ul>
        {bookings.map((booking) => (
          <li key={booking.id}>
            Date: {booking.date}, Time: {booking.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingList;
