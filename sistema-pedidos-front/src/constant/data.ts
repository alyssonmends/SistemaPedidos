export const productsData = [
  {
    codigo: 1,
    descricao: "Expresso",
    dataCadastro: "2023-07-26T20:33:57.043",
    valor: 5,
    fornecedorId: 1,
    fornecedor: {
      id: 1,
      cnpj: 60120,
      uf: "CE",
      razaoSocial: "Master LTDA",
      nome: "Master",
      email: "master@gmail.com"
    }
  },
  {
    codigo: 2,
    descricao: "Café",
    dataCadastro: "0001-01-01T00:00:00",
    valor: 2,
    fornecedorId: 1,
    fornecedor: {
      id: 1,
      cnpj: 60120,
      uf: "CE",
      razaoSocial: "Master LTDA",
      nome: "Master",
      email: "master@gmail.com"
    }
  }
]


  export const ordersData = [
    {
      codigo: 1,
      dataPedido: "2023-07-26T20:35:06.548",
      produtoId: 1,
      produto: {
        codigo: 1,
        descricao: "Expresso",
        dataCadastro: "2023-07-26T20:33:57.043",
        valor: 5,
        fornecedorId: 1,
        fornecedor:  {
          id: 1,
          cnpj: 60120,
          uf: "CE",
          razaoSocial: "Master LTDA",
          nome: "Master",
          email: "master@gmail.com"
        },
      },
      quantidadeProdutos: 2,
      valorTotal: 10
    },
    {
      codigo: 2,
      dataPedido: "2023-07-26T21:45:42.346",
      produtoId: 2,
      produto: {
        codigo: 2,
        descricao: "Café",
        dataCadastro: "0001-01-01T00:00:00",
        valor: 2,
        fornecedorId: 1,
        fornecedor:  {
          id: 1,
          cnpj: 60120,
          uf: "CE",
          razaoSocial: "Master LTDA",
          nome: "Master",
          email: "master@gmail.com"
        },
      },
      quantidadeProdutos: 2,
      valorTotal: 10
    }
  ] as any;
  
export const suppliersData = [
  {
    id: 1,
    cnpj: 60120,
    uf: "CE",
    razaoSocial: "Master LTDA",
    nome: "Master",
    email: "master@gmail.com"
  },
  {
    id: 2,
    cnpj: 60150,
    uf: "SP",
    razaoSocial: "Alpha",
    nome: "Alpha",
    email: "alpha@gmail.com"
  }
]
