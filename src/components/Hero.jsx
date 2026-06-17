import React from "react";

function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Welcome to My Website</h1>
      <p>This is a simple landing page built by a student .</p>
      <div className ="hero-container">
      <img
        src="https://images.unsplash.com/photo-1773332611514-238856b76198?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero"
        className="hero-image"
      />
      <div className ="testimonials">
        <h2>Testimonials</h2>
        <p>"This website is amazing!"-A Happy User</p>
        <p>"Great work by Komal!"-Kuldeep</p>
      </div>
      </div>
    </section>
  );
}

export default Hero;
