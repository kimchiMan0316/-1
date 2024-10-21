import styled from "styled-components";
import Layer1 from "./components/layer1";
import Layer2 from "./components/layer2/layer2";
import Layer3 from "./components/layer3/layer3";
import Footer from "./components/Footer";
import EmploymentLayer from "./components/employmentLayer/employmentLayer";

const Wrap = styled.div`
    height: 1000vh;
`

export default function Home(){
    return(
        <>
            <Wrap>
                <Layer1/>
                <Layer2/>
                <EmploymentLayer/>
                <Layer3/>
                <Footer/>
            </Wrap>
        </>
    );
}