import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CustomModal } from "../../components/Modal/CustomModal";
import { DefaultTable } from "../../components/Table/Table";
import SectionTitle from "../../components/SectionTitle";
import { ProductI, ProductsTableI } from "../../constant/interface";
import { formatResponseProducts } from "../../helpers/formatResponse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { api } from "../../services/api";
import { productEndpoints } from "../../services/endpoints";
import { FormProductSupplier } from "./components/FormProductSupplier";
import { FormUpdateProductSupplier } from "./components/FormUpdateProductSupplier";

function AllProductsSupplier() {
  const [products, setProducts] = useState<ProductI[]>([]);
  const [columns, setColumns] = useState<ColumnDef<ProductsTableI, any>[]>();
  const [supplierName, setSupplierName] = useState<string>("");
  const [supplierId, setSupplierId] = useState<string>("");
  const [showModal, setShowModal] = useState(false);
  const [product, setProduct] = useState<ProductI>();
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    var json = localStorage.getItem("supplier") || "";
    if (json == "") {
      navigate("/", { replace: true });
      toast.error("Selecione o fornecedor");
    } else {
      const data = JSON.parse(json);
      setSupplierName(data.supplier.label);
      setSupplierId(data.supplier.value);
    }
  }, []);

  useEffect(() => {
    if (supplierId != "") {
      api
        .get(`/Produto/fornecedor/${supplierId}`)
        .then(function (response) {
          setProducts(formatResponseProducts(response.data));
        })
        .catch(function (error) {
          const errorMessage = "Não foi possível carregar a lista de produtos";
          toast.error(errorMessage, { toastId: errorMessage });
        });
    }
  }, [supplierId]);

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
        cell: (info) => <span>R$ {info.getValue()}</span>,
        header: () => <span>{"Valor Total"}</span>,
      }),
      columnHelper.accessor("date", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Data de criação"}</span>,
      }),
      columnHelper.accessor("action", {
        cell: (info) => (
          <Flex>
            <AiFillDelete
              onClick={() => removeProduct(info.row.original.code.toString())}
            />
            <AiFillEdit onClick={() => updateProduct(info.row.original.code.toString())} />
          </Flex>
        ),
        header: () => <span></span>,
      }),
    ]);
  }, [products]);

  const removeProduct = async (id: string) => {
    if (id) {
      await productEndpoints
        .remove(id)
        .then(function (response) {
          window.location.reload();
        })
        .catch((error) => {
          toast.error("Não foi possível deletar o produto");
        });
    }
  };

  const updateProduct = async (id: string) => {
    if (id) {
      productEndpoints
        .product(id)
        .then(function (response) {
          setProduct(response.data);
          setShowUpdateModal(true);
        })
        .catch(function (error) {
          const errorMessage =
            "Não foi possível carregar as informações do fornecedor.";
          toast.error(errorMessage, { toastId: errorMessage });
        });
    }
  };

  return (
    <>
      <Header actionText={"Voltar"} actionUrl={"/todos-fornecedores"} />
      <Content>
        <Flex>
          <SectionTitle
            title={`Todos produtos do fornecedor ${supplierName}`}
          />
          <ButtonS onClick={() => setShowModal(true)}>
            Criar um novo produto
          </ButtonS>
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
          <FormProductSupplier
            closeModal={() => setShowModal(false)}
            supplierId={supplierId}
          />
        </CustomModal>
      )}
      {showUpdateModal && (
        <CustomModal
          show={showUpdateModal}
          title={"Produto"}
          onClose={() => setShowUpdateModal(false)}
        >
          <FormUpdateProductSupplier
            closeModal={() => setShowUpdateModal(false)}
            product={product}
          />
        </CustomModal>
      )}
    </>
  );
}

export default AllProductsSupplier;

export const ButtonS = styled.button`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.white};
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
  svg {
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
