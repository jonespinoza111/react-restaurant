import { faFacebookF, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
    const nums = [0, 0, 0, 0];
  return (
    <>
    <section id="contact" className="h-auto relative">
        <div className="h-auto">
            <img className='relative w-[100%] min-h-[48em] sm:min-h-0 h-auto sm:h-[44em] md:h-[25em] lg:h-[15em]' src='../src/assets/background-2.jpg' />
        </div>
      <div className="absolute top-0 flex flex-grow h-auto min-h-[48em] md:min-h-0 md:h-[100%] flex-col md:flex-row  flex-nowrap md:flex-wrap lg:flex-nowrap justify-center sm:justify-start gap-y-20 md:gap-y-0 md:justify-center items-center md:items-start lg:items-center py-10 bg-black bg-opacity-50">
        <div className="h-auto md:h-[10em] w-[80%] md:w-[45%] lg:w-[22%] mx-4 bg-transparent text-white text-left">
            <h2 className="uppercase">General</h2>
            <p className="text-base font-thin text-start border-t-2 mt-4 pt-4">Hot Star Hunan Grill features authentic Hunan-style cuisine, known for its spicy and bold flavors. From classic dishes like Kung Pao chicken and orange chicken to their signature hot pot, Hot Star Hunan Grill offers a diverse menu that is sure to satisfy any spicy food lover. </p>
        </div>
        <div className="h-auto md:h-[10em] w-[80%] md:w-[45%] lg:w-[22%] mx-4 bg-transparent text-white text-left">
            <h2 className="uppercase">Subscribe</h2>
            <div className="border-t-2 mt-4 pt-4">
                <input type="text" className="w-[100%] md:w-[90%] bg-black border-2 h-[3.5em] px-4 text-[16px]" placeholder="Enter email" />
                <button className="text-lg px-3 py-2 text-700 font-bold bg-red-600 hover:bg-red-700 transition-colors duration-75 w-[100%] md:w-[90%] mt-2">
                    Subscribe
                </button>
                <div className="icons-container w-auto h-auto flex flex-row gap-x-4 mt-6">
                    <div className="h-[1.7em] w-[1.7em] text-black  bg-white hover:bg-[#c4c4c4] transition-colors duration-75 rounded flex justify-center items-center cursor-pointer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="h-[1.7em] w-[1.7em] text-black  bg-white hover:bg-[#c4c4c4] transition-colors duration-75 rounded flex justify-center items-center cursor-pointer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="h-[1.7em] w-[1.7em] text-black  bg-white hover:bg-[#c4c4c4] transition-colors duration-75 rounded flex justify-center items-center cursor-pointer">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                    </div>
                    <div className="h-[1.7em] w-[1.7em] text-black  bg-white hover:bg-[#c4c4c4] transition-colors duration-75 rounded flex justify-center items-center cursor-pointer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </div>
          </div>
          <div className="h-auto md:h-[10em] w-[80%] md:w-[45%] lg:w-[22%] mx-4 bg-transparent text-white text-left">
            <h2 className="uppercase">Contact</h2>
            <h3 className="text-base font-thin text-start border-t-2 mt-4 pt-4">
                4261 Roosevelt Blvd, Jacksonville FL, 32210
            </h3>
            <h3 className="text-base font-thin text-start mt-4 pt-4">
                (904) 387-0007
            </h3>
            <h3 className="text-base font-thin text-start mt-4 pt-4">
                info@domain.com
            </h3>
          </div>
          <div className="h-auto md:h-[10em] w-[80%] md:w-[45%] lg:w-[22%] mx-4 bg-transparent text-white text-left">
            <h2 className="uppercase">Opening Hours</h2>
            <h3 className="text-base font-thin text-start border-t-2 mt-4 pt-4">
                Mon-Tue: <span className="ml-2">9:am - 9:pm</span>
            </h3>
            <h3 className="text-base font-thin text-start mt-4 pt-4">
                Wed: <span className="ml-2">Closed</span>
            </h3>
            <h3 className="text-base font-thin text-start mt-4 pt-4">
                Thu-Fri: <span className="ml-2">9:am - 11:pm</span>
            </h3>
            <h3 className="text-base font-thin text-start mt-4 pt-4">
                Sat-Sun: <span className="ml-2">11:am - 10:pm</span>
            </h3>
          </div>
      </div>
    </section>
    <div className="flex flex-row justify-center items-center px-[1em] md:px-0 py-[2em] border-t-2 bg-black">
        <h4 className="text-white text-base">Copyright © 2023 Hot Star Hunan Grill. All Rights Reserved</h4>
    </div>
    </>
  );
};

export default Footer;
