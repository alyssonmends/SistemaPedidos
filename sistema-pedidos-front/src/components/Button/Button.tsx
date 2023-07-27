import { Link } from "react-router-dom";
import styled from "styled-components";

interface ButtonProps {
    text: string;
    url: string;
}

function Button({text, url}: ButtonProps) {

    return (
        <ButtonS to={url} >{text}</ButtonS>
    )
}

export default Button;

export const ButtonS = styled(Link)`
    background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.white};

    font-size: 14px;
    border-radius: 6px;
    padding: 10px;
    border: none;
`;