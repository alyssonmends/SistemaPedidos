import styled from "styled-components";

function Button({text, url}: any) {

    return <>
        <Link href={url} target="_blamk">{text}</Link>
    </>
}

export default Button;

 
export const Link = styled.a`
    background-color: ${({theme}) => theme.colors.secondary};
    font-size: 14px;
    border-radius: 6px;
`;