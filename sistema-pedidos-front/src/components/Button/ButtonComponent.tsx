import { MouseEventHandler } from "react";
import styled from "styled-components";

interface ButtonProps {
  type?: "button" | "reset" | "submit" | undefined;
  children: any;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  isDisabled?: boolean;
  backgroundColor: string;
  color: string;
  borderColor?: string;
  id?: string;
  className?: string;
  maxHeight?: string;
}

export function ButtonComponent({
  type,
  onClick,
  isDisabled,
  backgroundColor,
  color,
  borderColor,
  children,
  maxHeight,
  ...props
}: ButtonProps) {
  return (
    <SButton
      type={type || "button"}
      onClick={onClick}
      disabled={isDisabled}
      background_color={backgroundColor}
      color={color}
      maxHeight={maxHeight}
      {...props}
    >
      {children}
    </SButton>
  );
}

export const SButton = styled.button.attrs(
  (props: { background_color: string; color: string; maxHeight: string }) => props
)`
  background-color: ${(props) =>
    props.disabled
      ? props.theme.colors.primary
      : props.background_color};
  border: 1px solid
    ${(props) =>
      props.background_color === props.theme.colors.white
        ? props.color
        : props.background_color};
  color: ${(props) =>
    props.disabled ? props.theme.colors.white : props.color};

  font-weight: bold;

  border-radius: 6px;
  padding: 0.2rem 1rem;
  font-size: 1rem;
  min-height: 2rem;
  max-height: ${(props) =>
    props.maxHeight ? props.maxHeight : "2rem"};

`;
