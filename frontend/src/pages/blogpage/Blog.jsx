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

    return () => observer.disconnect();
  }, []);

  return (
    <div className="blog-detail">

      {/* HERO */}

      <section className="blog-hero fade-in">
        <div className="overlay"></div>

        <div className="hero-content">
          <span className="category">Interior Design</span>

          <h1>
            Luxury Meets Comfort: The Future of Modern Furniture
          </h1>

          <p>
            Discover how premium interiors blend elegance,
            sustainability, and timeless comfort.
          </p>

          <div className="author">
            <img
              src="https://i.pravatar.cc/80"
              alt="author"
            />
            <div>
              <h4>Admin</h4>
              <span>February 2026 • 6 min read</span>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURE IMAGE */}

      <div className="blog-image fade-in">
        <img
          src="https://images.unsplash.com/photo-1615874959474-d609969a20ed"
          alt="Modern Interior"
        />
      </div>

      {/* CONTENT */}

      <div className="blog-content fade-in">

        <p className="lead">
          Modern furniture is no longer just about aesthetics.
          It represents lifestyle, innovation, and sustainable luxury.
        </p>

        <h2>Design That Defines Lifestyle</h2>

        <p>
          Every piece of furniture tells a story. From handcrafted
          wooden tables to premium velvet sofas, today’s interiors
          balance beauty with functionality.
        </p>

        <blockquote>
          “Great interiors don't just decorate spaces —
          they shape experiences.”
        </blockquote>

        <h2>Minimalism with Maximum Impact</h2>

        <p>
          Clean lines, warm textures, and smart organization
          define modern living spaces. Luxury today means
          thoughtful simplicity.
        </p>

      </div>

      {/* SHOP LOOK */}

      <section className="shop-look fade-in">

        <h2>Shop The Look</h2>

        <div className="shop-grid">

          <div className="product-card">

            <img
              src="https://images.unsplash.com/photo-1505691938895-1758d7feb511"
              alt=""
            />

            <div className="product-info">
              <h3>Velvet Luxe Sofa</h3>
              <p>₹54,999</p>
              <button>View Product</button>
            </div>

          </div>

          <div className="product-card">

            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
              alt=""
            />

            <div className="product-info">
              <h3>Walnut Coffee Table</h3>
              <p>₹18,499</p>
              <button>View Product</button>
            </div>

          </div>

          <div className="product-card">

            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36"
              alt=""
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