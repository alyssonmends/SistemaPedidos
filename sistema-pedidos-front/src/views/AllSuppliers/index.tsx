import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";
import { CustomModal } from "../../components/Modal/CustomModal";
import { DefaultTable } from "../../components/Table/Table";
import SectionTitle from "../../components/SectionTitle";
import { SupplierI, SuppliersTableI } from "../../constant/interface";
import { formatResponseSuppliers } from "../../helpers/formatResponse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { supplierEndpoints } from "../../services/endpoints";
import { FormSupplier } from "./components/FormSupplier";
import { FormUpdateSupplier } from "./components/FormUpdateSupplier";

function AllSuppliers() {

  const [showModal, setShowModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [suppliers, setSuppliers] = useState<SupplierI[]>([]);
  const [columns, setColumns] = useState<ColumnDef<SuppliersTableI, any>[]>();
  const [supplier, setSupplier] = useState<SupplierI>();
  const navigate = useNavigate();

  useEffect(() => {
      supplierEndpoints.suppliers()
        .then(function (response) {
          setSuppliers(formatResponseSuppliers(response.data));
        })
        .catch(function (error) {
          const errorMessage = "Não foi possível carregar a lista de fornecedores";
          toast.error(errorMessage, { toastId: errorMessage });
        });
  }, []);

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
          <AiFillEdit onClick={() => updateSupplier(info.row.original.id.toString())}/>
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

  const updateSupplier = async (id: string) => {
    if (id) {
      supplierEndpoints.supplier(id)
      .then(function (response) {
        setSupplier(response.data)
        setShowUpdateModal(true)
      }).catch(function (error) {
        const errorMessage = "Não foi possível carregar as informações do fornecedor.";
        toast.error(errorMessage, { toastId: errorMessage });
      });
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
            title={"Criar Fornecedor"}
            onClose={() => setShowModal(false)}
            >
            <FormSupplier
                closeModal={() => setShowModal(false)}
            />
        </CustomModal>
      )}
      {showUpdateModal && (
        <CustomModal
            show={showUpdateModal}
            title={"Atualizar fornecedor"}
            onClose={() => setShowUpdateModal(false)}
            >
            <FormUpdateSupplier
                closeModal={() => setShowUpdateModal(false)}
                supplier={supplier}
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
