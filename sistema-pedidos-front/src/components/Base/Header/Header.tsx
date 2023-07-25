import styled from "styled-components";
import MainLogo from "../Logo/MainLogo";
import SupplierLogo from "../Logo/SupplierLogo";
import ActionHeader from "../Header/ActionHeader";

function Header() {

    return <>
        <Container>
            <Content>
                <MainLogo/>
                <SupplierLogo/>
                <ActionHeader/>
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