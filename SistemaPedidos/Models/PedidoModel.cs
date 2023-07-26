using System;
using System.Collections.Generic;

namespace SistemaPedidos.Models
{
    public class PedidoModel
    {
        public int Codigo { get; set; }

        public DateTime DataPedido { get; set; }

        public int ProdutoId { get; set; }
        public ProdutoModel Produto { get; set; }

        public int QuantidadeProdutos { get; set; }

        public float ValorTotal { get; set; }
    }
}
