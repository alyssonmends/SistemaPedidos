using SistemaPedidos.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace SistemaPedidos.Repositorios.Interfaces
{
    public interface IPedidoRepositorio
    {
        Task<List<PedidoModel>> BuscarPedidos();

        Task<List<PedidoModel>> BuscarPedidosPorFornecedor(int id);

        Task<PedidoModel> BuscarPorId(int id);

        Task<PedidoModel> AdicionarPedido(PedidoModel pedido);

        Task<PedidoModel> AtualizarPedido(PedidoModel pedido, int id);

        Task<bool> DeletarPedido(int id);
    }
}
