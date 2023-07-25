import styled from "styled-components";

type SupplierNameProps = {
    supplierName: string;
}

function SupplierName({supplierName} : SupplierNameProps) {

    return <>
        <SupplierNameS>{supplierName}</SupplierNameS>
    </>
}

export default SupplierName;

 
export const SupplierNameS = styled.h2`
    text-align: center;
    color: ${({theme}) => theme.colors.primary};
`;