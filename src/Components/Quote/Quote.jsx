import React from 'react';
import quote from "../../assets/images/quote.png"
const Quote = () => {
    return (
        <div className='flex'>
            <div className='w-1/2'><img className='w-full' src={quote} alt="" /></div>
            <div className='bg-[#677557] flex items-center ps-[51px] w-1/2 text-white'><p className='text-[40px] font-normal italic'>As a certified organic, family-run <br /> pharmaceutical, our Laxfo <br /> goes directly from us to you <br /> —with love.</p></div>
        </div>
    );
};

export default Quote;