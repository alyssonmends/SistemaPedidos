import { z } from "zod";

export const supplierSchema = z.object({
  supplier: z.object(
      {
        value: z.string(),
        label: z.string(),
      },
      {
        invalid_type_error: "O fornecedor é obrigatória",
      }
    ),
  });

export const createUpdateSupplierSchema = z.object({
  nome: z.string().nonempty({}),
  razaoSocial: z.string().nonempty({}),
  email: z.string().nonempty({}),
  uf: z.string().nonempty({}),
  cnpj: z.string().nonempty({}),
  });

export const createUpdateProductSchema = z.object({
  descricao: z.string().nonempty({}),
  valor: z.string().nonempty({}).transform((value) => value.replace(",", ".")),
});  