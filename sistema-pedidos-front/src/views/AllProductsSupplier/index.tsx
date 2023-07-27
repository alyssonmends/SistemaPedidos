import styled from "styled-components";
import SectionTitle from "../../components/Ui/SectionTitle";
import Footer from "../../layout/components/Footer/Footer";
import Header from "../../layout/components/Header/Header";
import { useEffect, useState } from "react";
import { ProductI, ProductsTableI } from "../../constant/interface";
import { DefaultTable } from "../../components/Table/Table";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { productsData } from "../../constant/data";
import useAxios from "../../hooks/useAxios";
import { productEndpoints } from "../../services/endpoints";
import { CustomModal } from "../../components/Modal/CustomModal";
import { FormProduct } from "./components/FormSupplier";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { formatResponseProducts } from "../../helpers/formatResponse";
import { api } from "../../services/api";

function AllProductsSupplier() {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [columns, setColumns] = useState<ColumnDef<ProductsTableI, any>[]>();
  const [supplierName, setSupplierName] = useState<string>("");
  const [supplierId, setSupplierId] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

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
      api.get(`/Produto/fornecedor/${supplierId}`)
        .then(function (response) {
          console.log(response.data);
          setProducts(formatResponseProducts(response.data));
        }).catch(function (error) {
          const errorMessage = "Não foi possível carregar a lista de produtos";
          toast.error(errorMessage, { toastId: errorMessage });
        });
    }
  }, [supplierId])

  const columnHelper = createColumnHelper<ProductsTableI>();

  useEffect(() => {
    setColumns([
      columnHelper.accessor("code", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Código"}</span>,
      }),
      columnHelper.accessor("description", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Nome"}</span>,
      }),
      columnHelper.accessor("value", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Valor Total"}</span>,
      }),
      columnHelper.accessor("date", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Data de criação"}</span>,
      }),
      columnHelper.accessor("action", {
        cell: (info) => <Flex>
          {/* TO DO */}
          <AiFillDelete onClick={() => removeProduct(info.row.original.code.toString())}/>
          <AiFillEdit onClick={() => {}}/>
        </Flex>,
        header: () => <span></span>,
      }),
    ]);
  }, [products]);

  const removeProduct = async (id: string) => {
    if (id) {
      await productEndpoints.remove(id).then(function (response) {
        window.location.reload();
      }).catch((error) => {
        toast.error("Não foi possível deletar o produto")
      })
    }
  };

  return (
    <>
      <Header actionText={"Voltar"} actionUrl={"/todos-fornecedores"} />
      <Content>
        <Flex>
          <SectionTitle title={`Todos produtos do fornecedor ${supplierName}`} />
          <ButtonS onClick={() => setShowModal(true)}>Criar um novo produto</ButtonS>
        </Flex>
        <DefaultTable data={products} columns={columns || []} />
      </Content>
      <Footer />
      {showModal && (
        <CustomModal
            show={showModal}
            title={"Produto"}
            onClose={() => setShowModal(false)}
            >
            <FormProduct
              closeModal={() => setShowModal(false)}
              supplierId={supplierId}
            />
        </CustomModal>
      )}
    </>
  );
}

export default AllProductsSupplier;

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

export const Content = styled.div`
  width: 90%;
  margin: auto;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  svg{
    cursor: pointer;
  }
`;

export const HeaderOrder = styled.div`
  // background-color: ${({ theme }) => theme.colors.quaternary};
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-around;
  // padding: 15px 40px;
  width: 100%;
  margin-bottom: 10px;
`;

export const InfoS = styled.div``;
