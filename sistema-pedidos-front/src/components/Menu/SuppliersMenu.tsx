import styled from "styled-components";
import Button from "../Button/Button";

function SuppliersMenu() {

    return <>
        <Nav>
            <Button text={"Visualizar produtos"} url={"#"} />
            <Button text={"VISUALIZAR PEDIDOS"} url={"#"} />
        </Nav>
    </>
}

export default SuppliersMenu;

 
export const Nav = styled.nav`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;