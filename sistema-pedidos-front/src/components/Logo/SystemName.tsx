import styled from "styled-components";

interface SystemNameProps{
    fontSize: string;
}

function SystemName({fontSize}: SystemNameProps) {

    return <>
        <SystemNameS fontSize={fontSize}>AMOnlineStore</SystemNameS>
    </>
}

export default SystemName;

 
export const SystemNameS = styled.h1.attrs((props: {fontSize: string}) => props)`
    text-align: center;
    color: ${({theme}) => theme.colors.primary};
    font-size: ${(props) => props.fontSize};
    margin: 0;
`;