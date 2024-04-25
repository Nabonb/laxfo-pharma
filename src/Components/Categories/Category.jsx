import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import qs from 'query-string'
const Category = ({ label, icon: Icon,selected }) => {
    const [params,setParams] = useSearchParams()
    const value = params.get('category')
    // console.log(params)
    const navigate = useNavigate()

    const handleClick = () =>{
        let currentQuery = {}
        if(params){
            currentQuery = qs.parse(params.toString())
            // console.log(currentQuery)
        }
        const updatedQuery ={
            ...currentQuery,
            category:label
        }
        // console.log(updatedQuery)
        
        const url = qs.stringifyUrl({
            url:'/',
            query:updatedQuery
        },{skipNull:true})
        // console.log(url)
        navigate(url)
    }
  return (
    <div onClick={handleClick} className={`
    flex 
    flex-col 
    items-center 
    justify-center 
    gap-2
    p-3
    border-b-2
    hover:text-neutral-800
    transition
    cursor-pointer
    ${
      selected
        ? 'border-b-neutral-800 text-neutral-800'
        : 'border-transparent text-neutral-500'
    }
 
  `}>
      <Icon className="" size="26"></Icon>
      <div className="text-sm font-medium">{label}</div>
    </div>
  );
};

export default Category;
