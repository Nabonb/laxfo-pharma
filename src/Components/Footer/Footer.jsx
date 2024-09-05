import React from "react";
import logoFooter from "../../assets/images/logo-footer.png";
import media1 from "../../assets/images/media1.png";
import media2 from "../../assets/images/media2.png";
import media3 from "../../assets/images/media3.png";
import media4 from "../../assets/images/media4.png";
import media5 from "../../assets/images/media5.png";
import rightArrow from "../../assets/images/arrow-right.png";

const Footer = () => {
  return (
    <div className="bg-[#15322D] grid grid-cols-3 gap-x-20 pt-[45px] pb-[40px]">
      <div className="flex justify-center items-center">
        <img className="" src={logoFooter} alt="" />
      </div>
      <div>
        <p className="text-center text-white mb-[27px] font-medium text-base">
          Subscribe to the newsletter and always stay updated on the latest news
          and exclusive promotions.
        </p>
        <div className="flex items-center text-white w-full justify-between border-0 border-b-[1px] h-[39px] px-3 py-[10px] rounded mr-5">
          <input
            type="text"
            placeholder="Your Email Address"
            className="bg-transparent text-white font-medium text-base w-6/12"
          />
          <div className="flex items-center">
            <button className="text-white mr-[4px] font-medium text-sm">Submit</button>
            <img src={rightArrow} alt="" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-white mb-3 font-medium text-base">
          We are here to help
        </p>
        <div className="flex">
          <img src={media1} alt="" />
          <img className="mx-5" src={media2} alt="" />
          <img src={media3} alt="" />
          <img className="mx-5" src={media4} alt="" />
          <img src={media5} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
