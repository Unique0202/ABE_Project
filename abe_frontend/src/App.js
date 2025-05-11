import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Pages
import HomePage from './pages/HomePage/HomePage';
// import AboutPage from './pages/AboutPage/AboutPage';
// import ServicesPage from './pages/ServicesPage/ServicesPage';
// import EquipmentPage from './pages/EquipmentPage/EquipmentPage';
// import CertificatesPage from './pages/CertificatesPage/CertificatesPage';
// import ClientsPage from './pages/ClientsPage/ClientsPage';
// import ContactPage from './pages/ContactPage/ContactPage';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

// CSS
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS animation library
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out'
    });
    
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <h3>ABE Engineering</h3>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;