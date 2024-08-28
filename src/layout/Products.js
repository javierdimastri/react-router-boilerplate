import React from 'react'
import { Link } from 'react-router-dom';

export const Products = () => {

  const products = ["Product 1", "Product 2"];

  const renderList = () => {
    return products.map((product, index) => {

          return (
            <li>
              <Link to={`product-${index}`}>{product}</Link>
            </li>
          )
        })
  };

  return (
    <ul className="products">
      { renderList() }
    </ul>
  )
}