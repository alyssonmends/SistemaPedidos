import { useEffect, useState } from "react";
import SectionTitle from "../../components/Ui/SectionTitle";
import Footer from "../../layout/components/Footer/Footer";
import Header from "../../layout/components/Header/Header";
import { ProductI } from "../../constant/interface";
import Card from "./components/Card/Card";
import styled from "styled-components";
import { productsData } from "../../constant/data";
import { formatResponseProducts } from "../../helpers/formatResponse";

function AllProducts() {
  const [supplierName, setSupplierName] = useState<string>("");
  const [supplierId, setSupplierId] = useState<string>("");
  const [products, setProducts] = useState<ProductI[]>([]);

    useEffect(() => {
      var json = localStorage.getItem("supplier") || "";
      const data = JSON.parse(json);
      setSupplierName(data.supplier.label);
      setSupplierId(data.supplier.value);
    }, [])


  useEffect(() => {
    setProducts(formatResponseProducts(productsData));
  }, []);

  const addOrder = (code: number, counter: number, value: number) => {
    const body = {
      "produtoId": 1,
      "quantidadeProdutos": counter,
      "valorTotal": counter*value
    }
    console.log("Dados", body)
  }

  return (
    <Container>
      <Header
        actionText={"Voltar"} actionUrl={"/"}      />
      <Flex>
        <SectionTitle title={`Todos os produtos do fornecedor ${supplierName}`} />
      </Flex>
      <Flex>
        {products.map((product, index) => (
          <Card
            key={index}
            code={product.code}
            description={product.description}
            value={product.value}
            addOrder={addOrder}
            index={index}
            />
        ))}
      </Flex>
      <Footer />
    </Container>
  );
}

export default AllProducts;

export const Container = styled.div`
  padding: 0 50px;
`;

export const ButtonS = styled.button`
  background-color: ${({theme}) => theme.colors.secondary};
  color: ${({theme}) => theme.colors.white};
  display: flex;
  align-items: center;
  font-size: 14px;
  border-radius: 6px;
  padding: 10px;
  border: none;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
