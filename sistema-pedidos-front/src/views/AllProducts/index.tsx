import { useEffect, useState } from "react";
import SectionTitle from "../../components/Ui/SectionTitle";
import Footer from "../../layout/components/Footer/Footer";
import Header from "../../layout/components/Header/Header";
import { ProductI } from "../../constant/interface";
import Card from "./components/Card/Card";
import styled from "styled-components";

function AllProducts() {
  const [products, setProducts] = useState<ProductI[]>([]);

  useEffect(() => {
    setProducts([
      {
        codigo: 0,
        descricao: "Café",
        data: "",
        valor: 3,
        forOrder: false
      },
      {
        codigo: 1,
        descricao: "Nescau",
        data: "",
        valor: 3,
        forOrder: false
      },
      {
        codigo: 2,
        descricao: "Cappucino",
        data: "",
        valor: 3,
        forOrder: false
      },
      {
        codigo: 3,
        descricao: "Refri",
        data: "",
        valor: 3,
        forOrder: false
      },
      {
        codigo: 4,
        descricao: "Bolo",
        data: "",
        valor: 3,
        forOrder: false
      }
    ]);
  }, []);

  const confirmOrder = () => {
    // Fazer pedido
    console.log(products.filter(product => product.forOrder == true))
  }

  const addOrder = (index: number) => {
    const productsTemp : ProductI[] = [];

    products.map((product, i) => {
      if (i != index){
        productsTemp.push(product)
      }else{
        const prod ={
          codigo: product.codigo,
          descricao: product.descricao,
          data: product.data,
          valor: product.valor,
          forOrder: !product.forOrder
        }
        productsTemp.push(prod)
      }
    })
    setProducts(productsTemp);
  }

  return (
    <>
      <Header
        supplierName={"Sabores Saudáveis"}
        actionText={"Trocar de loja"}
      />
      <SectionTitle title={"Nossos Produtos"} />
      <Flex>
        {products.map((product, index) => (
          <Card
            key={index}
            code={product.codigo}
            description={product.descricao}
            value={product.valor}
            forOrder={product.forOrder}
            addOrder={addOrder}
            index={index}
            />
        ))}
      </Flex>
      <ButtonS onClick={() => confirmOrder()}>Fazer pedido</ButtonS>
      <Footer />
    </>
  );
}

export default AllProducts;

export const ButtonS = styled.button`
  border: none;
  border-radius: 6px;
  padding: 10px;
  margin-left: 10px;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
