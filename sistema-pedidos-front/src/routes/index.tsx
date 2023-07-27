import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../views/Home";
import AllProducts from "../views/AllProducts";
import AllOrders from "../views/AllOrders";
import AllOrdersSupplier from "../views/AllOrdersSupplier";
import AllProductsSupplier from "../views/AllProductsSupplier";
import AllSuppliers from "../views/AllSuppliers";

const RoutesCompose: FC = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/todos-fornecedores"} element={<AllSuppliers />} />
      <Route path={"/fazer-pedido"} element={<AllProducts />} />
      <Route path={"/todos-pedidos"} element={<AllOrders />} />
      <Route path={"/todos-produtos-loja"} element={<AllProductsSupplier />} />
      <Route path={"/todos-pedidos-loja"} element={<AllOrdersSupplier />} />
    </Routes>
  );
};

export default RoutesCompose;
