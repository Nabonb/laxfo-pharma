import React from "react";

const Advertise = () => {
  return (
    <div className="bg-[#FF6B6E] grid md:grid-cols-3 px-[80px] py-4 text-white">
      <div className="text-center">
        <p className="font-medium text-2xl">
          Free BD shopping Over
          <span className="font-normal italic text-2xl">BDT1500</span>
        </p>
        <p className="font-medium text-2xl">Shop Now</p>
      </div>
      <div className="text-center my-[32px] md:my-0">
        <p className="font-medium text-2xl">
          <span className="font-normal italic text-2xl">3-5 Day </span>
          International Shipping
        </p>
        <p className="font-medium text-2xl">Learn More</p>
      </div>
      <div className="text-center">
        <p className="font-medium text-2xl">
          Rated{" "}
          <span className="font-normal italic text-2xl">4.8 out of 5</span> on
          Trustpilot
        </p>
        <p className="font-medium text-2xl">Read our reviews</p>
      </div>
    </div>
  );
};

export default Advertise;
