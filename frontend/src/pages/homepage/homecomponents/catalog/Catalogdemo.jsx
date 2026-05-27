import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Catalog.css";

const images = [
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1200&q=80",
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200&q=80",
  "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&q=80",
  "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=900&q=80",
];

const Catalogdemo = () => {
  return (
    <section className="catalog-section">
      {/* Title */}
      <motion.h2
        className="catalog-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Explore our proudly work
      </motion.h2>

      {/* Masonry */}
      <div className="masonry">
        {images.map((src, i) => (
          <BlurImage key={i} src={src} />
        ))}
      </div>
    </section>
  );
};

const BlurImage = ({ src }) => {
  const [loaded, setLoaded] = useState(false);

  return (
      <motion.div
      className="masonry-item"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <img
        src={src}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        className={`masonry-img ${loaded ? "loaded" : ""}`}
        alt="Work preview"
      />

      {/* Simple Arrow */}
      <Link to="/catalogue" className="image-arrow">
        ↗
      </Link>
    </motion.div>
  );
};


export default Catalogdemo;

