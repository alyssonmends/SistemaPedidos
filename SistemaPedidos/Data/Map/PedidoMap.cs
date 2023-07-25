using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SistemaPedidos.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

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
        }
    }
}
