using Microsoft.EntityFrameworkCore;
using SistemaPedidos.Data.Map;
using SistemaPedidos.Models;
using System.Collections.Generic;

namespace SistemaPedidos.Data
{
    public class SistemaPedidosContext : DbContext
    {
        public SistemaPedidosContext(DbContextOptions<SistemaPedidosContext> options)
            : base(options)
        {
        }

        public DbSet<FornecedorModel> Fornecedores { get; set; }

        public DbSet<PedidoModel> Pedidos { get; set; }

        public DbSet<ProdutoModel> Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new FornecedorMap());
            modelBuilder.ApplyConfiguration(new PedidoMap());
            modelBuilder.ApplyConfiguration(new ProdutoMap());
            base.OnModelCreating(modelBuilder);
        }
    }
}
