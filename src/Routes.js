import { Routes as BaseRoutes, Route } from "react-router-dom";
import Home from "./layout/Home";
import { Products } from "./layout/Products";
import { Product } from './layout/Product';

export const Routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "products",
    children: [
      {
        index: true,
        element: <Products />,
      },
      {
        path: ":productId",
        element: <Product />,
      },
    ],
  },
]
