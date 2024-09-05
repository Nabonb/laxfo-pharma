import React from 'react';
import ProductCarousel from './ProductCarousel';
import ProductDetail from './ProductDetail';

const Product = () => {
    return (
        <div className='flex mx-[80px]'>
            <div className='w-1/2 mr-4'><ProductCarousel></ProductCarousel></div>
            <div className='w-1/2'><ProductDetail></ProductDetail></div>
        </div>
    );
};

export default Product;