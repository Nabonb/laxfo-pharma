import React from "react";
import Heading from "../Heading/Heading";

const Header = () => {
  return (
    <>
      <Heading
        title="Abiansemal, Bali"
        subtitle="Sideman - Indonesia"
      ></Heading>
      <div className="w-full md:h-[60vh] rounded-xl overflow-hidden ">
        <img className="object-cover w-full" src="https://a0.muscache.com/im/pictures/4f70b681-a792-4530-8c52-f2a8d262942d.jpg" alt="" />
      </div>
    </>
  );
};

export default Header;
