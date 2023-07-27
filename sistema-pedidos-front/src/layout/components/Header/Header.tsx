import styled from "styled-components";
import SystemName from "../../../components/Logo/SystemName";
import ActionHeader from "./ActionHeader";

type HeaderProps = {
    actionText: string;
    actionUrl: string;
}

function Header({actionText, actionUrl}: HeaderProps) {

    return <>
      <Container>
        <Flex>
          <ActionHeader actionText={actionText} actionUrl={actionUrl}/>
          <SystemName fontSize={"16px"} />
        </Flex>
      </Container>
    </>
  }
  
export default Header;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  padding: 20px 0;
`;
