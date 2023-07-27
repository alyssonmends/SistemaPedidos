import styled from "styled-components";
import Button from "../Button/Button";

function SuppliersMenu() {

    return <>
        <Nav>
            <Button text={"Lista de produtos da loja"} url={"/todos-produtos-loja"} />
            <Button text={"Visualizar pedidos"} url={"/pedidos-loja"} />
            <Button text={"Voltar"} url={"/"} />
        </Nav>
    </>
}

export default SuppliersMenu;


export const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    `;