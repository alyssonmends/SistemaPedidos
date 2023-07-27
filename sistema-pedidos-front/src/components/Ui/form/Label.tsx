import { LabelHTMLAttributes } from "react";
import styled from "styled-components";

export function Label(props: LabelHTMLAttributes<HTMLLabelElement>) {
  return <SLabel {...props} />;
}

const SLabel = styled.label`
  font-style: normal;
  font-weight: 600;
  font-size: 0.85rem;
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.black};
`;

