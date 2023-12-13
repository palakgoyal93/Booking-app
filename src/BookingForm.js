import React, { useState } from 'react';

const BookingForm = () => {
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleBooking = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:8080/book', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, date, time }),
    })
      .then((response) => {
        if (response.ok) {
         
        } else {
          
        }
      })
      .catch((error) => console.error('Error booking appointment:', error));
  };

  return (
    <div>
      <h2>Book Appointment</h2>
      <form onSubmit={handleBooking}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
