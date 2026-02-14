import React, { useState } from "react";
import "./FAQ.css";


  const faqDatabase = {
  sofa: [
    {
      question: "What fabric options are available for this sofa?",
      answer:
        "This sofa is available in velvet, linen, chenille, and premium leather finishes."
    },
    {
      question: "Is the sofa frame made of solid wood?",
      answer:
        "Yes, the internal frame is crafted from kiln-dried solid hardwood for durability."
    },
    {
      question: "What is the warranty period?",
      answer:
        "This sofa comes with a 2-year structural warranty."
    },
    {
      question: "What is the weight capacity of the sofa?",
      answer:
        "The sofa can comfortably support up to 350 kg evenly distributed."
    },
    {
      question: "Are cushion covers removable and washable?",
      answer:
        "Yes, selected models come with removable and dry-clean-friendly cushion covers."
    },
    {
      question: "Do you offer color customization?",
      answer:
        "Yes, you can choose from multiple fabric colors depending on stock availability."
    },
    {
      question: "Is assembly included?",
      answer:
        "Yes, professional assembly is provided free at the time of delivery."
    }
  ],

  dining: [
    {
      question: "Is the dining table scratch-resistant?",
      answer:
        "Yes, the surface includes a protective anti-scratch and water-resistant coating."
    },
    {
      question: "How many people can it seat?",
      answer:
        "This model comfortably seats 6 people."
    },
    {
      question: "What material is the tabletop made of?",
      answer:
        "The tabletop is made from engineered wood with a premium veneer finish."
    },
    {
      question: "Does the table require assembly?",
      answer:
        "Minimal assembly is required and is handled by our delivery team."
    },
    {
      question: "Is it suitable for outdoor use?",
      answer:
        "No, this dining table is designed for indoor use only."
    },
    {
      question: "Can I extend the table size?",
      answer:
        "Some models include an extendable panel feature. Please check product specifications."
    }
  ],

  bed: [
    {
      question: "Does the bed include storage?",
      answer:
        "Yes, it features hydraulic lift storage underneath."
    },
    {
      question: "Is mattress included?",
      answer:
        "No, mattress is sold separately."
    },
    {
      question: "What material is used in the bed frame?",
      answer:
        "The bed frame is constructed from engineered wood with reinforced support panels."
    },
    {
      question: "What mattress size is compatible?",
      answer:
        "This bed supports standard Queen/King size mattresses depending on the selected variant."
    },
    {
      question: "Is installation included?",
      answer:
        "Yes, installation is provided at no additional cost."
    },
    {
      question: "What is the return policy for beds?",
      answer:
        "Returns are accepted within 7 days only for damaged or defective products."
    }
  ]
};


  

export default function ProductLinkedFAQ({ productType = "sofa" }) {
  const [active, setActive] = useState(null);

  const faqs = faqDatabase[productType] || [];

  return (
    <section className="product-faq">
      <h2>Product FAQs</h2>

      {faqs.map((item, index) => (
        <div
          key={index}
          className={`product-faq-item ${active === index ? "open" : ""}`}
          onClick={() => setActive(active === index ? null : index)}
        >
          <div className="product-faq-question">
            {item.question}
            <span>{active === index ? "−" : "+"}</span>
          </div>

          <div className="product-faq-answer">
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
