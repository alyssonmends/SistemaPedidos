import styled from "styled-components";
import Footer from "../../layout/components/Footer/Footer";
import SupplierBanner from "../../components/Banner/SupplierBanner";
import SuppliersMenu from "../../components/Menu/SuppliersMenu";
import { useEffect, useState } from "react";

function Supplier() {

  const [supplierName, setSupplierName] = useState<string>("");

  useEffect(() => {
    var json = localStorage.getItem("supplier") || "";
    const data = JSON.parse(json);
    const label = data.supplier.label;
    setSupplierName(label);
  }, [])

    return (
        <ContainerPage>
            <SupplierBanner name={supplierName} />
            <SuppliersMenu />
            <Footer/>
        </ContainerPage>
    )
  }
  
export default Supplier;

const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
`

