// src/BookingPage.js
import React from 'react';
import BookingForm from './BookingForm'; // BookingForm bileşenini import ediyoruz

function BookingPage() {
  return (
    <div className="booking-page">
      <h2>Reserve a Table</h2>
      <BookingForm /> {/* BookingForm bileşenini burada kullanıyoruz */}
    </div>
  );
}

export default BookingPage;
