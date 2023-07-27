import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled, { ThemeContext } from "styled-components";
import { ButtonComponent } from "../../../components/Button/ButtonComponent";
import { createUpdateSupplierSchema } from "../../../constant/schema";
import { Form } from "../../../components/Ui/form";
import { supplierEndpoints } from "../../../services/endpoints";
import { toast } from "react-toastify";

interface FormSupplierProps {
  closeModal: Function;
}

export function FormSupplier({
  closeModal,
}: FormSupplierProps) {

  const { colors } = useContext(ThemeContext);
  const createUpdateCollaboratorForm = useForm<any
  >({
    resolver: zodResolver(
      createUpdateSupplierSchema
    ),
  });

  const done = async (
    data: any
  ) => {
    await supplierEndpoints
      .create(data)
      .then(({ data }) => {
        window.location.reload();
      })
      .catch((error) =>
        toast.error("Não foi possível criar fornecedor!", {
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
            <SFormLabel htmlFor="newPassword">{"Nome"}</SFormLabel>
            <Form.Input
              type="text"
              name="nome"
              placeholder="Digite o nome"
            />
             <SFormLabel htmlFor="cnpj">{"Razão social"}</SFormLabel>
            <Form.Input
              type="text"
              name="razaoSocial"
              placeholder="Digite a razão social"
            />
             <SFormLabel htmlFor="newPassword">{"UF"}</SFormLabel>
            <Form.Input
              type="text"
              name="uf"
              placeholder="Digite a UF"
            />
             <SFormLabel htmlFor="newPassword">{"CNPJ"}</SFormLabel>
            <Form.Input
              type="text"
              name="cnpj"
              placeholder="Digite o CNPJ"
            />
            <SFormLabel htmlFor="newPassword">{"E-mail"}</SFormLabel>
            <Form.Input
              type="text"
              name="email"
              placeholder="Digite o e-mail"
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
