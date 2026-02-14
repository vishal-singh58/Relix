import React, { useEffect } from "react";
import "./Contact.css";

const Contact = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    items.forEach((item) => observer.observe(item));
  }, []);

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero fade-in">
        <h1>Get in Touch</h1>
        <p>Let’s craft elegant spaces together</p>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact-container fade-in">

        {/* FORM */}
        <div className="glass-card contact-form">
          <h2>Send a Message</h2>

          <form>
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
            <input type="text" placeholder="Subject" />
            <textarea rows="4" placeholder="Your Message"></textarea>
            <button>Submit</button>
          </form>
        </div>

        {/* INFO */}
        <div className="glass-card contact-info">
          <h2>Visit Our Showroom</h2>

          <p><strong>📍 Address:</strong> MG Road, New Delhi</p>
          <p><strong>📞 Phone:</strong> +91 98765 43210</p>
          <p><strong>✉ Email:</strong> hello@luxefurniture.com</p>
          <p><strong>🕒 Hours:</strong> Mon – Sat, 10 AM – 8 PM</p>
        </div>

      </section>

      {/* MAP */}
      <section className="map-section fade-in">
        <iframe
          title="Showroom Location"
          src="https://www.google.com/maps?q=MG%20Road%20New%20Delhi&output=embed"
          loading="lazy"
        ></iframe>
      </section>

    </div>
  );
};

export default Contact;
