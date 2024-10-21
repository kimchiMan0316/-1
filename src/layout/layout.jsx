import { Link, Outlet, useNavigate } from "react-router-dom";
import styled from "styled-components";
import TopLayoutButton from "./layoutComponent/button";
import { useState } from "react";

const Wrapper = styled.div`
    transition: all 0.6s ease-in-out;
    z-index: 2;
    width: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    border-bottom: ${(props)=>(props.scroll ? "none":"1px solid #dfdfdf")};
    background-color: ${(props)=>(props.scroll ? "transparent":"white")};
`
const Conteiner = styled.div`
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

const Menu = styled.div`
    display: flex;
`


export default function Layout(){
    const [scroll, setScroll] = useState(true);
    const [currentScroll, setCurrentScroll] = useState(0)
    const navigate = useNavigate();

    document.addEventListener("scroll",()=>{
        const vh = window.innerHeight * 0.01;
        const position = window.scrollY;
        setCurrentScroll(position);
        if(currentScroll > 40*vh ){
            setScroll(false);
        }else{
            setScroll(true)
        }
    })

    const clickLogo =()=>{
        const vh = window.innerHeight * 0.01
        window.scrollTo({
            top: 100*vh,
            behavior : "smooth",
        });
    };

    
    return(
        <>
            <Wrapper scroll={scroll}>
                <Conteiner>
                    <Logo>
                        <LogoImage onClick={clickLogo} src="./image/untityLogo.png"></LogoImage>
                    </Logo>
                    <Menu>
                        <Link to="/"><TopLayoutButton scroll={scroll} text={"홈"} backgroundColor={"transparent"} color={"#4e5968"}/></Link>
                        <Link to="/employment"><TopLayoutButton scroll={scroll} text={"지원"} backgroundColor={"transparent"} color={"#4e5968"}/></Link>
                        <Link to="/untity2"><TopLayoutButton scroll={scroll} text={"untity 문화"} backgroundColor={"transparent"} color={"#4e5968"}/></Link>
                    </Menu>
                </Conteiner>
            </Wrapper>
                <Outlet/>
        </>
    )
}