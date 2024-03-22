import React, { useEffect } from "react";
import { useState } from "react";
import Container from "../Shared/Container/Container";
import { categories } from "./catrgoriesData";
import Category from "./Category";

const Categories = () => {
  console.log(categories);
  return (
    <Container>
      <div className="pt-4  flex flex-row gap-2 items-center justify-between overflow-x-auto">
        {categories.map((category,index) => (
          <Category key={index} icon={category.icon} label={category.label} ></Category>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
