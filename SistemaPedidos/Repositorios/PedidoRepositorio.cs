using Microsoft.EntityFrameworkCore;
using SistemaPedidos.Data;
using SistemaPedidos.Models;
using SistemaPedidos.Repositorios.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace SistemaPedidos.Repositorios
{
    public class PedidoRepositorio : IPedidoRepositorio
    {
        private readonly SistemaPedidosContext _dbContext;

        public PedidoRepositorio(SistemaPedidosContext sistemaPedidosContext)
        {
            _dbContext = sistemaPedidosContext;
        }

        public async Task<List<PedidoModel>> BuscarPedidos()
        {
            return await _dbContext.Pedidos
                .Include(x => x.Produto)
                .ToListAsync();
        }

        public async Task<List<PedidoModel>> BuscarPedidosPorFornecedor(int id)
        {
            var pedidos = await _dbContext.Pedidos
             .Include(x => x.Produto)
             .ToListAsync();
            var pedidosPorFornecedor = pedidos.Where(y => y.Produto.FornecedorId == id)
             .ToList();
            return pedidosPorFornecedor;
        }

        public async Task<PedidoModel> BuscarPorId(int id)
        {
            return await _dbContext.Pedidos
                .Include(x => x.Produto)
                .FirstOrDefaultAsync(x => x.Codigo == id);
        }

        public async Task<PedidoModel> AdicionarPedido(PedidoModel pedido)
        {
            await _dbContext.Pedidos.AddAsync(pedido);
            await _dbContext.SaveChangesAsync();

            return pedido;
        }

        public async Task<PedidoModel> AtualizarPedido(PedidoModel pedido, int id)
        {
            PedidoModel pedidoPorId = await BuscarPorId(id);

            if(pedidoPorId == null)
            {
                throw new Exception("Pedido" + id + "não foi encontrado.");
            }

            pedidoPorId.Codigo = pedido.Codigo;
            pedidoPorId.DataPedido = pedido.DataPedido;
            pedidoPorId.QuantidadeProdutos = pedido.QuantidadeProdutos;
            pedidoPorId.ValorTotal = pedido.ValorTotal;

            _dbContext.Pedidos.Update(pedidoPorId);
            await _dbContext.SaveChangesAsync();

            return pedidoPorId;
        }

        public async Task<bool> DeletarPedido(int id)
        {
            PedidoModel pedidoPorId = await BuscarPorId(id);

            if (pedidoPorId == null)
            {
                throw new Exception("Pedido" + id + "não foi encontrado.");
            }

            _dbContext.Pedidos.Remove(pedidoPorId);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
