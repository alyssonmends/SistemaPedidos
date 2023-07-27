import { InputHTMLAttributes, useEffect, useState } from "react";
import { useFormContext } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styled from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  isPassword?: boolean;
  readOnly?: boolean;
  mask?: string;
  formatMask?: Function;
}

export function Input({
  name,
  mask,
  formatMask,
  isPassword,
  readOnly = false,
  ...props
}: InputProps) {
  const { register, watch, setValue } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);

  const inputValue = formatMask && watch(name);

  useEffect(() => {
    if (formatMask) {
      setValue(name, formatMask(inputValue));
    }
  }, [inputValue]);

  return (
    <SContainer>
      <SInput
        id={name}
        readOnly={readOnly}
        {...register(name)}
        {...props}
        autoComplete="auto"
        maxLength={mask?.length}
        type={
          props.type === "password"
            ? isPassword && !showPassword
              ? "password"
              : "text"
            : props.type
            ? props.type
            : "text"
        }
      />
      {isPassword ? (
        <i>
          {showPassword ? (
            <AiFillEyeInvisible
              onClick={(e: any) => setShowPassword(!showPassword)}
            />
          ) : (
            <AiFillEye onClick={(e: any) => setShowPassword(!showPassword)} />
          )}
        </i>
      ) : (
        <i></i>
      )}
    </SContainer>
  );
}

export const SContainer = styled.div`
  position: relative;
  display: flex;
  margin-bottom: 5px;
  i {
    position: absolute;
    top: 10%;
    right: 10px;
  }
  i:hover {
    cursor: pointer;
  }
`;

export const SInput = styled.input`
  height: 2rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: 0.5rem;
  width: 100%;
  padding: 8px;
  font-size: 0.9rem;
  font-style: normal;
  font-weight: 400;
`;
