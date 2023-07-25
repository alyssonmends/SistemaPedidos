import styled from "styled-components";
import BannerImage from "../../assets/images/bannerSupplier.png";
import SupplierName from "../Logo/SupplierName";

function SupplierBanner() {

    return <>
        <Container>
            <Content>
                <TextBanner>
                    <SupplierName supplierName={""}/>
                </TextBanner>
                <Image src={BannerImage} alt="banner" width={500} height={400}/>
            </Content>
        </Container>
        </>
}

export default SupplierBanner;

export const Container = styled.div`
    width: 100%;
    padding: 50px 0;
`;

export const Content = styled.div`
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
`;

export const TextBanner = styled.div`

`;

export const Text = styled.p`

`;

export const Image = styled.img`

`;