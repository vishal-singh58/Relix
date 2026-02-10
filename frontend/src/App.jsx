import { BrowserRouter as Router, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import Aboutpage from "./pages/aboutpage/Aboutpage.jsx";
import Catalogue from "./pages/cataloguepaage/Catalogue.jsx";
import Services from "./pages/servicespage/Services.jsx";
import Blog from "./pages/blogpage/Blog.jsx";
import FAQ from "./pages/faqpage/FAQ.jsx";
import Contact from "./pages/contactpage/Contact.jsx";
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
