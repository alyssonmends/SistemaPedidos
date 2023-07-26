using SistemaPedidos.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SistemaPedidos.Repositorios.Interfaces
{
    public interface IFornecedorRepositorio
    {
        Task<List<FornecedorModel>> BuscarFornecedores();

        Task<FornecedorModel> BuscarPorId(int id);

        Task<FornecedorModel> AdicionarFornecedor(FornecedorModel fornecedor);

        Task<FornecedorModel> AtualizarFornecedor(FornecedorModel fornecedor, int id);

        Task<bool> DeletarFornecedor(int id);
    }
}
