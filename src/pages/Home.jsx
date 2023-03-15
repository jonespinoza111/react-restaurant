import React from "react";
import AboutSection from "../components/AboutSection";
import DishesSection from "../components/DishesSection";
import Footer from "../components/Footer";
import ReviewSection from "../components/ReviewSection";

const Home = () => {
  return (
    <div>
      <section className="hero-image flex flex-row justify-center items-center bg-black text-white px-10">
        <div className="h-auto">
          <div className="w-[100%] flex flex-row text-start mb-10">
            <h2 className="text-yellow-300 leading-none w-[6em] text-[2em] ">
              Find <span className="text-white">Restaurants Near</span> You
            </h2>
          </div>
          <p className="font-thin text-gray-300 text-[0.8em] w-[15em] text-wrap text-start mb-4">
            There are many locations available around the world. Our food has
            the best quality and service that there is. All the guests have a
            wonderful time.
          </p>
          <div className="w-[100%] flex flex-row text-start mt-5">
            <button className="text-lg px-3 py-2 mx-1 text-700 font-bold bg-red-600 w-[10em]">
              Order Now
            </button>
          </div>
        </div>
        <img
          className="w-[700px] h-[700px]"
          src="../src/assets/noodles-hero.jpg"
        />
      </section>
      <DishesSection />
      <AboutSection />
      <ReviewSection />
      <Footer />
    </div>
  );
};

export default Home;
