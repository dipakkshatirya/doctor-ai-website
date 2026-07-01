import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./Header/Header";
import Navbar from "./navbar/navbar";
import Profile from "./Profile/profile";
import Aboutus from "./About/Aboutus";
import Services from "./Services/Services";
import Reviews from "./Reviews/reviews";
import Contactus from "./Contactus/Contactus";
import Horizservices from "./Horiz-pnl-service/horiz-services";
import Location from "./Location/location";
import Footer from "./footer/footer";
import Floatingbtn from "./floatingBtn/Floatingbtn";

// Pages
import AboutUsPage from "./pages/aboutuspage/aboutuspage";
import BlogPage from "./pages/blogpage/blogpage";
import ContactUsPage from "./pages/contactuspage";
import DiabetesManagement from "./pages/diabetesmanagement";
import BloodPressure from "./pages/bloodpressure";
import ChestPain from "./pages/chestpain";
import Thyroid from "./pages/thyriod";

// Home Component
function Home() {
  return (
    <>
      <Profile />

      <div className="section-divider">
        <span className="divider-line"></span>
        <span className="divider-pulse">
          <svg viewBox="0 0 90 28">
            <path d="M0 14 H25 L32 4 L40 24 L48 8 L54 14 H90" />
          </svg>
        </span>
        <span className="divider-line"></span>
      </div>

      <Aboutus />

      <div className="section-divider">
        <span className="divider-line"></span>
        <span className="divider-pulse">
          <svg viewBox="0 0 90 28">
            <path d="M0 14 H25 L32 4 L40 24 L48 8 L54 14 H90" />
          </svg>
        </span>
        <span className="divider-line"></span>
      </div>

      <Services />

      <div className="section-divider">
        <span className="divider-line"></span>
        <span className="divider-pulse">
          <svg viewBox="0 0 90 28">
            <path d="M0 14 H25 L32 4 L40 24 L48 8 L54 14 H90" />
          </svg>
        </span>
        <span className="divider-line"></span>
      </div>

      <Horizservices />

      <div className="section-divider">
        <span className="divider-line"></span>
        <span className="divider-pulse">
          <svg viewBox="0 0 90 28">
            <path d="M0 14 H25 L32 4 L40 24 L48 8 L54 14 H90" />
          </svg>
        </span>
        <span className="divider-line"></span>
      </div>

      <Reviews />

      <div className="section-divider">
        <span className="divider-line"></span>
        <span className="divider-pulse">
          <svg viewBox="0 0 90 28">
            <path d="M0 14 H25 L32 4 L40 24 L48 8 L54 14 H90" />
          </svg>
        </span>
        <span className="divider-line"></span>
      </div>

      <Contactus />

      <div className="section-divider">
        <span className="divider-line"></span>
        <span className="divider-pulse">
          <svg viewBox="0 0 90 28">
            <path d="M0 14 H25 L32 4 L40 24 L48 8 L54 14 H90" />
          </svg>
        </span>
        <span className="divider-line"></span>
      </div>

      <Location />
    </>
  );
}

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Navbar Pages */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactUsPage />} />

        {/* Treatment Pages */}
        <Route
          path="/treatments/diabetes-management"
          element={<DiabetesManagement />}
        />
        <Route
          path="/treatments/blood-pressure-management"
          element={<BloodPressure />}
        />
        <Route
          path="/treatments/chest-pain-management"
          element={<ChestPain />}
        />
        <Route
          path="/treatments/thyroid-disorders"
          element={<Thyroid />}
        />
      </Routes>

      <Footer />
      <Floatingbtn />
    </>
  );
}

export default App;