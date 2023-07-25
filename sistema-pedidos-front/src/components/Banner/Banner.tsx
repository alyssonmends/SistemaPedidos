import styled from "styled-components";
import Logo from "../Base/Logo/MainLogo";
import BannerImage from "../../assets/images/banner.png";

function Banner() {

    return <>
        <Container>
            <Content>
                <TextBanner>
                    <Logo/>
                    <Text>A sua loja virtual, onde qualidade e praticidade se encontram</Text>
                </TextBanner>
                <Image src={BannerImage} alt="banner" width={500} height={400}/>
            </Content>
        </Container>
        </>
}

export default Banner;

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