import styled from "styled-components";

function SystemName() {

    return <>
        <SystemNameS>AMOnlineStore</SystemNameS>
    </>
}

export default SystemName;

 
export const SystemNameS = styled.h1`
    text-align: center;
    color: ${({theme}) => theme.colors.primary};
`;