import styled from "styled-components";
import TopLayoutButton from "../../../layout/layoutComponent/button";
import { Link } from "react-router-dom";
import EmploymentForm from "./employmentForm";
import Footer from "../home/components/Footer";
import SubLayout from "../../../layout/subLayout";

const Wrap = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Nav = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    border: 1px solid #dfdfdf;
`
const Conteiner = styled.div`
    width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: auto;
`
const Wrapper = styled.div`
    width: 1000px;
    display: flex;
    justify-content: space-between;
`
const Logo = styled.div`
   width: 150px;
   height: 55px;
`
const LogoImage = styled.img`
    width: 100%;
    background-size: cover;
    cursor: pointer;
`
const NavBox = styled.div`
    display: flex;
`
const Middle = styled.div`
    width: 1000px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
`
const TextArea = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 20px 0 ;
    background-color:none;
    width: 100%;
    height: 100px;
`
const Text = styled.h1`
    text-align: center;
    font-size: 24px;
    &[name = "title"]{
        font-size: 32px;
        margin-bottom: 24px;
    }
`
export default function Employment(){
    
    return(
        <Wrap>
            <SubLayout/>       
            <Conteiner> 
                {/* <Middle>
                    <TextArea>
                        <Text name="title">같이 일해봅시다.</Text>
                        <Text>같이 성장하고 같이 농갈라먹는 untity2</Text>
                    </TextArea>
                </Middle> */}
                <EmploymentForm/>
            
            </Conteiner>
            <Footer/>
        </Wrap>
    );
}