import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import Supplier from "../views/Supplier";
import AllProducts from "../views/AllProducts";
import AllOrders from "../views/AllOrders";

const RoutesCompose: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/fornecedor"} element={<Supplier />} />
      <Route path={"/produtos"} element={<AllProducts />} />
      <Route path={"/pedidos"} element={<AllOrders />} />
    </Routes>
  );
};

export default RoutesCompose;
