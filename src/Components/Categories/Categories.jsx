import React, { useEffect } from "react";
import { useState } from "react";
import Container from "../Shared/Container/Container";
import { categories } from "./catrgoriesData";
import Category from "./Category";
import { useSearchParams } from 'react-router-dom'

const Categories = () => {
  const [params, setParams] = useSearchParams()
  console.log(params)
  const categoryParam = params.get('category')
  // console.log(categories);
  console.log(categoryParam)
  return (
    <Container>
      <div className="p-4 flex flex-row gap-2 items-center justify-between overflow-x-auto">
        {categories.map((category,index) => (
          <Category key={index} icon={category.icon} label={category.label} selected={categoryParam === category.label} ></Category>
        ))}
      </div>
    </Container>
  );
};

export default Categories;
