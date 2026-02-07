import React from 'react'
import "./Newsletter.css";

const index = () => {
  return (
    <div className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>Get the latest updates and offers from Relix.</p>
      <form className="newsletter-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>

        




    </div>
  )
}

export default index