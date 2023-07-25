import styled from "styled-components";
import SectionTitle from "../../components/Ui/SectionTitle";
import Footer from "../../layout/components/Footer/Footer";
import Header from "../../layout/components/Header/Header";
import { useEffect, useState } from "react";
import { OrdersI, OrdersTableI } from "../../constant/interface";
import Item from "./components/Item";
import { DefaultTable } from "../../components/Table/Table";
import { ColumnDef, createColumnHelper } from "@tanstack/react-table";
import { formatResponseOrders } from "../../helpers/formatResponse";

function AllOrders() {
  const [orders, setOrders] = useState<OrdersI[]>([]);
  const [columns, setColumns] = useState<ColumnDef<OrdersTableI, any>[]>();

  useEffect(() => {
    setOrders(
      formatResponseOrders([
        {
          codigo: 2,
          dataPedido: "2023-07-25T17:27:01.989",
          produto: {
            codigo: 0,
            descricao: "Café",
            data: "",
            valor: 3,
          },
          quantidadeProdutos: 2,
          fornecedor: {
            id: 2,
            cnpj: 6000,
            razaoSocial: "Test",
            uf: "CE",
            email: "teste",
            nome: "Test",
          },
          valorTotal: 10,
        },
        {
            codigo: 2,
            dataPedido: "2023-07-25T17:27:01.989",
            produto: {
              codigo: 0,
              descricao: "Café",
              data: "",
              valor: 3,
            },
            quantidadeProdutos: 2,
            fornecedor: {
              id: 2,
              cnpj: 6000,
              razaoSocial: "Test",
              uf: "CE",
              email: "teste",
              nome: "Test",
            },
            valorTotal: 10,
          },
      ])
    );
  }, []);

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

    ]);
  }, [orders]);

  return (
    <>
      <Header supplierName={""} actionText={"Voltar"} />
      <Content>
        <SectionTitle title={"Todos Pedidos"} />
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
