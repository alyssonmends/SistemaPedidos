import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled, { ThemeContext } from "styled-components";
import { ButtonComponent } from "../../../components/Button/ButtonComponent";
import { Form } from "../../../components/form";
import { createUpdateProductSchema } from "../../../constant/schema";
import { productEndpoints } from "../../../services/endpoints";
import { toast } from "react-toastify";

interface FormUpdateProductSupplierProps {
  closeModal: Function;
  product: any;
}

export function FormUpdateProductSupplier({
  closeModal,
  product
}: FormUpdateProductSupplierProps) {

  const { colors } = useContext(ThemeContext);

  const createUpdateCollaboratorForm = useForm<any
  >({
    resolver: zodResolver(
      createUpdateProductSchema
    ),
    defaultValues: {
      descricao: product?.descricao,
      valor: product?.valor
    },
  });

  const done = async (
    data: any
  ) => {
    await productEndpoints
      .update(product?.codigo, data)
      .then(({ data }) => {
        window.location.reload();
      })
      .catch((error) =>
        toast.error("Não foi possível atualizar as informações do product!", {
          toastId: `${error?.message}`,
        })
      );
    closeModal();
  };


  const {
    handleSubmit,
    formState: { isSubmitting },
  } = createUpdateCollaboratorForm;

  return (
    <ContainerForm>
      <FormProvider {...createUpdateCollaboratorForm}>
        <form autoComplete="off" onSubmit={handleSubmit(done)}>
          <ContentForm>
            <SFormLabel htmlFor="descricao">{"Descrição"}</SFormLabel>
            <Form.Input
              type="text"
              name="descricao"
              placeholder="Digite a descrição"
            />
             <SFormLabel htmlFor="valor">{"Valor"}</SFormLabel>
            <Form.Input
              type="text"
              name="valor"
              placeholder="Digite o valor"
            />
          </ContentForm>
          <ActionsButton>
            <ButtonComponent
              isDisabled={isSubmitting}
              backgroundColor={colors.white}
              color={colors.primary}
              onClick={() => closeModal()}
              className="btn-cancel-form"
            >
              {"Cancelar"}
            </ButtonComponent>
            <ButtonComponent
              type="submit"
              isDisabled={isSubmitting}
              backgroundColor={colors.primary}
              color={colors.white}
              className="btn-save-form"
            >
              {"Salvar"}
            </ButtonComponent>
          </ActionsButton>
        </form>
      </FormProvider>
    </ContainerForm>
  );
}

const SFormLabel = styled(Form.Label)`
  margin-bottom: 5px;
`;


const ContainerForm = styled.div`
  max-height: calc(100vh - 10rem);
`;

const ContentForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const SectionName = styled.div`
  font-size: 1.1rem;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 0.5rem;
`;

const ActionsButton = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 1rem;
  justify-content: space-between;

  button {
    width: 100%;
  }

`;
