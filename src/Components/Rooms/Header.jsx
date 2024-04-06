import React from "react";
import Heading from "../Heading/Heading";

const Header = ({roomData}) => {
  return (
    <>
      <Heading
        title={roomData.title}
        subtitle={roomData.location}
      ></Heading>
      <div className="w-full md:h-[60vh] rounded-xl overflow-hidden ">
        <img className="object-cover w-full" src={roomData.image} alt="" />
      </div>
    </>
  );
};

export default Header;
