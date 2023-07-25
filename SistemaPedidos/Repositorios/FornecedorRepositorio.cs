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

        public async Task<FornecedorModel> AdicionarFornecedor(FornecedorModel fornecedor)
        {
            await _dbContext.Fornecedores.AddAsync(fornecedor);
            await _dbContext.SaveChangesAsync();

            return fornecedor;
        }

        public async Task<bool> ApagarFornecedor(int id)
        {
            FornecedorModel fornecedorPorId = await BuscarPorId(id);

            if (fornecedorPorId == null)
            {
                throw new Exception("Fornecedor" + id + "não foi encontrado.");
            }

            _dbContext.Fornecedores.Remove(fornecedorPorId);
            await _dbContext.SaveChangesAsync();

            return true;
        }

        public async Task<FornecedorModel> AtualizarFornecedor(FornecedorModel fornecedor, int id)
        {
            FornecedorModel fornecedorPorId = await BuscarPorId(id);

            if(fornecedorPorId == null)
            {
                throw new Exception("Fornecedor" + id + "não foi encontrado.");
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

        public async Task<List<FornecedorModel>> BuscarFornecedores()
        {
            return await _dbContext.Fornecedores.ToListAsync();
        }

        public async Task<FornecedorModel> BuscarPorId(int id)
        {
            return await _dbContext.Fornecedores.FirstOrDefaultAsync(x => x.Id == id);
        }
    }
}
