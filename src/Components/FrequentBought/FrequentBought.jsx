import React from "react";
import { product_list } from "../../assets/data/product";
import SingleProduct from "../SingleProduct/SingleProduct";

const FrequentBought = () => {
  return (
    <div className="px-[80px]">
      <div className="mb-[40px]">
        <h1 className="font-medium text-[40px] mb-4">
          Frequently Bought Together
        </h1>
        <p className="font-normal italic text-base text-justify">
          In the dynamic world of e-commerce, the "Frequently Bought Together"
          feature has become a cornerstone of the online shopping experience.
          This tool leverages the power of data analytics and consumer behavior
          insights to suggest complementary products that are often purchased in
          conjunction with the item a customer is viewing. By highlighting these
          related products, retailers aim to increase sales, improve customer
          satisfaction, and streamline the shopping process.
        </p>
      </div>
      <div>
        <div className="grid md:grid-cols-3">
          {product_list.map((product) => (
            <SingleProduct key={product._id} product={product}></SingleProduct>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrequentBought;
