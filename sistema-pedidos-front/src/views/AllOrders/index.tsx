import styled from "styled-components";
import SectionTitle from "../../components/Ui/SectionTitle";
import Footer from "../../layout/components/Footer/Footer";
import Header from "../../layout/components/Header/Header";
import { useEffect, useState } from "react";
import { OrdersI, OrdersTableI } from "../../constant/interface";
import { DefaultTable } from "../../components/Table/Table";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { formatResponseOrders } from "../../helpers/formatResponse";
import { AiFillDelete } from 'react-icons/ai';
import { ordersData } from "../../constant/data";
import useAxios from "../../hooks/useAxios";
import { orderEndpoints } from "../../services/endpoints";

function AllOrders() {
  const [orders, setOrders] = useState<OrdersI[]>([]);
  const [columns, setColumns] = useState<ColumnDef<OrdersTableI, any>[]>();
  const { response, error, loaded, loading } = useAxios({
    method: "get",
    url: "/​Pedido​/fornecedor​/",
    body: {},
  });

  useEffect(() => {
    // TO DO
    // if (response) {
      setOrders(
        formatResponseOrders(ordersData)
      );
    // } else if (error) {
    //   const errorMessage = "Não foi possível carregar a lista de produtos";
    //   toast.error(errorMessage, { toastId: errorMessage });
    // }
  }, [response, error]);

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
