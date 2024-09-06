import React from "react";
import searchIcon from "../../assets/images/search-icn-wht.png";
import { review_list } from "../../assets/data/reviews";
import SingleReview from "./SingleReview";

const Reviews = () => {
  return (
    <div className="md:px-[80px] px-[16px]">
      <h1 className="font-medium text-[40px] mb-4">Reviews</h1>
      <div className="mt-4 md:flex items-center mb-[59px] justify-between">
        <div>
          <button className="bg-[#164F49] py-[15px] px-[32px] text-white font-medium text-base">
            Write a Review
          </button>
        </div>
        <div>
          <p className="font-medium text-base">Filter Reviews</p>  
          <hr className="border border-black mb-[14px] w-[107px]"/>
          <div className="flex">
            <div className="flex items-center bg-[#164F49] text-white w-1/2 md:w-[219px] h-[39px] px-3 py-[10px] rounded mr-5">
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent text-white"
              />
              <button className="text-white">
                <img src={searchIcon} alt="" />
              </button>
            </div>
            <div>
              <div className="text-sm ">
                <select
                  required
                  className="md:w-[219px] w-full h-[39px] px-3 py-[10px] text-xs bg-transparent border border-black"
                >
                  <option value="">Image And Videos</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
         <div>
            {review_list.map((review)=><SingleReview key={review._id} review={review}></SingleReview>)}
         </div>
      </div>
    </div>
  );
};

export default Reviews;
