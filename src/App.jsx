import React from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <AboutUs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
