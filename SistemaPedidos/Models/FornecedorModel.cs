using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaPedidos.Models
{
    public class FornecedorModel
    {
        [Key]

        [Required]
        public int Id { get; set; }

        [Required(ErrorMessage = "Campo CNPJ é obrigatório")]
        public int Cnpj { get; set; }

        [Required(ErrorMessage = "Campo Razão Social é obrigatório")]
        public string RazaoSocial { get; set; }

        [Required, StringLength(2, ErrorMessage = "Limite máximo de 2 caracteres")]
        public string Uf { get; set; }

        [StringLength(80, ErrorMessage = "Limite máximo de 80 caracteres")]
        public string Email { get; set; }
        
        [Required(ErrorMessage = "Campo Nome é obrigatório")]
        public string Nome { get; set; }
    }
}
