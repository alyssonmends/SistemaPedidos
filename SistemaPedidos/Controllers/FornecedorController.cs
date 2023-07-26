using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SistemaPedidos.Models;
using SistemaPedidos.Repositorios.Interfaces;

namespace SistemaPedidos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FornecedorController : ControllerBase
    {
        private readonly IFornecedorRepositorio _fornecedorRepositorio;

        public FornecedorController(IFornecedorRepositorio fornecedorRepositorio)
        {
            _fornecedorRepositorio = fornecedorRepositorio;
        }

        [HttpGet]
        public async Task<ActionResult<List<FornecedorModel>>> BuscarFornecedores()
        {
            List<FornecedorModel> fornecedores = await _fornecedorRepositorio.BuscarFornecedores();
            return Ok(fornecedores);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<FornecedorModel>> BuscarPorId(int id)
        {
            FornecedorModel fornecedor = await _fornecedorRepositorio.BuscarPorId(id);
            return Ok(fornecedor);
        }

        [HttpPost]
        public async Task<ActionResult<FornecedorModel>> AdicionarFornecedor([FromBody] FornecedorModel fornecedorModel)
        {
            FornecedorModel fornecedor = await _fornecedorRepositorio.AdicionarFornecedor(fornecedorModel);
            return Ok(fornecedor);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<FornecedorModel>> AtualizarFornecedor([FromBody] FornecedorModel fornecedorModel, int id)
        {
            fornecedorModel.Id = id;
            FornecedorModel fornecedor = await _fornecedorRepositorio.AtualizarFornecedor(fornecedorModel, id);
            return Ok(fornecedor);
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult<FornecedorModel>> DeletarFornecedor(int id)
        {
            bool deletado = await _fornecedorRepositorio.DeletarFornecedor(id);
            return Ok(deletado);
        }
    }
}
