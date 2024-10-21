import { useState } from "react";
import styled from "styled-components";

const Wrap = styled.div`
    height: 500vh;
    background: linear-gradient(#e37676, #00acee);
    display: flex;
    justify-content: center;
`
const Conteiner = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    opacity: 1;
    position: sticky;
    top: 60px;
    height: 100vh;
    width: 1000px;
    background-color: aliceblue;
`
const TextArea = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    align-items: center;
    flex-direction: column;
`
const Title = styled.h1`
    font-size: 36px;
`
const Article = styled.div`
    font-size: 20px;
`
const ImageArea = styled.div`
    background-color: #486782;
`
export default function Layer3(){
    
    return(
        <Wrap>
            <Conteiner>
                <TextArea>
                    <Title>철저하게 한탕주의로</Title>
                    <Article>너도 계속 일하면서 살기 싫잖아</Article>
                </TextArea>
                <ImageArea>
                    
                </ImageArea>
            </Conteiner>
        </Wrap>
    );
}