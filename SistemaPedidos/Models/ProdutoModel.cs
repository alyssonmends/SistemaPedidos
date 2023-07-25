using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaPedidos.Models
{
    public class ProdutoModel
    {
        [Key]

        [Required]
        public int Codigo { get; set; }

        [Required(ErrorMessage = "Campo Descrição é obrigatório")]
        public string Descricao { get; set; }

        public DateTime DataCadastro { get; set; }

        [Required]
        public float Valor { get; set; }
    }
}
