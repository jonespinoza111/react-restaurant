import React, { useContext, useState } from "react";
import MealCard from "./MealCard";
import Menu from "./Menu";
import ShoppingCartContext from '../context/ShoppingCartContext';


const MenuMain = () => {
  const [currentCat, setCurrentCat] = useState("appetizers");
  const { menuItems } = useContext(ShoppingCartContext); 
  return (
    <div className="menu-main">
      <section className="meal-card-section w-[100%] flex flex-col justify-center items-center">
        <div className="my-10 uppercase">Menu</div>
        <Menu setCurrentCat={setCurrentCat}  />
        <div className="meal-cards-container w-[95%] flex flex-col items-center lg:flex-row lg:flex-wrap lg:justify-center mb-10">
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
