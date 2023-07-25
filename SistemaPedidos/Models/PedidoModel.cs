using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaPedidos.Models
{
    public class PedidoModel
    {
        [Key]

        [Required]
        public int Codigo { get; set; }

        public DateTime DataPedido { get; set; }

        public ProdutoModel Produto { get; set; }

        [Range(1, 1000, ErrorMessage = "Valores é entre 1 à 1000")]
        public int QuantidadeProdutos { get; set; }

        public FornecedorModel Fornecedor { get; set; }

        [Required]
        public float ValorTotal { get; set; }
    }
}
