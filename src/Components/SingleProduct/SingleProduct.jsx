import React from "react";
import addButton from "../../assets/images/add-button.png"

const SingleProduct = ({ product }) => {
  console.log(product.name);
  return (
    <div className="mx-auto">
      <div >
        <div className="relative">
          <img className="mb-4 " src={product.image} alt="" />
          <button className="absolute top-4 right-4"><img src={addButton} alt="" /></button>
        </div>
      </div>
      <div className="w-[295px]">
        <div className="flex justify-between">
          <h2 className="font-medium text-xl">{product.name}</h2>
          <p className="italic font-normal text-xl text-[#2B354F]">
            BDT {product.price}
          </p>
        </div>
        <p className="font-medium text-xs my-2">{product.description}</p>
        <p className="font-normal italic text-xs">{product.quantity}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
