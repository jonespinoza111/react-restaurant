import React from "react";

const ReviewSection = () => {
  return (
    <div className="flex flex-col justify-start py-[2em] bg-white">
        <div className="">
            <h2 className="text-black leading-none w-auto text-[1.5em] sm:text-[2em] uppercase">
              Customer Reviews
            </h2>
        </div>
        <div className="flex flex-col xl:flex-row items-center xl:items-start justify-center py-[2em] gap-y-[2em] xl:gap-y-0 xl:gap-x-[2em]">
        <div className="quote-card flex flex-col items-center justify-center w-[80%] sm:w-[11em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
            <div className="">
            <img
                className="relative w-[100%] h-[12em]"
                src="../src/assets/fake-customer-1.jpg"
            />
            </div>
            <div className="info-card text-black flex flex-col px-10 py-5 bg-white h-auto sm:h-[14em]">
            <h3 className="mb-4">Ethan Lee</h3>
            <p className="text-[0.6em] font-light">
                <span className="text-[2em] text-yellow-500">"</span>
                I was blown away by the
                quality of food and service at this restaurant! Everything from the
                appetizers to the main dishes was simply delicious, and the staff
                was incredibly friendly and accommodating.
                <span className="text-[2em] text-yellow-500">"</span>
            </p>
            </div>
        </div>
        <div className="quote-card flex flex-col items-center justify-center w-[80%] sm:w-[11em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
            <div>
            <img
                className="relative w-[100%] h-[12em]"
                src="../src/assets/fake-customer-2.jpg"
            />
            </div>
            <div className="info-card text-black flex flex-col px-10 py-5 bg-white h-auto sm:h-[14em]">
            <h3 className="mb-4">Emma Davis</h3>
            <p className="text-[0.6em] font-light">
                <span className="text-[2em] text-yellow-500">"</span>
                I had an amazing dining experience at this restaurant! The food was
                delicious, beautifully presented, and came in generous portions. Do try the Kung Pao chicken, it was fantastic!
                <span className="text-[2em] text-yellow-500">"</span>
            </p>
            </div>
        </div>
        <div className="quote-card flex flex-col items-center justify-center w-[80%] sm:w-[11em] shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]">
            <div>
            <img
                className="relative w-[100%] h-[12em]"
                src="../src/assets/fake-customer-3.jpg"
            />
            </div>
            <div className="info-card text-black flex flex-col px-10 py-5 bg-white h-auto sm:h-[14em]">
            <h3 className="mb-4">Oliver Chen</h3>
            <p className="text-[0.6em] font-light">
                <span className="text-[2em] text-yellow-500">"</span>
                This restaurant is a must-visit! The food was fantastic with unique
                flavors and fresh ingredients. The staff was friendly and attentive,
                and the atmosphere was comfortable and welcoming.
                <span className="text-[2em] text-yellow-500">"</span>
            </p>
            </div>
        </div>
        </div>
    </div>
  );
};

export default ReviewSection;
