"use client"

import React, { useState, useEffect } from 'react';
import './Testimonials.css';

export default function Testimonials () {

  const api = `${window.location.origin}/api/testimonials`

  const [testimonials, setTestimonials] = useState([])
  const [testimonialFormData, setTestimonialFormData] = useState({
    name: '',
    message: '',
    email: '',
    phone: ''
  });
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const getTestimonials = async () => {
    setIsLoading(true); // Start loading
    const res = await fetch(api);
    const json = await res.json();
    setTestimonials(json.data);
    setIsLoading(false); // Stop loading
  }

  useEffect(() => {
    getTestimonials();
  }, [])

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submission action
    setIsLoading(true); // Start loading

    const name = testimonialFormData.name;
    const message = testimonialFormData.message;
    const email = testimonialFormData.email;
    const phone_number = testimonialFormData.phone_number;

    const testimonial = { name, message, email, phone_number };

    try {
      const res = await fetch(api, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(testimonial),
      })
      console.log(res)

      if (res.ok) {
        // Clear the input fields
        setTestimonialFormData({
          name: '',
          message: '',
          email: '',
          phone: ''
        });

        // Fetch the updated testimonials
        await getTestimonials();
      } else {
        // Handle errors here, e.g., show a notification to the user
        console.error("Failed to submit testimonial");
      }
    } catch (error) {
      // Handle network errors here
      console.error("Network error:", error);
    }

    setIsLoading(false); // Stop loading
  }


  return (
    <div className='testimonials-container'>
      {isLoading ? (
        <p>Loading...</p> // Simple text loading indicator
      ) : (
        <div className='testimonials-list-container'>
          <h1 className='testimonials-header'>Testimonials</h1>
          <div className='testimonials-list'>
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className='testimonial'>
                  <h3 className='testimonial-name'>{testimonial.name}</h3>
                  <p className='testimonial-message'>{testimonial.message}</p>
                  {testimonial.email && <p className='testimonial-email'>Email: {testimonial.email}</p>}
                  {testimonial.phone_number && <p className='testimonial-phone'>Phone: {testimonial.phone_number}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
      <div className='testimonial-form-container'>
        <h1 className='testimonials-header'>Submit a Testimonial</h1>
        <form onSubmit={handleFormSubmit}>
          <input
              type="text"
              placeholder="Name"
              value={testimonialFormData.name}
              onChange={e => setTestimonialFormData({ ...testimonialFormData, name: e.target.value })}
              required
          />
          <textarea
              placeholder="Message"
              value={testimonialFormData.message}
              onChange={e => setTestimonialFormData({ ...testimonialFormData, message: e.target.value })}
              required
          />
          <input
              type="email"
              placeholder="Email (optional)"
              value={testimonialFormData.email}
              onChange={e => setTestimonialFormData({ ...testimonialFormData, email: e.target.value })}
          />
          <input
              type="text"
              placeholder="Phone (optional)"
              value={testimonialFormData.phone_number}
              onChange={e => setTestimonialFormData({ ...testimonialFormData, phone_number: e.target.value })}
          />
          <button type="submit">Submit Testimonial</button>
        </form>
      </div>
    </div>
  )
}