import styled from "styled-components";
import SubLayout from "../../../layout/subLayout";
import Footer from "../home/components/Footer";
import Teamprofile from "./teamProfile";

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Contenier = styled.div`
    height: 40vh;
    width: 1000px;
    background-color: aliceblue;
`

export default function Untity2(){
    return(
        <Wrap>
            <SubLayout/>
            <Contenier>
                <Teamprofile />
            </Contenier>
            <Footer/>
        </Wrap>
    );
}