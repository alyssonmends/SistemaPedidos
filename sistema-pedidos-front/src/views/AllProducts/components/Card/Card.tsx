import styled from "styled-components";
import CarImage from "../../../../assets/images/car.png";

interface CardProps{
  code: number;
  description: string;
  value: number;
  addOrder: Function;
  index: number;
  forOrder: boolean;
}

function Card({code, description,value, addOrder, index, forOrder}: CardProps) {
  console.log(forOrder)
  return (
    <>
      <CardBlock>
          <CodeS>{code}</CodeS>
          <DescriptionS>{description}</DescriptionS>
          <Flex>
            <ValueS>R$ {value}</ValueS>
            <ButtonS forOrder={forOrder} onClick={() => addOrder(index)}><img src={CarImage} alt="" /></ButtonS>
          </Flex>
      </CardBlock>
    </>
  );
}

export default Card;


export const CardBlock = styled.div`
  background-color: ${({theme}) => theme.colors.tertiary};
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 10px;
  width: 20%;
  margin: 10px;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

`;

export const CodeS = styled.p`
  background-color: ${({theme}) => theme.colors.secondary};
  border-radius: 6px;
  padding: 10px;
`;

export const DescriptionS = styled.h3`
font-weight: 500;
`;

export const ValueS = styled.p`
  font-size: 20px;
  font-weight: 200;

`;

export const ButtonS = styled.button.attrs((props: {forOrder: boolean}) => props)`
  background-color: ${(props) => props.forOrder ? "#064E3B" : "#58c477"};
  border: none;
  border-radius: 6px;
  padding: 10px;
  margin-left: 10px;
`;