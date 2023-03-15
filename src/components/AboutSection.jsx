import React from "react";

const AboutSection = () => {
  return (
    <div className="bg-black flex flex-row">
      <div className="left-side w-[50%] h-auto px-[4em] py-[2em]">
        <div className="w-[100%] flex flex-row text-start mb-10">
          <h2 className="text-white leading-none w-[6em] text-[2em] uppercase">
            About Us
          </h2>
        </div>
        <h3 className="font-thin text-gray-300 text-[0.8em] w-[25em] text-wrap text-start mb-4">
          Hot Star Hunan Grill is a Chinese restaurant dedicated to bringing the
          bold and spicy flavors of Hunan cuisine to our customers.
        </h3>
        <h3 className="font-thin text-[0.8em] w-[25em] text-wrap text-start mb-4 text-yellow-100">
            Our chefs have a passion for cooking and take pride in using only the
            freshest ingredients to create authentic and delicious dishes.
        </h3>
        <h3 className="font-thin text-gray-300 text-[0.8em] w-[25em] text-wrap text-start mb-4">
            Whether you're in the mood for classic Hunan dishes like Kung Pao
            Chicken and Mapo Tofu, or you want to try something new like our
            signature Hunan-style grilled fish or spicy hot pot, we have something
            to satisfy every palate.
        </h3>
        <h3 className="font-thin text-[0.8em] w-[25em] text-wrap text-start mb-4 text-yellow-100">
            Our friendly and knowledgeable staff are committed to providing a
            welcoming and enjoyable dining experience for all our guests. Come visit
            us and discover why Hot Star Hunan Grill is a local favorite for
            authentic Chinese cuisine!
        </h3>
      </div>
      <div className="right-side w-[50%] flex justify-center items-center">
        <img
          className="w-[600px] h-[600px]"
          src="../src/assets/about-us-cook.jpg"
        />
      </div>
    </div>
  );
};

export default AboutSection;