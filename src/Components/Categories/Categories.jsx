import React, { useEffect } from "react";
import { useState } from "react";
import Container from "../Shared/Container/Container";
import { categories } from "./catrgoriesData";

const Categories = () => {
  console.log(categories);
  return (
    <Container>
      <div className="pt-4  flex flex-row gap-2 items-center justify-between overflow-x-auto">{categories.map(category=><p>{category.label}</p>)}</div>
    </Container>
  );
};

export default Categories;
