import React from "react";
import "./homePage.css";
import Newarrival from "./homecomponents/newarrival/Newarrival";
import Parallax from "./homecomponents/Parallax/Parallax";
import Catalogdemo from "./homecomponents/catalog/catalogdemo/Catalogdemo";
import Review from "./homecomponents/review/Review";
import Services from "./homecomponents/services/Services";

const HomePage = () => {
  return (
    <div className="homepage">
      <h1 className="homepage-title"> Inspired Living</h1>
      <div className="homepage-content">
        <p className="homepage-description">
          Transform your spaces with elegance and functionality. Explore our
          services, get inspired by our designs, and create your dream interiors
          today!
        </p>
        <div className="homepage-button">
          <button className="homepage-button1">Get Started</button>
          <button className="homepage-button2">View Catalogue</button>
        </div>
      </div>

      <div className="homepage-stats">
        <div className="stat-item">
          <span className="stat-number">82k+</span> Happy Clients
        </div>
        <div className="stat-item">
          <span className="stat-number">78k+</span> Premium Products
        </div>
        <div className="stat-item">
          <span className="stat-number">868k+</span> Projects Completed
        </div>
        <div className="stat-item">
          <span className="stat-number">150k+</span> Design Consultations
        </div>
      </div>
      <div className="homepage-newarrival-section">
        <Newarrival />
      </div>
      <div className="services-section">
        <Services />
      </div>

      <div className="homepage-parallax-section">
        <Parallax />
      </div>
      <div className="homepage-catalogdemo-section">
        <Catalogdemo />
      </div>

      <div className="review-section">
        <Review />
      </div>
    </div>
  );
};

export default HomePage;
