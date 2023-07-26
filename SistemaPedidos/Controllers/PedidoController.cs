using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SistemaPedidos.Models;
using SistemaPedidos.Repositorios.Interfaces;

namespace SistemaPedidos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
        private readonly IPedidoRepositorio _pedidoRepositorio;

        public PedidoController(IPedidoRepositorio pedidoRepositorio)
        {
            _pedidoRepositorio = pedidoRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<List<PedidoModel>>> BuscarPedidos()
        {
            List<PedidoModel> pedidos = await _pedidoRepositorio.BuscarPedidos();
            return Ok(pedidos);
        }

        [HttpGet("fornecedor/{id}")]
        public async Task<ActionResult<List<PedidoModel>>> BuscarPedidosPorFornecedor(int id)
        {
            List<PedidoModel> pedidosPorFornecedor = await _pedidoRepositorio.BuscarPedidosPorFornecedor(id);
            return Ok(pedidosPorFornecedor);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<PedidoModel>> BuscarPorId(int id)
        {
            PedidoModel pedido = await _pedidoRepositorio.BuscarPorId(id);
            return Ok(pedido);
        }

        [HttpPost]
        public async Task<ActionResult<PedidoModel>> AdicionarPedido([FromBody] PedidoModel pedidoModel)
        {
            PedidoModel pedido = await _pedidoRepositorio.AdicionarPedido(pedidoModel);
            return Ok(pedido);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<PedidoModel>> AtualizarPedido([FromBody] PedidoModel pedidoModel, int id)
        {
            pedidoModel.Codigo = id;
            PedidoModel pedido = await _pedidoRepositorio.AtualizarPedido(pedidoModel, id);
            return Ok(pedido);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<PedidoModel>> DeletarPedido(int id)
        {
            bool deletado = await _pedidoRepositorio.DeletarPedido(id);
            return Ok(deletado);
        }
    }
}
