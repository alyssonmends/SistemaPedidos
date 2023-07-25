import styled from "styled-components";

function ActionHeader() {

    return <>
        <Center>
            <ImageReload></ImageReload>
            <Text></Text>
        </Center>
    </>
}

export default ActionHeader;

export const Center = styled.div`
    display: flex;
    align-items: center;
`;
 
export const ImageReload = styled.img`
    text-align: center;
`;

export const Text = styled.p`
    text-align: center;
`;