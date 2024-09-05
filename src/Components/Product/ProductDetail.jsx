import React from "react";
import rating from "../../assets/images/rating.png";
import plus from "../../assets/images/plus.png";
import minus from "../../assets/images/minus.png";
import circleEnabled from "../../assets/images/circle-enabled.png";
import circleDisabled from "../../assets/images/circle-disabled.png";

const ProductDetail = () => {
  return (
    <div>
      <div className="flex items-center mb-4 leading-[48px]">
        <img className="mr-4" src={rating} alt="" />
        <p className="underline font-medium text-xs">See all reviews</p>
      </div>
      <p className="font-normal italic text-[40px]">Liposomal Vitamin C</p>
      <div className="my-4">
        <p className="font-normal italic text-2xl">
          BDT <span className="font-normal italic text-[32px]">4332.23</span>
        </p>
      </div>
      <div>
        <p className="font-medium text-base">
          Liposomal Vitamin C is an advanced form of Vitamin C encapsulated
          within liposomes, which are tiny fat-like particles that enhance its
          absorption and bioavailability in the body.{" "}
        </p>
        <p className="my-3 font-medium text-base">
          This delivery method allows for more efficient cellular uptake,
          ensuring that higher levels of Vitamin C reach the bloodstream and
          tissues.
        </p>
        <p className="font-medium text-base">
          It provides potent antioxidant support, boosts the immune system,
          promotes collagen production, and enhances skin health. Liposomal
          Vitamin C is ideal for those seeking maximum benefits from their
          Vitamin C supplementation.
        </p>
      </div>
      <div className="my-8 flex items-center">
        <div className="mr-[50px]">
          <p className="font-medium text-base">Select Size</p>
        </div>
        <div>
          <button className="text-[#164F49] bg-white p-[10px] border border-[#164F49] font-medium text-base">
            100ml
          </button>
          <button className="mx-[6px] text-[#164F49] bg-white p-[10px] border border-[#164F49] font-medium text-base">
            200ml
          </button>
          <button className="text-white bg-[#164F49] p-[10px] border border-[#164F49] font-medium text-base">
            500ml
          </button>
        </div>
      </div>
      <div className="flex">
        <div className="mr-8">
          <p className="font-medium text-base">Select Flavor</p>
        </div>
        <div className="flex">
          <div className="flex items-center">
            <input type="radio" name="radio-1" className="radio  mr-[9px]" />
            <p className="font-medium text-base">Orange</p>
          </div>
          <div className="flex items-center mx-2">
            <input type="radio" name="radio-1" className="radio mr-[9px]" />
            <p className="font-medium text-base">Blue Berry</p>
          </div>
          <div className="flex items-center">
            <input type="radio" name="radio-1" className="radio mr-[9px]" />
            <p className="font-medium text-base">Lime</p>
          </div>
        </div>
      </div>
      <div>
        <button className="flex w-full bg-[#164F49] text-white mt-8 justify-center items-center">
          <div className="">
            <img className="text-center" src={minus} alt="" />
          </div>
          <p className="font-medium text-[40px] mx-[138px]">Add To Cart</p>
          <img src={plus} alt="" />
        </button>
      </div>
      <div className="my-8">
        <p className="font-medium text-base">
          Pickup available at our{" "}
          <span className="font-normal italic text-base">
            22 Bistro Place, Banani
          </span>
        </p>
        <p className="font-medium text-xs mt-2">Usually ready In 2-4 days</p>
      </div>
      <div className="border p-2 pr-[19px]">
        <div className="flex items-center ">
          <img className="mr-[9px] h-3 w-3" src={circleEnabled} alt="" />
          <p className="font-medium text-sm">Subscribe & Save 10%</p>
        </div>
        <div className="flex items-center ps-[28px] justify-between">
          <div>
            <p className=" my-[6px] font-medium text-sm">
              FREE SHIPPING + Cancel anytime
            </p>
            <p className="underline font-medium text-sm">
              YOUR SUSBSCRIPTION PERKS +
            </p>
          </div>
          <div>
            <p className="font-medium text-sm">BDT 800</p>
          </div>
        </div>
      </div>
      <div className="border p-2 pr-[19px] mb-8 text-[#D9D9D9]">
        <div className="flex items-center ">
          <img className="mr-[9px] h-3 w-3" src={circleDisabled} alt="" />
          <p className="font-medium text-sm">One Time Purchase</p>
        </div>
        <div className="flex items-center ps-[28px] justify-between">
          <div>
            <p className=" my-[6px] font-medium text-sm">
            or four interest-free payments of BDT 20 with sezzle
            </p>
          </div>
          <div>
            <p className="font-medium text-sm">BDT 200</p>
          </div>
        </div>
      </div>
      <div>

      </div>
      
      
    </div>
  );
};

export default ProductDetail;
