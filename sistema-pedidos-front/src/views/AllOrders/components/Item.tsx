import styled from "styled-components";

interface ItemProps{
  code: number;
  supplierName: string;
  value: number;
  quantity: number;
  date: string;
}

function Item({code, supplierName, value, quantity, date}: ItemProps) {

  return (
    <>
      <ItemBlock>
          <InfoS>{code}</InfoS>
          <InfoS>{supplierName}</InfoS>
          <InfoS>R$ {value}</InfoS>
          <InfoS>{quantity}</InfoS>
          <InfoS>{date}</InfoS>
      </ItemBlock>
    </>
  );
}

export default Item;


export const ItemBlock = styled.div`
  background-color: ${({theme}) => theme.colors.tertiary};
  border-radius: 4px;
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-around;
  padding: 15px 0;
  width: 100%;
`;

export const InfoS = styled.p`
  
`;