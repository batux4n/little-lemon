// src/Testimonials.js
import React from 'react';

function Testimonials() {
  // Yorumlar verisini array içinde tutuyoruz
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      photo: 'user1.jpg',  // Burada fotoğraf yolunu değiştirebilirsiniz
      rating: 4,
      review: 'An amazing experience! The food was authentic and delicious, and the service was top-notch. Highly recommend!'
    },
    {
      id: 2,
      name: 'Jane Smith',
      photo: 'user2.jpg',  // Burada fotoğraf yolunu değiştirebilirsiniz
      rating: 5,
      review: 'The atmosphere was cozy, and the flavors were out of this world. Can\'t wait to return!'
    },
    {
      id: 3,
      name: 'Michael Johnson',
      photo: 'user3.jpg',  // Burada fotoğraf yolunu değiştirebilirsiniz
      rating: 4,
      review: 'A wonderful dining experience. The staff were friendly and attentive. The food was so flavorful!'
    },
    {
      id: 4,
      name: 'Sarah Williams',
      photo: 'user4.jpg',  // Burada fotoğraf yolunu değiştirebilirsiniz
      rating: 5,
      review: 'Best Mediterranean food in town! Everything was perfect, from the appetizer to the dessert.'
    },
  ];

  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-cards">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <img
              src={testimonial.photo}
              alt={`Profile of ${testimonial.name}`}
              className="profile-photo"
            />
            <div className="rating">
              <span>{'★'.repeat(testimonial.rating)}{'☆'.repeat(5 - testimonial.rating)}</span> {/* Yıldızları dinamik şekilde render ediyoruz */}
            </div>
            <p className="review">"{testimonial.review}"</p>
            <p className="user-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
