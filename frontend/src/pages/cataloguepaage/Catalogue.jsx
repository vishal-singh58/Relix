import React from "react";
import "./Catalogue.css";

const furnitureItems = [
  {
    id: 1,
    title: "Sleek Living Spaces",
    category: "Sofas & Coffee Tables",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Elegant Bedrooms",
    category: "Beds & Nightstands",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Scandinavian Dining",
    category: "Tables & Chairs",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Chic Workspaces",
    category: "Desks & Office Chairs",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Outdoor Retreats",
    category: "Patio & Lounges",
    image:
      "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Decor & Lighting",
    category: "Accent Pieces",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop",
  }, {
    id: 1,
    title: "Sleek Living Spaces",
    category: "Sofas & Coffee Tables",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Elegant Bedrooms",
    category: "Beds & Nightstands",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Scandinavian Dining",
    category: "Tables & Chairs",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  }, {
    id: 1,
    title: "Sleek Living Spaces",
    category: "Sofas & Coffee Tables",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Elegant Bedrooms",
    category: "Beds & Nightstands",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Scandinavian Dining",
    category: "Tables & Chairs",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  }, {
    id: 1,
    title: "Sleek Living Spaces",
    category: "Sofas & Coffee Tables",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Elegant Bedrooms",
    category: "Beds & Nightstands",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Scandinavian Dining",
    category: "Tables & Chairs",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",
  }
];

export default function FurnitureCatalogue() {
  return (
    <div className="catalogue">
      <div className="catalogue-header">
        <h1>Modern Furniture Collection</h1>
        <p>Quality Design | Timeless Style</p>
      </div>

      <div className="catalogue-grid">
        {furnitureItems.map((item) => (
          <div className="catalogue-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <div className="overlay">
              <h2>{item.title}</h2>
              <span>{item.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
