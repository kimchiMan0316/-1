import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"

const Conteiner = styled.div`
    transition: all 0.4s ease-in-out;
    height: 220vh;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: ${(props)=>(props.mainState ? "":"#f1f1f1")};
`
const Wrap = styled.div`
    transition: all 0.4s ease-in-out;
    position: sticky;
    z-index: 1;
    top: ${(props)=>(props.mainState ? "0":"10vh")};
    border-radius: ${(props)=>(props.mainState ? "0":"30px")};
    background-image: url("./image/main1.JPEG");
    background-size: cover;
    width: ${(props)=>(props.mainState ? "100%":"80%")};
    height: ${(props)=>(props.mainState ? "100vh":"80vh")};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10vh;
`
const Text = styled.h1`
    transition: all 0.4s ease-in-out;
    font-size: ${(props)=>(props.mainState ? "36px":"30px")};
    color: #f1f1f1;
    font-weight: 600;
    margin-top: ${(props)=>(props.mainState ? "":"20px")};
`
const FrontFilter = styled.div`
    transition: all 0.4s ease-in-out;
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: ${(props)=>(props.buttonState ? "center":"end")};
    /* justify-content: end; */
    align-items: center;
    flex-direction: column;
    border-radius: ${(props)=>(props.mainState ? "0":"30px")};
    background-color: ${(props)=>(props.mainState ? "rgba(0,0,0,0.4)":"rgba(0,0,0,0.6)")};
`
const ButtonWrap = styled.div`
    margin: 20px 0 120px 0;
`
const ButtonM = styled.button`
    transition: all 0.3s ease-in-out;
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: white;
    font-weight: 500;
    background-color: #00acee;
    opacity: 0.9;
    cursor: pointer;
    &:hover{
        background-color: #0093ce;
    }
`

export default function Layer1(){
    const [mainState, setMainState] = useState(true);
    const [text, setText]= useState("");
    const [buttonState, setButtonState]=useState(true)
    
    useEffect(() => {
        const handleScroll = () => {
            const vh = window.innerHeight * 0.01;
            const position = window.scrollY;
            if (position < 30 * vh) {
                setText("untity 재미있게 사용했나요?");
                setMainState(true);
            } else if (position >= 30 * vh && position <= 80 * vh) {
                setMainState(false);
                setButtonState(true);
                setText("ZERO부터 시작하는 UNTITY2생활");
            } else if (position > 80 * vh) {
                setButtonState(false);
                setText("이 사람과 같이 개발하고 싶은 사람은 untity 채용에 지원해주세요.");
            }
        };

        document.addEventListener("scroll", handleScroll);

        return () => {
            document.removeEventListener("scroll", handleScroll);
        };
    }, [mainState, text, buttonState]);


    return(
        <Conteiner>
            <Wrap scroll={scroll} mainState={mainState}>
                <FrontFilter mainState={mainState} buttonState={buttonState}>
                  <Text mainState={mainState}>{text}</Text>
                    {buttonState ? null:<Button/>}
                </FrontFilter>
            </Wrap>
        </Conteiner>
    )
}
const Button = () => {
    return(
        <ButtonWrap>
            <ButtonM ><Link to="/employment">지원하기</Link></ButtonM>
        </ButtonWrap>
    );
}