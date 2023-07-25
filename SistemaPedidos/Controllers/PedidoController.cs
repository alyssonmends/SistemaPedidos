using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SistemaPedidos.Data;
using SistemaPedidos.Models;

namespace SistemaPedidos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PedidoController : ControllerBase
    {
        private readonly SistemaPedidosContext _context;

        public PedidoController(SistemaPedidosContext context)
        {
            _context = context;
        }

        // GET: api/Pedido
        [HttpGet]
        public async Task<ActionResult<IEnumerable<PedidoModel>>> GetPedidos()
        {
            return await _context.Pedidos.ToListAsync();
        }

        // GET: api/Pedido/5
        [HttpGet("{id}")]
        public async Task<ActionResult<PedidoModel>> GetPedidoModel(int id)
        {
            var pedidoModel = await _context.Pedidos.FindAsync(id);

            if (pedidoModel == null)
            {
                return NotFound();
            }

            return pedidoModel;
        }

        // PUT: api/Pedido/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutPedidoModel(int id, PedidoModel pedidoModel)
        {
            if (id != pedidoModel.Codigo)
            {
                return BadRequest();
            }

            _context.Entry(pedidoModel).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PedidoModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Pedido
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<PedidoModel>> PostPedidoModel(PedidoModel pedidoModel)
        {
            _context.Pedidos.Add(pedidoModel);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetPedidoModel", new { id = pedidoModel.Codigo }, pedidoModel);
        }

        // DELETE: api/Pedido/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePedidoModel(int id)
        {
            var pedidoModel = await _context.Pedidos.FindAsync(id);
            if (pedidoModel == null)
            {
                return NotFound();
            }

            _context.Pedidos.Remove(pedidoModel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool PedidoModelExists(int id)
        {
            return _context.Pedidos.Any(e => e.Codigo == id);
        }
    }
}
