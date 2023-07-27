import styled from "styled-components";
import Button from "../Button/Button";
import { CustomModal } from "../Modal/CustomModal";
import { useState } from "react";
import { FormSelectSupplier } from "../../views/Home/components/FormSelectSupplier";


function SystemMenu() {
    
    const [showModal, setShowModal] = useState(false);

    return <>
        <Nav>
            <ButtonModal onClick={() => setShowModal(true)}>Fazer um pedido</ButtonModal>
            <Button text={"Lista dos fornecedores da AMOnlineStore"} url={"/todos-fornecedores"} />
            <Button text={"Lista de pedidos já criados na AMOnlineStore"} url={"/todos-pedidos"} />
        </Nav>
        {showModal && (
            <CustomModal
                show={showModal}
                title={"Fornecedor"}
                onClose={() => setShowModal(false)}
                >
                <FormSelectSupplier
                    closeModal={() => setShowModal(false)}
                />
            </CustomModal>
        )}
    </>
}

export default SystemMenu;



export const ButtonModal = styled.button`
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.white};

    font-size: 14px;
    border-radius: 6px;
    padding: 10px;
    border: none;
`;

export const Nav = styled.nav`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;