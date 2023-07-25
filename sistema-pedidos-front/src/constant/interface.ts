
export interface ProductI {
    codigo: number,
    descricao: string,
    data: string,
    valor: number,
    forOrder: boolean
}

export interface SupplierI {
    id: number,
    razaoSocial: string,
    cnpj: number,
    uf: string,
    email: string,
    nome: string
}

export interface ProductForOrderI {
    codigo: number,
    descricao: string,
    data: string,
    valor: number
}

export interface OrdersI {
    codigo: number,
    dataPedido: string,
    produto: ProductForOrderI,
    quantidadeProdutos: number,
    fornecedor: SupplierI,
    valorTotal: number
}

export interface OrdersTableI{
    code: number;
    supplierName: string;
    value: string;
    quantity: number;
    date: string;
  }
  