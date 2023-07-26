using System;

namespace SistemaPedidos.Models
{
    public class ProdutoModel
    {
        public int Codigo { get; set; }

        public string Descricao { get; set; }

        public DateTime DataCadastro { get; set; }

        public float Valor { get; set; }

        public int FornecedorId { get; set; }
        public FornecedorModel Fornecedor { get; set; }
    }
}
