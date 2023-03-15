import { faFacebookF, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Footer = () => {
    const nums = [0, 0, 0, 0];
  return (
    <>
    <div className="h-auto relative">
        <img className='relative w-[100%] h-[15em]' src='../src/assets/background-2.jpg' />
      <div className="absolute top-0 flex h-[100%] flex-row justify-center items-center py-10 bg-black bg-opacity-50">
        <div className="h-[10em] w-[22%] mx-4 bg-transparent text-white text-left">
            <h2 className="uppercase">General</h2>
            <p className="text-base font-thin text-start border-t-2 mt-4 pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu dapibus risus. Nunc eget euismod ipsum. Proin sem enim, malesuada vitae augue et, semper fringilla massa. Nam efficitur quam nulla, eget accumsan justo laoreet eu. Etiam iaculis ut quam eget porta. Curabitur semper sit amet turpis et dictum. Integer euismod facilisis tempus. </p>
        </div>
        <div className="h-[10em] w-[22%] mx-4 bg-transparent text-white text-left">
            <h2 className="uppercase">Subscribe</h2>
            <div className="border-t-2 mt-4 pt-4">
                <input type="text" className="w-[90%] bg-black border-2 h-[3.5em] px-4 text-[16px]" placeholder="Enter email" />
                <button className="text-lg px-3 py-2 text-700 font-bold bg-red-600 w-[90%] mt-2">
                    Subscribe
                </button>
                <div className="icons-container w-auto h-auto flex flex-row gap-x-4 mt-6">
                    <div className="h-[1.7em] w-[1.7em] text-black  bg-white rounded flex justify-center items-center cursor-pointer">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="h-[1.7em] w-[1.7em] text-black  bg-white rounded flex justify-center items-center cursor-pointer">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="h-[1.7em] w-[1.7em] text-black  bg-white rounded flex justify-center items-center cursor-pointer">
                        <FontAwesomeIcon icon={faGooglePlusG} />
                    </div>
                    <div className="h-[1.7em] w-[1.7em] text-black  bg-white rounded flex justify-center items-center cursor-pointer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </div>
            </div>
          </div>
          <div className="h-[10em] w-[22%] mx-4 bg-transparent text-white text-left">
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
          <div className="h-[10em] w-[22%] mx-4 bg-transparent text-white text-left">
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
    </div>
    <div className="flex flex-row justify-center py-[2em] border-t-2 bg-black">
        <h4 className="text-white text-base">All Rights Reserved. @2045 Nam efficitur quam nulla, eget accumsan justo laoreet eu.</h4>
    </div>
    </>
  );
};

export default Footer;
