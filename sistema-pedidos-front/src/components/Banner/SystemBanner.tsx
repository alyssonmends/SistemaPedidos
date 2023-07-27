import styled from "styled-components";
import BannerImage from "../../assets/images/bannerSystem.png";
import SystemName from "../Logo/SystemName";

function SystemBanner() {
    return <>
        <Container>
            <Content>
                <div>
                    <SystemName fontSize={""}/>
                    <p>A sua loja virtual, onde qualidade e praticidade se encontram.</p>
                </div>
                <img src={BannerImage} alt="banner" width={500} height={400}/>
            </Content>
        </Container>
        </>
}

export default SystemBanner;

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
