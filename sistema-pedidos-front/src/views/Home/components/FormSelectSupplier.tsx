import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled, { ThemeContext } from "styled-components";
import { ButtonComponent } from "../../../components/Button/ButtonComponent";
import { supplierSchema } from "../../../constant/schema";
import { Form } from "../../../components/Ui/form";
import useAxios from "../../../hooks/useAxios";
import { IOptionsSimpleSelect } from "../../../constant/interface";
import {  useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface FormSelectSupplierProps {
  closeModal: Function;
}

export function FormSelectSupplier({
  closeModal,
}: FormSelectSupplierProps) {

  const navigate = useNavigate();

  const { colors } = useContext(ThemeContext);
  const [option, setOptions] = useState<IOptionsSimpleSelect[]>([]);
  const { response, error, loaded, loading } = useAxios({
    method: "get",
    url: "​/Fornecedor",
    body: {},
  });

  useEffect(() => {
    // TO DO
    if (response) {
      console.log("response", response)
      setOptions(
        [{
          label: "Master LTDA", value: "1"
        }, {
          label: "Alpha", value: "2"
        }]
      );
    } else if (error) {
      const errorMessage = "Não foi possível carregar a lista de produtos";
      toast.error(errorMessage, { toastId: errorMessage });
    }
  }, [response, error]);

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
            <Form.Field className="formUnit">
                <Form.Label htmlFor="unit">{"Unidade"}</Form.Label>
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
