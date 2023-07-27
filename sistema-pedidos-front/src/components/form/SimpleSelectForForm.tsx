import { Controller } from "react-hook-form";
import Select, { StylesConfig } from "react-select";
import { useContext } from "react";
import { ThemeContext } from "styled-components";
import { IOptionsSimpleSelect } from "../../constant/interface";

interface SimpleSelectForFormProps {
  name: string;
  control: any;
  options: IOptionsSimpleSelect[];
  defaultValue?: string;
  readonly?: boolean;
}

export function SimpleSelectForForm({
  name,
  control,
  options,
  defaultValue,
  readonly=false,
  ...props
}: SimpleSelectForFormProps) {
  const { colors } = useContext(ThemeContext);

  return (
    <Controller
      {...props}
      name={name}
      control={control}
      render={({ field }) => (
        <Select
          {...field}
          isDisabled={readonly}
          placeholder="Selecione"
          noOptionsMessage={() => "Sem opção"}
          defaultValue={defaultValue}
          options={options}
          onChange={(value) => field.onChange(value)}
          styles={customStylesSelect}
          menuPlacement="auto"
          theme={(theme) => ({
            ...theme,
            colors: {
              ...theme.colors,
              primary: colors.gray,
            },
          })}
        />
      )}
    />
  );
}

export const customStylesSelect: StylesConfig = {
  control: (provided: Record<string, unknown>, state: any) => ({
    ...provided,
    minHeight: "2rem",
    height: "2rem",
    borderRadius: "0.25rem",
    cursor: "pointer",
    "&": {
      border: "1px solid #A2ACB9",
      boxShadow: "none",
    },
    "&:focus": {
      border: "none",
      boxShadow: "none",
    },
    "&:active": {
      border: "none",
      boxShadow: "none",
    },
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    height: "2rem",
    padding: "0 6px",
    borderRadius: "0.25rem",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#BBDFFF" : "white",
    color: "#000000",
    cursor: "pointer",
  }),
  input: (provided, state) => ({
    ...provided,
    margin: "0px",
    borderRadius: "0.25rem",
  }),
  indicatorSeparator: (state) => ({
    display: "none",
  }),
  indicatorsContainer: (provided, state) => ({
    ...provided,
    height: "2rem",
  }),
  menu: (provided, state) => ({
    ...provided,
    width: "100%",
    boxShadow: "0px 0px 4px #509DF6",
  }),
};
