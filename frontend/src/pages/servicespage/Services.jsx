import React from "react";
import "./Services.css";

const services = [
  {
    title: "Residential Interior Design",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Commercial Interior Design",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Office Space Planning",
    image:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Luxury Interior Design",
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Furniture & Decor Selection",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Space Optimization",
    image:
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Lighting Design",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Kitchen & Bath Remodeling",
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Custom Wall Treatments",
    image:
      "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Outdoor & Patio Design",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Minimalist Interiors",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "3D Visualization & Rendering",
    image:
      "https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?auto=format&fit=crop&w=1200&q=80"
  }
];

const Services = () => {
  return (
    <section className="services">
      <div className="services-header">
        <h1>Our Services</h1>
        <h2>Transforming Spaces with Style</h2>
        <p>Explore our expert interior design services tailored to your needs.</p>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div
            key={index}
            className="service-card"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="service-overlay">
              <h3>{item.title}</h3>
              <span>Explore →</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

