import React, { useState } from 'react';

const CancelBookingForm = () => {
  const [email, setEmail] = useState('');
  const [bookingId, setBookingId] = useState('');

  const handleCancelBooking = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:8080/cancel', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, bookingId }),
    })
      .then((response) => {
        if (response.ok) {
          
        } else {
          
        }
      })
      .catch((error) => console.error('Error cancelling appointment:', error));
  };

  return (
    <div>
      <h2>Cancel Appointment</h2>
      <form onSubmit={handleCancelBooking}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Booking ID:</label>
        <input type="text" value={bookingId} onChange={(e) => setBookingId(e.target.value)} required />
        <button type="submit">Cancel</button>
      </form>
    </div>
  );
};

export default CancelBookingForm;
