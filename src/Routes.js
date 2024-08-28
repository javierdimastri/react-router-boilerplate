import { Routes as BaseRoutes, Route } from "react-router-dom";
import Home from "./layout/Home";
import { Products } from "./layout/Products";


export const Routes = () => {

  return (
    <BaseRoutes>
      <Route path="/" element={<Home />} />
      <Route path='products' element={<Products />} />
    </BaseRoutes>
  )
}