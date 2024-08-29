import React from 'react'
import { useParams } from 'react-router';
import './Product.css';

export const Product = () => {
const { productId } = useParams();

return (
    <>
      {[...Array(10)].map((_, index) => (
        <div className="product" key={index}>
          {productId}
        </div>
      ))}
    </>
  );
};