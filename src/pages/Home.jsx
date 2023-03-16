import React from "react";
import AboutSection from "../components/AboutSection";
import DishesSection from "../components/DishesSection";
import Footer from "../components/Footer";
import MainSection from "../components/MainSection";
import ReviewSection from "../components/ReviewSection";

const Home = () => {
  return (
    <div>
      <MainSection />  
      <DishesSection />
      <AboutSection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Home;
