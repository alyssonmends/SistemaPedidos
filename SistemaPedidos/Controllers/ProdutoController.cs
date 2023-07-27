using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using SistemaPedidos.Models;
using SistemaPedidos.Repositorios.Interfaces;

namespace SistemaPedidos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly IProdutoRepositorio _produtoRepositorio;

        public ProdutoController(IProdutoRepositorio produtoRepositorio)
        {
            _produtoRepositorio = produtoRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<List<ProdutoModel>>> BuscarProdutos()
        {
            List<ProdutoModel> produtos = await _produtoRepositorio.BuscarProdutos();
            return Ok(produtos);
        }

        [HttpGet("fornecedor/{id}")]
        public async Task<ActionResult<List<ProdutoModel>>> BuscarProdutosPorFornecedor(int id)
        {
            List<ProdutoModel> produtosPorFornecedor = await _produtoRepositorio.BuscarProdutosPorFornecedor(id);
            return Ok(produtosPorFornecedor);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ProdutoModel>> BuscarPorId(int id)
        {
            ProdutoModel produto = await _produtoRepositorio.BuscarPorId(id);
            return Ok(produto);
        }

        [HttpPost]
        public async Task<ActionResult<ProdutoModel>> AdicionarProduto([FromBody] ProdutoModel produtoModel)
        {
            ProdutoModel produto = await _produtoRepositorio.AdicionarProduto(produtoModel);
            return Ok(produto);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ProdutoModel>> AtualizarProduto([FromBody] ProdutoModel produtoModel, int id)
        {
            produtoModel.Codigo = id;
            ProdutoModel produto = await _produtoRepositorio.AtualizarProduto(produtoModel, id);
            return Ok(produto);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<ProdutoModel>> DeletarProduto(int id)
        {
            bool deletado = await _produtoRepositorio.DeletarProduto(id);
            return Ok(deletado);
        }
    }
}
