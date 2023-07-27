import { IOptionsSimpleSelect, OrdersI, OrdersTableI, ProductI, ProductResponseI, ProductsTableI, SupplierI, SuppliersTableI } from "../constant/interface";
import { formatDate } from "./formatDate";

export const formatResponseOrders = (data: OrdersI[]) => {
    try {
      var ordersForTable: OrdersTableI[] = [];
      data.map(
        (order: OrdersI) => {
          const d = {
            code: order.codigo,
            supplierName: order?.produto?.fornecedor?.nome || "-",
            value: `${order.valorTotal}`,
            quantity: order.quantidadeProdutos,
            date: formatDate(order.dataPedido),
            produtoId: order.produtoId,
            product: order?.produto?.descricao
          } as OrdersTableI;
          ordersForTable.push(d)
        }
      );
      return ordersForTable;
    } catch (err) {
      return [] as any;
    }
  };

  
export const formatResponseProducts = (data: ProductResponseI[]) => {
  try {
    var productsForTable: ProductsTableI[] = [];
    data.map(
      (product: ProductResponseI) => {
        const d = {
          code: product.codigo,
          description: product.descricao,
          value: `${product.valor}`,
          date: formatDate(product.dataCadastro),
        } as any;
        productsForTable.push(d)
      }
    );
    return productsForTable;
  } catch (err) {
    return [] as any;
  }
};


export const formatResponseSuppliers = (data: SupplierI[]) => {
  try {
    var suppliersForTable: SuppliersTableI[] = [];
    data.map(
      (supplier: SupplierI) => {
        const d = {
          id: supplier.id,
          cnpj: supplier.cnpj,
          uf: supplier.uf,
          businessName: supplier.razaoSocial,
          nome: supplier.nome,
          email: supplier.email,
        } as any;
        suppliersForTable.push(d)
      }
    );
    return suppliersForTable;
  } catch (err) {
    return [] as any;
  }
};

export const formatResponseSuppliersForSelect = (data: SupplierI[]) => {
  try {
    var suppliersForTable: IOptionsSimpleSelect[] = [];
    data.map(
      (supplier: SupplierI) => {
        const d ={
          label: supplier.razaoSocial, value: supplier.id.toString()
        } as any;
        suppliersForTable.push(d)
      }
    );
    return suppliersForTable;
  } catch (err) {
    return [] as any;
  }
};