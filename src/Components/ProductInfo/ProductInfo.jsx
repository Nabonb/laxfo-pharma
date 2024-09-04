import React from "react";
import coche from "../../assets/images/coche.png";

const ProductInfo = () => {
  return (
    <div className="flex justify-evenly">
      <div className="flex items-center">
        <div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" defaultChecked />
            <div className="collapse-title text-2xl font-medium">Benefits</div>
            <div className="collapse-content">
              <p className="font-medium text-base ps-[10px]">
                Support healthy aging <br /> Boost collagen production <br />{" "}
                Support a healthy immune system <br /> PRO-TIP: For enhanced
                immunity take with Cymbiotika’s D3+ K2 + CoQ10.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-2xl font-medium">
              Ingredients
            </div>
            <div className="collapse-content">
              <p className="font-medium text-base ps-[10px]">
                Support healthy aging <br /> Boost collagen production <br />{" "}
                Support a healthy immune system <br /> PRO-TIP: For enhanced
                immunity take with Cymbiotika’s D3+ K2 + CoQ10.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-2xl font-medium">
              How to Use
            </div>
            <div className="collapse-content">
              <p className="font-medium text-base ps-[10px]">
                Support healthy aging <br /> Boost collagen production <br />{" "}
                Support a healthy immune system <br /> PRO-TIP: For enhanced
                immunity take with Cymbiotika’s D3+ K2 + CoQ10.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-2xl font-medium">Cautions</div>
            <div className="collapse-content">
              <p className="font-medium text-base ps-[10px]">
                Support healthy aging <br /> Boost collagen production <br />{" "}
                Support a healthy immune system <br /> PRO-TIP: For enhanced
                immunity take with Cymbiotika’s D3+ K2 + CoQ10.
              </p>
            </div>
          </div>
          <div className="collapse collapse-plus">
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-2xl font-medium">
              Shipping and returns
            </div>
            <div className="collapse-content">
              <p className="font-medium text-base ps-[10px]">
                Support healthy aging <br /> Boost collagen production <br />{" "}
                Support a healthy immune system <br /> PRO-TIP: For enhanced
                immunity take with Cymbiotika’s D3+ K2 + CoQ10.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={coche} alt="" />
      </div>
    </div>
  );
};

export default ProductInfo;
