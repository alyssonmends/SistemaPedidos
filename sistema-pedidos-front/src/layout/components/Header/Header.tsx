import styled from "styled-components";
import SystemName from "../../../components/Logo/SystemName";
import SupplierName from "../../../components/Logo/SupplierName";
import ActionHeader from "./ActionHeader";

type HeaderProps = {
    supplierName: string;
    actionText: string;
}

function Header({supplierName, actionText}: HeaderProps) {

    return <>
          <Container>
            <Content>
                <SystemName />
                <SupplierName supplierName={supplierName}  />
                <ActionHeader actionText={actionText}/>
            </Content>
          </Container>
    </>
  }
  
export default Header;

export const Container = styled.div`
  width: 100%;
  padding: 50px 0;
`;

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
`;