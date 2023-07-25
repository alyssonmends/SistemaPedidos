import styled from "styled-components";
import Button from "../Button/Button";

function NavHome() {

    return <>
        <Nav>
            <Button text={"entre na sua loja"} url={"#"} />
            <Button text={"Ainda não tem loja cadastrada? Cadastre aqui"} url={"#"} />
            <Button text={"VOCÊ É CONSUMIDOR?"} url={"#"} />
            <Button text={"VISUALIZAR TODOS OS PEDIDOS JÁ CRIADOS NA AMONLINESTOR"} url={"#"} />
        </Nav>
    </>
}

export default NavHome;

 
export const Nav = styled.nav`
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;