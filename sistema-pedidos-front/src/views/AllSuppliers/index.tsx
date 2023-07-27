import styled from "styled-components";
import SectionTitle from "../../components/Ui/SectionTitle";
import Footer from "../../layout/components/Footer/Footer";
import Header from "../../layout/components/Header/Header";
import { useEffect, useState } from "react";
import { OrdersTableI, SupplierI, SuppliersTableI } from "../../constant/interface";
import { DefaultTable } from "../../components/Table/Table";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { suppliersData } from "../../constant/data";
import useAxios from "../../hooks/useAxios";
import { orderEndpoints, supplierEndpoints } from "../../services/endpoints";
import { formatResponseSuppliers } from "../../helpers/formatResponse";
import { useNavigate } from "react-router-dom";
import { CustomModal } from "../../components/Modal/CustomModal";
import { FormSupplier } from "./components/FormSupplier";
import { toast } from "react-toastify";

function AllSuppliers() {

  const [showModal, setShowModal] = useState(false);
  const [suppliers, setSupplier] = useState<SupplierI[]>([]);
  const [columns, setColumns] = useState<ColumnDef<SuppliersTableI, any>[]>();
  const { response, error, loaded, loading } = useAxios({
    method: "get",
    url: "/Fornecedor",
    body: {},
  });

  const navigate = useNavigate();

  useEffect(() => {
    if (response) {
      setSupplier(formatResponseSuppliers(response));
    } else if (error) {
      const errorMessage = "Não foi possível carregar a lista de produtos";
      toast.error(errorMessage, { toastId: errorMessage });
    }
  }, [response, error]);

  const columnHelper = createColumnHelper<SuppliersTableI>();

  useEffect(() => {
    setColumns([
      columnHelper.accessor("id", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Id"}</span>,
      }),
      columnHelper.accessor("businessName", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Nome do fornecedor"}</span>,
      }),
      columnHelper.accessor("cnpj", {
        cell: (info) => info.getValue(),
        header: () => <span>{"CNPJ"}</span>,
      }),
      columnHelper.accessor("uf", {
        cell: (info) => info.getValue(),
        header: () => <span>{"UF"}</span>,
      }),
      columnHelper.accessor("email", {
        cell: (info) => info.getValue(),
        header: () => <span>{"E-mail"}</span>,
      }),
      columnHelper.accessor("action", {
        cell: (info) => <Flex>
          <ButtonS onClick={() => {
              navigate("/todos-produtos-loja", { replace: true});
              localStorage.setItem("supplier", JSON.stringify({"supplier":{"value":info.row.original.id,"label": info.row.original.businessName}}));
          }}>Produtos</ButtonS>
          <ButtonS onClick={() => {
              navigate("/todos-pedidos-loja", {replace: true});
              localStorage.setItem("supplier", JSON.stringify({"supplier":{"value":info.row.original.id,"label":info.row.original.businessName}}));
          }}>Pedidos</ButtonS>
          <AiFillDelete onClick={() => removeSupplier(info.row.original.id.toString())}/>
          <AiFillEdit onClick={() => removeSupplier(info.row.original.id.toString())}/>
        </Flex>,
        header: () => <span>{}</span>,
      }),
    ]);
  }, [suppliers]);

  const removeSupplier = async (id: string) => {
    if (id) {
      await supplierEndpoints.remove(id).then(function (response) {
        window.location.reload();
      }).catch((error) => {
        toast.error("Não foi possível deletar o fornecedor")
      })
    }
  };

  return (
    <>
      <Header actionText={"Voltar"} actionUrl={"/"} />
      <Content>
      <Flex>
        <SectionTitle title={`Todos fornecedores`} />
        <ButtonS onClick={() => setShowModal(true)}>Criar um novo fornecedor</ButtonS>
      </Flex>
      <DefaultTable data={suppliers} columns={columns || []} />
      </Content>
      <Footer />
      {showModal && (
        <CustomModal
            show={showModal}
            title={"Fornecedor"}
            onClose={() => setShowModal(false)}
            >
            <FormSupplier
                closeModal={() => setShowModal(false)}
            />
        </CustomModal>
      )}
    </>
  );
}

export default AllSuppliers;


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
