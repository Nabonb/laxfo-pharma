import React from 'react';
import ProductCarousel from './ProductCarousel';
import ProductDetail from './ProductDetail';

const Product = () => {
    return (
        <div className='md:flex md:mx-[80px] mx-4'>
            <div className='md:w-1/2 md:mr-4'><ProductCarousel></ProductCarousel></div>
            <div className='md:w-1/2'><ProductDetail></ProductDetail></div>
        </div>
    );
};

export default Product;