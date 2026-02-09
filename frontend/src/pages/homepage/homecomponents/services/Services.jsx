import React from 'react'
import "./Services.css";

import { HouseHeart, Component, TentTree } from "lucide-react";

const Services = () => {
  return (
     <div className="homepage-services-section">
        <h1 className="homepage-services-title">Our Services</h1>
        <div className="homepage-services">
          <div className="service-item">
            <h2 className="service-title">
              <HouseHeart size={24} /> Lighting Design
            </h2>
            <p className="service-description">
              Achieve the perfect balance of ambient, task, and accent lighting
              for a functional atmosphere
            </p>
          </div>
          <div className="service-item">
            <h2 className="service-title">
              <Component size={24} /> Interior Design
            </h2>
            <p className="service-description">
              From concept to completion, we oversee every detail to bring your
              vision to life efficiently
            </p>
          </div>
          <div className="service-item">
            <h2 className="service-title">
              {" "}
              <TentTree size={24} /> Outdoor Design
            </h2>
            <p className="service-description">
              Celebrate the changing seasons with our seasonal outdoor decor
              services
            </p>
          </div>
        </div>
      </div>
  )
}

export default Services