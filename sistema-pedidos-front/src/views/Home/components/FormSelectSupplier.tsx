import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled, { ThemeContext } from "styled-components";
import { ButtonComponent } from "../../../components/Button/ButtonComponent";
import { Form } from "../../../components/form";
import { IOptionsSimpleSelect } from "../../../constant/interface";
import { supplierSchema } from "../../../constant/schema";
import { formatResponseSuppliersForSelect } from "../../../helpers/formatResponse";
import { supplierEndpoints } from "../../../services/endpoints";

interface FormSelectSupplierProps {
  closeModal: Function;
}

export function FormSelectSupplier({
  closeModal,
}: FormSelectSupplierProps) {

  const navigate = useNavigate();

  const { colors } = useContext(ThemeContext);
  const [option, setOptions] = useState<IOptionsSimpleSelect[]>([]);
  
  useEffect(() => {
    supplierEndpoints.suppliers()
      .then(function (response) {
        setOptions(formatResponseSuppliersForSelect(response.data));
      })
      .catch(function (error) {
        const errorMessage = "Não foi possível carregar a lista de fornecedores";
        toast.error(errorMessage, { toastId: errorMessage });
      });
  }, []);

  const createUpdateCollaboratorForm = useForm<any
  >({
    resolver: zodResolver(
      supplierSchema
    ),
  });

  const select = (
    data: any
  ) => {
    console.log("Supplier selecionado", data);
    navigate("/fazer-pedido", {replace: true});
    localStorage.setItem("supplier", JSON.stringify(data));
  };


  const {
    handleSubmit,
    control,
    formState: { isSubmitting },
  } = createUpdateCollaboratorForm;

  return (
    <ContainerForm>
      <FormProvider {...createUpdateCollaboratorForm}>
        <form autoComplete="off" onSubmit={handleSubmit(select)}>
          <ContentForm>
            <SectionName>{"Selecione o fornecedor"}</SectionName>
            <Form.Field >
                <Form.Label htmlFor="supplier">{"Fornecedor"}</Form.Label>
                <Form.SimpleSelectForForm
                  name="supplier"
                  control={control}
                  options={option}
                  defaultValue=""
                />
              </Form.Field>
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
              {"Entrar"}
            </ButtonComponent>
          </ActionsButton>
        </form>
      </FormProvider>
    </ContainerForm>
  );
}

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
