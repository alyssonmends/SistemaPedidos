import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ProductI } from "../../constant/interface";
import Card from "./components/Card/Card";
import styled from "styled-components";
import { formatResponseProducts } from "../../helpers/formatResponse";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { orderEndpoints, productEndpoints } from "../../services/endpoints";

function AllProducts() {
  const [supplierName, setSupplierName] = useState<string>("");
  const [supplierId, setSupplierId] = useState<string>("");
  const [products, setProducts] = useState<ProductI[]>([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    var json = localStorage.getItem("supplier") || "";
    const data = JSON.parse(json);
    setSupplierName(data.supplier.label);
    setSupplierId(data.supplier.value);
  }, [])

  useEffect( () =>  {
    var json = localStorage.getItem("supplier") || "";
    if (json == ""){
      navigate("/", {replace: true})
      toast.error("Selecione o fornecedor")
    }else{
      const data = JSON.parse(json);
      setSupplierName(data.supplier.label);
      setSupplierId(data.supplier.value);
    }
  }, [])
 
  useEffect(() => {
    if(supplierId != ""){
      productEndpoints.productsBySupplie(supplierId)
        .then(function (response) {
          setProducts(formatResponseProducts(response.data));
        }).catch(function (error) {
          const errorMessage = "Não foi possível carregar a lista de produtos";
          toast.error(errorMessage, { toastId: errorMessage });
        });
    }
  }, [supplierId])

  const addOrder = (code: number, counter: number, value: number) => {
    if (counter == 0){
      toast.error("Não pode fazer pedido com a quantidade do produzo zerada")
    }else{
      const body = {
        "produtoId": code,
        "quantidadeProdutos": counter,
        "valorTotal": counter*value
      }
      orderEndpoints
        .create(body)
        .then(({ data }) => {
          window.location.reload();
        })
        .catch((error) =>
          toast.error("Não foi possível criar pedido!", {
            toastId: `${error?.message}`,
          })
        );
    }
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
