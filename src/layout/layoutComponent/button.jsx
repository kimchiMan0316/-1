import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const Wrap = styled.div`
    transition: all 0.2s ease-in-out;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
    border: none;
    cursor: pointer;
    background-color: ${(props)=>props.backgroundColor};
    &:hover{
        background-color:${(props)=>(props.scroll ? "rgba(255, 255, 255, 0.5)":"#e2e2e2;")};
        backdrop-filter: ${(props)=>(props.scroll ? "10px":"")};
    }
`

const Button = styled.button`
    transition: all 0.6s ease-in-out;
    cursor: pointer;
    font-size: 16px;
    border: none;
    background-color: transparent;
    color: ${(props)=>(props.scroll ? "white":"#4e5968")};
`

export default function TopLayoutButton({text, backgroundColor, color, scroll}){
    return(
        <Wrap scroll={scroll}>
            <Button scroll={scroll} background={backgroundColor} color={color}>{text}</Button>
        </Wrap>
    )
}