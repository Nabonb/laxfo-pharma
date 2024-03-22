import React from 'react';

const Category = ({label,icon:Icon}) => {
    return (
        <div className='flex flex-col items-center justify-center p-3 border-b-2 gap-2 hover:text-neutral-800 text-neutral-500 border-transparent '>
            <Icon className="cursor-pointer" size="28"></Icon>
            <div className='text-sm font-medium'>{label}</div>
        </div>
        
    );
};

export default Category;