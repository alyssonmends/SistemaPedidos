using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SistemaPedidos.Models;

namespace SistemaPedidos.Data.Map
{
    public class PedidoMap : IEntityTypeConfiguration<PedidoModel>
    {
        public void Configure(EntityTypeBuilder<PedidoModel> builder)
        {
            builder.HasKey(x => x.Codigo);
            builder.Property(x => x.DataPedido).IsRequired();
            builder.Property(x => x.QuantidadeProdutos);
            builder.Property(x => x.ValorTotal).IsRequired();
            builder.Property(x => x.ProdutoId).IsRequired();

            builder.HasOne(x => x.Produto);
        }
    }
}
