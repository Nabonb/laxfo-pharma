import React from 'react';
import quote from "../../assets/images/quote.png"
const Quote = () => {
    return (
        <div className='md:flex'>
            <div className='md:w-1/2'><img className='w-full' src={quote} alt="" /></div>
            <div className='bg-[#677557] flex items-center px-4 py-[51px] md:px-0 md:py-0 md:ps-[51px] md:w-1/2 text-white'><p className='text-[40px] font-normal italic'>As a certified organic, family-run <br /> pharmaceutical, our Laxfo <br /> goes directly from us to you <br /> —with love.</p></div>
        </div>
    );
};

export default Quote;