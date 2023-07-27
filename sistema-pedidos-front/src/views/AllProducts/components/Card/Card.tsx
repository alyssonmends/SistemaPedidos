import styled from "styled-components";
import CarImage from "../../../../assets/images/car.png";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { RxDividerHorizontal } from "react-icons/rx";

interface CardProps{
  code: number;
  description: string;
  value: number;
  addOrder: Function;
}

function Card({code, description,value, addOrder}: CardProps) {

  const [counter, setCounter] = useState<number>(0);
  const increase = () => {
    setCounter(count => count + 1);
  };
  const decrease = () => {
    if (counter > 0) setCounter(count => count - 1);
  };

  return (
    <>
      <CardBlock>
          <DescriptionS>{description}</DescriptionS>
          <CodeS>Código: {code}</CodeS>
          <Flex>
            <ValueS>R$ {value}</ValueS>
            <div>
              <ButtonCounter onClick={() => decrease()}>
                <RxDividerHorizontal />
              </ButtonCounter>
              <span>{counter}</span>
              <ButtonCounter onClick={() => increase()}>
                <AiOutlinePlus />
              </ButtonCounter>
            </div>
          </Flex>
          <Flex>
            <CodeS>Valor total: R$ {value*counter}</CodeS>
            <ButtonS onClick={() => addOrder(code, counter, value)}>
              <img src={CarImage} alt="" />
              Fazer pedido
            </ButtonS>
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
  margin: 20px 1px;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: -webkit-fill-available;
  margin: 10px 0;
`;

export const CodeS = styled.p`
  border-radius: 6px;
`;

export const DescriptionS = styled.h3`
font-weight: 500;
`;

export const ValueS = styled.p`
  font-size: 20px;
  font-weight: 200;

`;

export const ButtonS = styled.button`
  background-color: #58c477;
  color: #FFF;
  border: none;
  border-radius: 6px;
  padding: 10px;
  margin-left: 10px;
  gap: 10px;
`;


export const ButtonCounter = styled.button`
  background-color: #58c477;
  color: #FFF;
  border: none;
  border-radius: 15px;
  padding: 5px;
  margin: 0 10px;
  gap: 10px;
`;