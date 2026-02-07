import React from "react";
import "./Footer.css";
import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";
import footerBg from "../../assets/footer-bg.jpg";

const Footer = () => {
  const ulVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const liVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

  
  return (
    <div
      className="footer"
      style={{ backgroundImage: `url(${footerBg})` }}
    >
      <div className="footer-content">
        <div className="footer-main">
          <h1>Relix</h1>

          <p className="footer-desc">
            Transforming spaces with elegance and functionality. Explore our
            services, get inspired by our blog, and connect with us to create
            your dream interiors.
          </p>
        </div>

        <div className="footer-links">
         <motion.ul
  className="footer-link-items1"
  variants={ulVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.li variants={liVariants}>Services</motion.li>
  <motion.li variants={liVariants}>Interior Design</motion.li>
  <motion.li variants={liVariants}>Custom Furniture</motion.li>
  <motion.li variants={liVariants}>3D Visualization</motion.li>
  <motion.li variants={liVariants}>Space Planning</motion.li>
  <motion.li variants={liVariants}>Project Management</motion.li>
</motion.ul>

    <motion.ul
  className="footer-link-items2"
  variants={ulVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
  <motion.li variants={liVariants}>Company</motion.li>
  <motion.li variants={liVariants}>About Us</motion.li>
  <motion.li variants={liVariants}>Portfolio</motion.li>
  <motion.li variants={liVariants}>Testimonials</motion.li>
  <motion.li variants={liVariants}>Careers</motion.li>
  <motion.li variants={liVariants}>Contact Us</motion.li>
</motion.ul>


 

          <motion.ul
  className="footer-link-items3"
  variants={ulVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
>
            <motion.li variants={liVariants}>Resources</motion.li>
            <motion.li variants={liVariants}>Blog</motion.li>
            <motion.li variants={liVariants}>Design Trends</motion.li>
            <motion.li variants={liVariants}>FAQs</motion.li>
            <motion.li variants={liVariants}>Support</motion.li>
          </motion.ul>
        </div>

        <div className="social-icons">
          <Instagram size={20} />
          <Linkedin size={20} />
          <Twitter size={20} />
          <Youtube size={20} />
        </div>
      </div>
    </div>
  );
};

export default Footer;

console.log("Footer component rendered");