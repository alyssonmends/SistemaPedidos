using Microsoft.EntityFrameworkCore;
using SistemaPedidos.Data;
using SistemaPedidos.Models;
using SistemaPedidos.Repositorios.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SistemaPedidos.Repositorios
{
    public class FornecedorRepositorio : IFornecedorRepositorio
    {
        private readonly SistemaPedidosContext _dbContext;

        public FornecedorRepositorio(SistemaPedidosContext sistemaPedidosContext)
        {
            _dbContext = sistemaPedidosContext;
        }

        public async Task<List<FornecedorModel>> BuscarFornecedores()
        {
            return await _dbContext.Fornecedores.ToListAsync();
        }

        public async Task<FornecedorModel> BuscarPorId(int id)
        {
            return await _dbContext.Fornecedores.FirstOrDefaultAsync(x => x.Id == id);
        }

        public async Task<FornecedorModel> AdicionarFornecedor(FornecedorModel fornecedor)
        {
            await _dbContext.Fornecedores.AddAsync(fornecedor);
            await _dbContext.SaveChangesAsync();

            return fornecedor;
        }

        public async Task<FornecedorModel> AtualizarFornecedor(FornecedorModel fornecedor, int id)
        {
            FornecedorModel fornecedorPorId = await BuscarPorId(id);

            if(fornecedorPorId == null)
            {
                throw new Exception("Fornecedor " + id + " não foi encontrado.");
            }

            fornecedorPorId.Cnpj = fornecedor.Cnpj;
            fornecedorPorId.RazaoSocial = fornecedor.RazaoSocial;
            fornecedorPorId.Uf = fornecedor.Uf;
            fornecedorPorId.Email = fornecedor.Email;
            fornecedorPorId.Nome = fornecedor.Nome;

            _dbContext.Fornecedores.Update(fornecedorPorId);
            await _dbContext.SaveChangesAsync();

            return fornecedorPorId;
        }

        public async Task<bool> DeletarFornecedor(int id)
        {
            FornecedorModel fornecedorPorId = await BuscarPorId(id);

            ProdutoModel produtoModel = await _dbContext.Produtos.FirstOrDefaultAsync(x => x.FornecedorId == id);

            PedidoModel pedidoModel = await _dbContext.Pedidos.FirstOrDefaultAsync(x => x.Produto.FornecedorId == id);

            if (fornecedorPorId == null)
            {
                throw new Exception("Fornecedor " + id + " não foi encontrado.");
            } 
            else if (pedidoModel != null)
            {
                throw new Exception("Fornecedor " + id + " tem cadastro em pedido.");
            }
            else if (produtoModel != null)
            {
                throw new Exception("Fornecedor " + id + " tem cadastro em produto.");
            }

            _dbContext.Fornecedores.Remove(fornecedorPorId);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
