import styled from "styled-components";
import SectionTitle from "../../components/Ui/SectionTitle";
import Footer from "../../layout/components/Footer/Footer";
import Header from "../../layout/components/Header/Header";
import { useEffect, useState } from "react";
import { OrdersI, OrdersTableI } from "../../constant/interface";
import { DefaultTable } from "../../components/Table/Table";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { formatResponseOrders } from "../../helpers/formatResponse";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { ordersData } from "../../constant/data";
import { orderEndpoints } from "../../services/endpoints";
import useAxios from "../../hooks/useAxios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

function AllOrdersSupplier() {
  const [orders, setOrders] = useState<OrdersI[]>([]);
  const [columns, setColumns] = useState<ColumnDef<OrdersTableI, any>[]>();
  const [supplierName, setSupplierName] = useState<string>("");
  const [supplierId, setSupplierId] = useState<string>("");
  const navigate = useNavigate();
  
  useEffect(() => {
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
      api.get(`/Pedido/fornecedor/${supplierId}`)
        .then(function (response) {
           setOrders(
            formatResponseOrders(response.data)
          );
        }).catch(function (error) {
          const errorMessage = "Não foi possível carregar a lista de pedidos";
          toast.error(errorMessage, { toastId: errorMessage });
        });
    }
  }, [supplierId])

  const columnHelper = createColumnHelper<OrdersTableI>();

  useEffect(() => {
    setColumns([
      columnHelper.accessor("code", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Código"}</span>,
      }),
      columnHelper.accessor("supplierName", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Nome do fornecedor"}</span>,
      }),
      columnHelper.accessor("value", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Valor Total"}</span>,
      }),
      columnHelper.accessor("quantity", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Quantidade"}</span>,
      }),
      columnHelper.accessor("date", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Data do pedido"}</span>,
      }),
      columnHelper.accessor("action", {
        cell: (info) => <Flex>
          <AiFillDelete onClick={() => removeOrder(info.row.original.produtoId)}/>
          {/* <AiFillEdit onClick={() => {}}/> */}
        </Flex>,
        header: () => <span>{}</span>,
      }),
    ]);
  }, [orders]);

  const removeOrder = async (id: string) => {
    if (id) {
      console.log(orderEndpoints.remove, id);
      // TO DO
      //await productEndpoints.remove(id);
    }
  };

  return (
    <>
      <Header actionText={"Voltar"} actionUrl={"/todos-fornecedores"} />
      <Content>
        <SectionTitle title={`Todos pedidos realizados na loja ${supplierName}`} />
        <DefaultTable data={orders} columns={columns || []} />
      </Content>
      <Footer />
    </>
  );
}

export default AllOrdersSupplier;

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
