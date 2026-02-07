import { motion } from "framer-motion";
import "./Review.css";

const testimonials = [
  {
    text: "The quality and attention to detail is insane. It feels truly premium.",
    name: "Aarav Mehta",
    role: "Interior Designer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Minimal, elegant and beautifully executed. Exactly what we needed.",
    name: "Sara Khan",
    role: "Creative Director",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    text: "Clients instantly noticed the difference. Highly recommended.",
    name: "Rohit Sharma",
    role: "Product Lead",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function Testimonials() {
  return (
    <section className="homepage-testimonials-section">
      <h2 className="homepage-testimonials-title">
        What People Say
      </h2>

      <motion.div
        className="homepage-testimonials"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {testimonials.map((t, i) => (
          <motion.div
            className="testimonial-item glass"
            variants={item}
            key={i}
          >
            <p className="testimonial-text">{t.text}</p>

            <div className="testimonial-author">
              <img src={t.avatar} alt={t.name} />
              <div>
                <strong>
                  {t.name}
                  <span className="verified">✔</span>
                </strong>
                <span>{t.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
