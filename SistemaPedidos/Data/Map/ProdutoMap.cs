using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using SistemaPedidos.Models;

namespace SistemaPedidos.Data.Map
{
    public class ProdutoMap : IEntityTypeConfiguration<ProdutoModel>
    {
        public void Configure(EntityTypeBuilder<ProdutoModel> builder)
        {
            builder.HasKey(x => x.Codigo);
            builder.Property(x => x.Descricao).IsRequired();
            builder.Property(x => x.DataCadastro);
            builder.Property(x => x.Valor).IsRequired();
            builder.Property(x => x.FornecedorId).IsRequired();

            builder.HasOne(x => x.Fornecedor);
        }
    }
}
