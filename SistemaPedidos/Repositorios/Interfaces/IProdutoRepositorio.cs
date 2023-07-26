using SistemaPedidos.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SistemaPedidos.Repositorios.Interfaces
{
    public interface IProdutoRepositorio
    {
        Task<List<ProdutoModel>> BuscarProdutos();

        Task<ProdutoModel> BuscarPorId(int id);

        Task<ProdutoModel> AdicionarProduto(ProdutoModel fornecedor);

        Task<ProdutoModel> AtualizarProduto(ProdutoModel fornecedor, int id);

        Task<bool> DeletarProduto(int id);
    }
}
