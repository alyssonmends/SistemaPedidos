
export interface ProductResponseI {
    codigo: number,
    descricao: string,
    dataCadastro: string,
    valor: number,
    fornecedorId: number,
    fornecedor: SupplierI
}

export interface IOptionsSimpleSelect {
    value: string;
    label: string;
  }
  

export interface ProductI {
    code: number,
    description: string,
    date: string,
    value: number,
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
    dataCadastro: string,
    fornecedorId: string,
    valor: number
}

export interface OrdersI {
    codigo: number,
    dataPedido: string,
    produtoId: string,
    produto: ProductForOrderI,
    quantidadeProdutos: number,
    fornecedor: SupplierI,
    valorTotal: number,
    fornecedorId: number,
}

export interface OrdersTableI{
    code: number;
    supplierName: string;
    value: string;
    quantity: number;
    date: string;
    action: any;
    produtoId: string;
  }

export interface SuppliersTableI{
    id: number,
    businessName: string,
    cnpj: number,
    uf: string,
    email: string,
    name: string
    action: any;
  }
  
  export interface ProductsTableI{
    code: number;
    description: string;
    date: string;
    value: number;
    action: any;
  }
  