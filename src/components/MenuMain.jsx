import React, { useState } from "react";
import MealCard from "./MealCard";
import Menu from "./Menu";

const menuData = [
  {
    name: "chicken egg rolls",
    imageURL: "/chicken-egg-rolls.jpg",
    category: "appetizers",
    price: 0.99,
  },
  {
    name: "chinese donuts",
    imageURL: "/chinese-donuts.jpg",
    category: "appetizers",
    price: 3.5,
  },
  {
    name: "crabmeat rangoon",
    imageURL: "/crabmeat-rangoon.jpg",
    category: "appetizers",
    price: 4.99,
  },
  {
    name: "fried dumplings",
    imageURL: "/fried-dumplings.jpg",
    category: "appetizers",
    price: 3.99,
  },
  {
    name: "fried wonton",
    imageURL: "/fried-wonton.jpg",
    category: "appetizers",
    price: 3.99,
  },
  {
    name: "teriyaki chicken",
    imageURL: "/teriyaki-chicken.jpg",
    category: "appetizers",
    price: 4.99,
  },
  {
    name: "beef fried rice",
    imageURL: "/beef-fried-rice.jpg",
    category: "entrees",
    price: 6.99,
  },
  {
    name: "beef with broccoli",
    imageURL: "/beef-with-broccoli.jpg",
    category: "entrees",
    price: 6.99,
  },
  {
    name: "chicken chow mein",
    imageURL: "/chicken-chow-mein.jpg",
    category: "entrees",
    price: 5.99,
  },
  {
    name: "chicken fried rice",
    imageURL: "/chicken-fried-rice.jpg",
    category: "entrees",
    price: 5.99,
  },
  {
    name: "chicken with broccoli",
    imageURL: "/chicken-with-broccoli.jpg",
    category: "entrees",
    price: 5.99,
  },
  {
    name: "chicken with vegetables",
    imageURL: "/chicken-with-mixed-vegetables.jpg",
    category: "entrees",
    price: 5.99,
  },
  {
    name: "chicken lo mein",
    imageURL: "/chicken-lo-mein.jpg",
    category: "entrees",
    price: 6.99,
  },
  {
    name: "kung pao chicken",
    imageURL: "/kung-pao-chicken.jpg",
    category: "entrees",
    price: 5.99,
  },
  {
    name: "mongolian beef",
    imageURL: "/mongolian-beef.jpg",
    category: "entrees",
    price: 6.99,
  },
  {
    name: "orange chicken",
    imageURL: "/orange-chicken.jpg",
    category: "entrees",
    price: 8.99,
  },
  {
    name: "sesame chicken",
    imageURL: "/sesame-chicken.jpg",
    category: "entrees",
    price: 5.99,
  },
  {
    name: "shrimp fried rice",
    imageURL: "/shrimp-fried-rice.jpg",
    category: "entrees",
    price: 6.99,
  },
  {
    name: "sweet & sour pork",
    imageURL: "/sweet-sour-pork.jpg",
    category: "entrees",
    price: 6.99,
  },
  {
    name: "broccoli",
    imageURL: "/broccoli.jpg",
    category: "sides",
    price: 1.99,
  },
  {
    name: "fried rice",
    imageURL: "/fried-rice.jpg",
    category: "sides",
    price: 1.99,
  },
  {
    name: "white rice",
    imageURL: "/white-rice.jpg",
    category: "sides",
    price: 1.99,
  },
  {
    name: "wonton soup",
    imageURL: "/wonton-soup.jpg",
    category: "sides",
    price: 1.99,
  },
  {
    name: "brownie",
    imageURL: "/brownie.jpg",
    category: "desserts",
    price: 1.5,
  },
  {
    name: "chocolate chip cookie",
    imageURL: "/chocolate-chip-cookie.jpg",
    category: "desserts",
    price: 0.99,
  },
  {
    name: "fortune cookie",
    imageURL: "/fortune-cookie.jpg",
    category: "desserts",
    price: 0.5,
  },
];

const MenuMain = () => {
  const [currentCat, setCurrentCat] = useState("appetizers");
  return (
    <div className="menu-main">
      {/* <section
        id="main"
        className="hero-image h-[20em] py-10 lg:py-0 flex flex-col lg:flex-row justify-center items-center bg-black text-white px-10"
      >
        <div className="h-auto w-[50%]">
          <div className="w-[100%] flex flex-row text-start mb-10">
            <h2 className="text-yellow-300 leading-none w-[6em] text-[1.5em] sm:text-[2em] ">
              Appetizers
            </h2>
          </div>
          <p className="font-thin text-gray-300 text-[0.6em] sm:text-[0.8em] w-[15em] text-wrap text-start mb-4">
            There are many locations available around the world. Our food has
            the best quality and service that there is. All the guests have a
            wonderful time.
          </p>
          <div className="w-[100%] flex flex-row text-start mt-5">
            <button className="text-lg px-3 py-2 mx-1 text-700 font-bold bg-red-600 hover:bg-red-700 transition-colors duration-75 w-[10em]">
              Order Now
            </button>
          </div>
        </div>
        <div className="w-[50%] h-[100%] bg-blue-200">
          <img
            className="mt-10 lg:mt-0 w-[350px] h-[350px] lg:w-[100%] lg:h-[650px] xl:w-[100%] xl:h-[100%]"
            src="../src/assets/menu/kung-pao-chicken.jpg"
          />
        </div>
      </section> */}
      <section className="meal-card-section w-[100%] flex flex-col justify-center items-center">
        <div className="my-10 uppercase">Menu</div>
        <Menu setCurrentCat={setCurrentCat}  />
        <div className="meal-cards-container w-[90%] flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-start mb-10">
          {menuData
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
