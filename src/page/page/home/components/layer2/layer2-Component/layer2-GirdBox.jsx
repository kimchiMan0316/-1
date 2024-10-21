import styled from "styled-components";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";

const Wrap = styled.div`
    transition: all 0.3s ease-in-out;
    width: 100%;
    height: 100%;
    background-color: aliceblue;
    border-radius: 16px;
    display: flex;
    justify-content: left;
    height: 100%;
    &:hover{
        box-shadow: 2px 2px 16px #d4d4d4;
    }
`
const Conteiner = styled.div`
    transition: all 0.3s ease-in-out;
    margin: 10px 16px;
    margin-bottom: 10px;
`
const STitle = styled.div`
    transition: all 0.3s ease-in-out;
    position: relative;
    top: 20px;
    z-index: 1;
    color: #929292;
    font-weight: 500;
    opacity: ${(props)=>(props.article ? "0":"1")};
`
const Title = styled.h1`
    transition: all 0.3s ease-in-out;
    z-index: 2;
    width: 200px;
    color: #333d4b;
    font-size: ${(props)=>(props.article ? "24px":"22px")};
    margin-top: ${(props)=>(props.article ? "0px":"30px")};
    margin-bottom: ${(props)=>(props.article ? "20px":"0px")};
    font-weight: 600;
`
const Text = styled.h1`
    transition: all 0.3s ease-in-out;
    margin: 20px 0;
    font-size: 18px;
    font-weight: 500;
    color: #686868;
    opacity: ${(props)=>(props.article ? "0":"1")};
`

export default function Layer2Box({title ,text, sTitle}){
    const [article , setArticle] = useState(true)
    const boxInf = () =>{
        setArticle(false);
    }
    const boxInfDown = () =>{
        setArticle(true)
    }
    return(
        <Wrap onMouseEnter={boxInf} onMouseLeave={boxInfDown}>
            <Conteiner article = {article}>
                <STitle article = {article}>{sTitle}</STitle>
                <Title article = {article}>{title}</Title>
                { article ? null:<Text article = {article}>{text}</Text>} 
                { article ? <CiCirclePlus size={40} />:null} 
            </Conteiner>
        </Wrap>
    );
}