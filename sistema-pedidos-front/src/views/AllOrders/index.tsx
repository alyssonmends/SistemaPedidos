import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { toast } from "react-toastify";
import styled from "styled-components";
import { DefaultTable } from "../../components/Table/Table";
import SectionTitle from "../../components/SectionTitle";
import { OrdersI, OrdersTableI } from "../../constant/interface";
import { formatResponseOrders } from "../../helpers/formatResponse";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { orderEndpoints } from "../../services/endpoints";

function AllOrders() {
  const [orders, setOrders] = useState<OrdersI[]>([]);
  const [columns, setColumns] = useState<ColumnDef<OrdersTableI, any>[]>();

  useEffect(() => {
      orderEndpoints.orders()
        .then(function (response) {
           setOrders(
            formatResponseOrders(response.data)
          );
        }).catch(function (error) {
          const errorMessage = "Não foi possível carregar a lista de pedidos";
          toast.error(errorMessage, { toastId: errorMessage });
        });
  }, [])

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
        cell: (info) => <span>R$ {info.getValue()}</span>,
        header: () => <span>{"Valor Total"}</span>,
      }),
      columnHelper.accessor("quantity", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Quantidade"}</span>,
      }),
      columnHelper.accessor("product", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Produto"}</span>,
      }),
      columnHelper.accessor("date", {
        cell: (info) => info.getValue(),
        header: () => <span>{"Data do pedido"}</span>,
      }),
      columnHelper.accessor("action", {
        cell: (info) => <Flex>
          <AiFillDelete onClick={() => removeOrder(info.row.original.code.toString())}/>
        </Flex>,
        header: () => <span>{}</span>,
      }),
    ]);
  }, [orders]);

  const removeOrder = async (id: string) => {
    if (id) {
      await orderEndpoints.remove(id).then(function (response) {
        window.location.reload();
      }).catch((error) => {
        toast.error("Não foi possível deletar o pedido")
      })
    }
  };

  return (
    <>
      <Header actionText={"Voltar"} actionUrl={"/"} />
      <Content>
        <SectionTitle title={"Todos pedidos realizados por todas as lojas"} />
        <DefaultTable data={orders} columns={columns || []} />
      </Content>
      <Footer />
    </>
  );
}

export default AllOrders;

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
  svg{
    cursor: pointer;
  }
`;

export const HeaderOrder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-around;
  width: 100%;
  margin-bottom: 10px;
`;

export const InfoS = styled.div``;
