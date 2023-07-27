import { AiFillEdit } from "react-icons/ai";
import { IoMdArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";

type ActionHeaderProps = {
    actionText: string;
    actionUrl: string;
}

function ActionHeader({actionText, actionUrl} : ActionHeaderProps) {

    return <>
        <Button to={actionUrl}>
            <IoMdArrowBack size={20} />
        </Button>
    </>
}

export default ActionHeader;

export const Button = styled(Link)`
    // background-color: ${({theme}) => theme.colors.secondary};
    color: ${({theme}) => theme.colors.secondary};
    display: flex;
    align-items: center;
    font-size: 10px;
    border-radius: 6px;
    padding: 10px;
    border: none;
`;
