import styled from "styled-components";
import BannerImage from "../../assets/images/bannerSupplier.png";
import SupplierName from "../Logo/SupplierName";
import { useEffect, useState } from "react";

interface SupplierBannerProps{
    name: string;
}

function SupplierBanner({name}: SupplierBannerProps) {

    return <>
        <Container>
            <Content>
                <div>
                    <SupplierName supplierName={name} />
                    <p>Gerencie sua loja.</p>
                </div>
                <img src={BannerImage} alt="banner" width={500} height={400}/>
            </Content>
        </Container>
        </>
}

export default SupplierBanner;

export const Container = styled.div`
    width: 100%;
`;

export const Content = styled.div`
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
