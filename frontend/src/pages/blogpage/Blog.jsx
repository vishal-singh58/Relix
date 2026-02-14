import React, { useEffect } from "react";
import "./Blog.css";

const BlogDetail = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

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

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="blog-detail">

      {/* HERO */}
      <section className="blog-hero fade-in">
        <h1>Luxury Meets Comfort: The Future of Modern Furniture</h1>
        <p>By Admin • February 2026 • Interior Design</p>
      </section>

      {/* FEATURED IMAGE */}
      <div className="blog-image fade-in">
        <img
          src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
          alt="Modern Living Room"
        />
      </div>

      {/* CONTENT */}
      <div className="blog-content fade-in">
        <p>
          Modern furniture blends functionality with elegance. Today’s
          designs focus on sustainability, minimalism, and comfort.
        </p>

        <h2>Design That Defines Lifestyle</h2>
        <p>
          Every piece of furniture reflects personality. From premium sofas
          to handcrafted wooden tables, luxury interiors balance beauty and utility.
        </p>
      </div>

      {/* 🛒 SHOP THE LOOK SECTION */}
      <section className="shop-look fade-in">
        <h2>Shop the Look</h2>

        <div className="shop-grid">

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt="Luxury Sofa"
            />
            <div className="product-info">
              <h3>Velvet Luxe Sofa</h3>
              <p>₹54,999</p>
              <button>View Product</button>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1493666438817-866a91353ca9"
              alt="Coffee Table"
            />
            <div className="product-info">
              <h3>Walnut Coffee Table</h3>
              <p>₹18,499</p>
              <button>View Product</button>
            </div>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww"
              alt="Accent Chair"
            />
            <div className="product-info">
              <h3>Modern Accent Chair</h3>
              <p>₹22,999</p>
              <button>View Product</button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};

export default BlogDetail;


