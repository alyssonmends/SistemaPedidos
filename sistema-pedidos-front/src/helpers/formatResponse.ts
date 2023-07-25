import { OrdersI, OrdersTableI } from "../constant/interface";
import { formatDate } from "./formatDate";

export const formatResponseOrders = (data: OrdersI[]) => {
    try {
      var ordersForTable: OrdersTableI[] = [];
      data.map(
        (order: OrdersI) => {
          const d = {
            code: order.codigo,
            supplierName: order.fornecedor.razaoSocial,
            value: `R$ ${order.valorTotal}`,
            quantity: order.quantidadeProdutos,
            date: formatDate(order.dataPedido)
          } as OrdersTableI;
          ordersForTable.push(d)
        }
      );
      return ordersForTable;
    } catch (err) {
      return [] as any;
    }
  };