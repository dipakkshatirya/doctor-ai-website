import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

// Blog Pages
import Jointreplace from "./pages/Jointreplace";
import Sportsmedicine from "./pages/Sportsmedicine";
import Handandwrist from "./pages/handandwrist";
import FootandAnkle from "./pages/FootandAnkle";
import Spine from "./pages/Spine";
import TraumaAndFractures from "./pages/TraumaAndFractures";

function SectionDivider() {
  return (
    <div className="section-divider">
      <span className="divider-line"></span>

      <span className="divider-pulse">
        <svg viewBox="0 0 90 28">
          <path d="M0 14 H25 L32 4 L40 24 L48 8 L54 14 H90" />
        </svg>
      </span>

      <span className="divider-line"></span>
    </div>
  );
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100);
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location]);

  return (
    <>
      <section id="home">
        <Profile />
      </section>

      <SectionDivider />

      <section id="about">
        <Aboutus />
      </section>

      <SectionDivider />

      <section id="services">
        <Services />
      </section>

      <SectionDivider />

      <Horizservices />

      <SectionDivider />

      <Reviews />

      <SectionDivider />

      <section id="contact">
        <Contactus />
      </section>

      <SectionDivider />

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

        {/* Standalone Pages */}
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactUsPage />} />

        {/* Blog Detail Pages */}
        <Route
          path="/blog/joint-replacement"
          element={<Jointreplace />}
        />

        <Route
          path="/blog/sports-medicine"
          element={<Sportsmedicine />}
        />

        <Route
          path="/blog/hand-wrist"
          element={<Handandwrist />}
        />

        <Route
          path="/blog/foot-ankle"
          element={<FootandAnkle />}
        />

        <Route
          path="/blog/spine"
          element={<Spine />}
        />

        <Route
          path="/blog/trauma-fractures"
          element={<TraumaAndFractures />}
        />
      </Routes>

      <Footer />
      <Floatingbtn />
    </>
  );
}

export default App;