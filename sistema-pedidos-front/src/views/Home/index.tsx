import styled from "styled-components";
import Banner from "../../components/Banner/SystemBanner";
import SystemMenu from "../../components/Menu/SystemMenu";
import Footer from "../../components/Footer/Footer";

function Home() {
    return (
        <ContainerPage>
            <Banner />
            <SystemMenu />
            <Footer/>
        </ContainerPage>
    )
  }
  
export default Home;

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`