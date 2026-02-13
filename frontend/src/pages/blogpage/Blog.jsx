import React, { useEffect } from "react";
import "./Blog.css";

export default function LuxuryFurnitureBlog() {

  // Scroll Fade-in Effect
  useEffect(() => {
    const sections = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="luxury-blog">

      {/* HERO */}
      <div className="luxury-hero">
        <img
          src="https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1600&auto=format&fit=crop"
          alt="Luxury Interior"
        />
        <div className="glass-hero">
          <h1>Luxury Furniture That Completes Your Space</h1>
          <p>Timeless Elegance • Modern Comfort</p>
        </div>
      </div>

      {/* MAIN CONTENT + SIDEBAR */}
      <div className="blog-layout">

        {/* BLOG CONTENT */}
        <div className="blog-main">
          <section className="fade-in">
            <h2>Furniture Defines Identity</h2>
            <p>
              Luxury furniture doesn’t just decorate — it defines the character
              of your home. Carefully selected textures, finishes, and shapes
              create an environment that feels curated and intentional.
            </p>
          </section>

          <section className="fade-in">
            <h2>Harmony Through Design</h2>
            <p>
              Dark walnut finishes, brushed gold accents, and premium fabrics
              elevate interiors into sophisticated living experiences.
            </p>
          </section>

          <section className="fade-in">
            <h2>Statement Pieces</h2>
            <p>
              A sculptural coffee table or velvet accent chair becomes the
              centerpiece — complementing your space while commanding attention.
            </p>
          </section>

          {/* SHOP THE LOOK */}
          <section className="shop-section fade-in">
            <h2>Shop the Look</h2>

            <div className="shop-grid">
              <div className="product">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop" alt="Sofa" />
                <h4>Velvet Luxe Sofa</h4>
                <span>$899</span>
              </div>

              <div className="product">
                <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop" alt="Dining Table" />
                <h4>Marble Dining Table</h4>
                <span>$1299</span>
              </div>

              <div className="product">
                <img src="https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop" alt="Lamp" />
                <h4>Designer Floor Lamp</h4>
                <span>$299</span>
              </div>
            </div>
          </section>
        </div>

        {/* SIDEBAR */}
        <aside className="blog-sidebar fade-in">
          <h3>Recent Articles</h3>
          <ul>
            <li>How to Style a Minimal Living Room</li>
            <li>Choosing the Perfect Accent Chair</li>
            <li>Modern Lighting Trends 2026</li>
          </ul>

          <div className="sidebar-box">
            <h4>Design Tip</h4>
            <p>
              Mix matte and glossy textures to create visual contrast in dark interiors.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
