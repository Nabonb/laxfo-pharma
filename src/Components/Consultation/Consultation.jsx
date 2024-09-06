import React from "react";
import flower from "../../assets/images/flower.png";

const Consultation = () => {
  return (
    <div className="md:flex mt-[39px] bg-[#F2E7CE] ">
      <div className="md:w-1/2">
        <img className="w-full" src={flower} alt="" />
      </div>
      <div className="flex flex-col md:items-center justify-center text-start md:w-1/2 mx-[16px] md:mx-0">
        <div>
          <p className="text-base font-medium">Not Sure where to Start?</p>
          <h1 className="font-medium text-[40px] mt-[10px] mb-6 leading-10">Book a Free 25 Minute <br /> Consultation</h1>
          <button className="bg-[#164F49] py-[14px] px-[52px] text-white font-medium text-base mb-[40px] md:mb-0">
            Book Consultation
          </button>
        </div>
      </div>
    </div>
  );
};

export default Consultation;
