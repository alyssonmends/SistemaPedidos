using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SistemaPedidos.Models;

namespace SistemaPedidos.Data.Map
{
    public class FornecedorMap : IEntityTypeConfiguration<FornecedorModel>
    {
        public void Configure(EntityTypeBuilder<FornecedorModel> builder)
        {
            builder.HasKey(x => x.Id);
            builder.Property(x => x.Cnpj).IsRequired();
            builder.Property(x => x.Uf).IsRequired().HasMaxLength(2);
            builder.Property(x => x.RazaoSocial).IsRequired();
            builder.Property(x => x.Nome).IsRequired();
            builder.Property(x => x.Email).HasMaxLength(80);
        }
    }
}
