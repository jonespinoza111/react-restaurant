import React, { useContext, useState } from "react";
import MealCard from "./MealCard";
import Menu from "./Menu";
import ShoppingCartContext from '../context/ShoppingCartContext';


const MenuMain = () => {
  const [currentCat, setCurrentCat] = useState("appetizers");
  const { menuItems } = useContext(ShoppingCartContext); 
  return (
    <div className="menu-main">
      {/* <section
        id="main"
        className="hero-image h-[20em] py-10 lg:py-0 flex flex-col lg:flex-row justify-center items-center bg-white text-black px-10"
      >
        <div className="h-auto w-[30%]">
          <div className="w-[12em] flex flex-row flex-end text-start mb-10">
            <h2 className="text-black leading-none w-[6em] text-[1.5em] sm:text-[2em] ">
              Appetizers
            </h2>
          </div>
          <p className="font-thin text-black text-[0.6em] sm:text-[0.8em] w-[15em] text-wrap text-start mb-4">
            There are many locations available around the world. Our food has
            the best quality and service that there is. All the guests have a
            wonderful time.
          </p>
          <div className="w-[100%] flex flex-row text-start mt-5">
            <button className="text-lg px-3 py-2 mx-1 text-white text-700 font-bold bg-red-600 hover:bg-red-700 transition-colors duration-75 w-[10em]">
              Order Now
            </button>
          </div>
        </div>
        <div className="w-[500px] h-[500px] bg-blue-200 rounded">
          <img
            className="mt-10 rounded lg:mt-0 w-[350px] h-[350px] lg:w-[100%] lg:h-[650px] xl:w-[100%] xl:h-[100%]"
            src="../src/assets/menu/kung-pao-chicken.jpg"
          />
        </div>
      </section> */}
      <section className="meal-card-section w-[100%] flex flex-col justify-center items-center">
        <div className="my-10 uppercase">Menu</div>
        <Menu setCurrentCat={setCurrentCat}  />
        <div className="meal-cards-container w-[90%] flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-start mb-10">
          {menuItems
            .filter((mealInfo) => mealInfo.category === currentCat)
            .map((mealInfo, index) => (
              <MealCard key={index} info={mealInfo} />
            ))}
        </div>
      </section>
    </div>
  );
};

export default MenuMain;
