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
    public class ProdutoRepositorio : IProdutoRepositorio
    {
        private readonly SistemaPedidosContext _dbContext;

        public ProdutoRepositorio(SistemaPedidosContext sistemaPedidosContext)
        {
            _dbContext = sistemaPedidosContext;
        }

        public async Task<List<ProdutoModel>> BuscarProdutos()
        {
            return await _dbContext.Produtos
                .Include(x => x.Fornecedor)
                .ToListAsync();
        }

        public async Task<List<ProdutoModel>> BuscarProdutosPorFornecedor(int id)
        {
            var produtos = await _dbContext.Produtos
             .Include(x => x.Fornecedor)
             .ToListAsync();
            var produtosPorFornecedor = produtos.Where(y => y.FornecedorId == id)
             .ToList();
            return produtosPorFornecedor;
        }

        public async Task<ProdutoModel> BuscarPorId(int id)
        {
            return await _dbContext.Produtos
                .Include(x => x.Fornecedor)
                .FirstOrDefaultAsync(x => x.Codigo == id);
        }

        public async Task<ProdutoModel> AdicionarProduto(ProdutoModel produto)
        {
            await _dbContext.Produtos.AddAsync(produto);
            await _dbContext.SaveChangesAsync();

            return produto;
        }

        public async Task<ProdutoModel> AtualizarProduto(ProdutoModel produto, int id)
        {
            ProdutoModel produtoPorId = await BuscarPorId(id);

            if(produtoPorId == null)
            {
                throw new Exception("Produto " + id + " não foi encontrado.");
            }

            produtoPorId.Codigo = produto.Codigo;
            produtoPorId.Descricao = produto.Descricao;
            produtoPorId.DataCadastro = produto.DataCadastro;
            produtoPorId.Valor = produto.Valor;

            _dbContext.Produtos.Update(produtoPorId);
            await _dbContext.SaveChangesAsync();

            return produtoPorId;
        }

        public async Task<bool> DeletarProduto(int id)
        {
            ProdutoModel produtoPorId = await BuscarPorId(id);

            PedidoModel pedidoModel = await _dbContext.Pedidos.FirstOrDefaultAsync(x => x.ProdutoId == id);

            if (produtoPorId == null)
            {
                throw new Exception("Produto" + id + "não foi encontrado.");
            }
            else if (pedidoModel != null)
            {
                throw new Exception("Produto " + id + " tem cadastro em pedido.");
            }

            _dbContext.Produtos.Remove(produtoPorId);
            await _dbContext.SaveChangesAsync();

            return true;
        }
    }
}
