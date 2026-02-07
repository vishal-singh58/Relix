import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Aboutpage from "./pages/Aboutpage.jsx";
import Catalogue from "./pages/Catalogue.jsx";
import Services from "./pages/Services.jsx";
import Blog from "./pages/Blog.jsx";
import FAQ from "./pages/FAQ.jsx";
import Contact from "./pages/Contact.jsx";
import Newsletter from "./components/newsletter/Newsletter.jsx";



function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutpage />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Newsletter />
        <Footer />
      </Router>
    </>
  );
}

export default App;
