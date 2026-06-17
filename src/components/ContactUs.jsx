import React from "react";

function ContactUs() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" className="form-input" />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" className="form-input" />
        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit" className = "form-button">Send </button>
      </form>
    </section>
  );
}

export default ContactUs;
