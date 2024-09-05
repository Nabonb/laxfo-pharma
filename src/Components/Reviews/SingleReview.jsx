import React from "react";
import like from "../../assets/images/like.png";
import dislike from "../../assets/images/dislike.png";

const SingleReview = ({ review }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex">
          <img className="mr-[3px]" src={review.image} alt="" />
          <p className="italic font-normal text-base">{review.name}</p>
        </div>
        <p className="italic font-normal text-base">{review.date}</p>
      </div>
      <div className="flex mt-3 mb-2">
        <img className="mr-[20px]" src={review.rating} alt="" />
        <p className="font-medium text-base">{review.level}</p>
      </div>
      <div className="flex justify-between mb-8 ">
        <div className="w-3/5">
          <p className="font-medium text-base">{review.comment}</p>
        </div>
        <div className="flex">
          <p>Was this helpful?</p>
          <img className="h-6 w-6" src={like} alt="" />
          <img className="h-6 w-6" src={dislike} alt="" />
        </div>
      </div>
      <hr className="border mb-[20px]"/>
    </div>
  );
};

export default SingleReview;
