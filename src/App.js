import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import BrowserRouter, Routes, and Route components from react-router-dom
import Navbar from "./Components/NavBar"; // Import Navbar component
import Hero from "./Components/HeroSection"; // Import Hero component
import SafeAccess from "./Components/SafeAccess";
import TrustSupport from "./Components/TrustSupport";
import AboutUs from "./Components/AboutUs";
import WhyDigiGold from "./Components/WhyDigiGold";
import Footer from "./Components/Footer";
import HowToSellYourOldJewellery from "./Components/HowToSellYouOldJwellery";
import CashForGoldComparison from "./Components/CashForGoldComparison";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <SafeAccess />
              <TrustSupport />
              <AboutUs />
              <WhyDigiGold />
              <HowToSellYourOldJewellery />
              <CashForGoldComparison />
            </>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
