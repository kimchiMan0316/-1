import styled from "styled-components";
import { BiChevronLeft } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { useState } from "react";

const Wrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: 100px 0;
    background-color: #f1f1f1;
`
const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    width: 1000px;
    align-items: center;
    height: 360px;
`
const Title = styled.h1`
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    margin-bottom: 30px;
`
const Slider = styled.div`
    overflow: hidden;
    display: flex;
    width: 800px;
    height: 400px;
`
const ConteinerBox = styled.div`
    transition: all 0.3s ease-in-out;
    display: flex;
`
const Conteiner = styled.div`
    width: 800px;
    min-width: 800px;
    height: 400px;
    display: flex;
    justify-content: left;
    align-items: center;
`
const Profile = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const ImgDiv = styled.div`
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
`
const Img = styled.img`
    width: 100%;
    height: 150px;
    border: none;
    border-radius: 50%;
`
const Name = styled.h1`
    color: #787878;
    &[name="S-title"]{
        text-align: center;
        font-size: 20px;
        font-weight: 600;
        line-height: 1.2;
    }
`
const Article = styled.div`
    margin-left: 80px;
`
const Text = styled.h1`
    font-size: 20px;
    font-weight: 400;
    line-height: 1.4;
    color: #787878;
`
const Icon = styled.div`
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 2px solid black;
    opacity: 0.4;
    cursor: pointer;
    &:hover{
        opacity: 0.7;
    }
`
const BottomBar = styled.div`
    width: 100%;
    background-color: transparent;
    height: 30px;
    display: flex;
    justify-content: center;

`
const Bar = styled.div`
    transition: all 0.3s ease-in-out;
    margin: 0 5px;
    width: 10px;
    height: 10px;
    border: 1px solid #a2a2a2;
    border-radius: 50%;
    &[name="1"]{
        background-color: ${(props)=>(props.position == 0 ? "#a2a2a2":"none")};
    }
    &[name="2"]{
        background-color: ${(props)=>(props.position == -50 ? "#a2a2a2":"none")};
    }
`
export default function EmploymentLayer(){
    const [sliderPosition, setSliderPosition] = useState(0);
    const slider = {
        transform : `translateX(${sliderPosition}%)`
    };
    const moveLeft = () =>{
        if(sliderPosition == -50){
            setSliderPosition(0)
        }
    };
    const moveRight = () =>{
        if(sliderPosition == 0){
            setSliderPosition(-50)
        }
    };
   
    return(
        <>
            <Title>새로운 팀원를 구합니다.</Title>
            <Name name="S-title">같이 노예처럼 일할 팀을 구합니다!</Name>
            <Name name="S-title">일본어도 좋지만 코딩이 더 좋은 사람이라면</Name>
            <Name name="S-title">멋쟁이 오빠들과 같이 웹 개발을 해봐요</Name>
            <Wrap>
                <Wrapper>
                    <Icon onClick={moveLeft}><BiChevronLeft size={30}/></Icon>
                    <Slider>
                        <ConteinerBox style={slider}>
                            <Conteiner>
                                <Profile>
                                    <Name name="S-title" style={{marginBottom:"20px"}}>colleague</Name>
                                    <ImgDiv>
                                        <Img src="./image/park.JPEG"/>
                                    </ImgDiv>
                                    <Name>박설호</Name>
                                    <Name>front-end</Name>
                                </Profile>
                                <Article>
                                    <Text>저는 예쁜 여자 좋아합니다. 카리나보다는 윈터 스타일로...<br/>
                                        가능하면 남자보다는 예쁜 여성분들로 지원하셨으면 합니다.
                                    </Text>
                                </Article>
                            </Conteiner>
                            <Conteiner>
                                <Profile>
                                    <Name name="S-title" style={{marginBottom:"20px",fontSize:"16px"}}>Back-end Engineer</Name>
                                    <ImgDiv>
                                        <Img src="./image/min2.jpeg"/>
                                    </ImgDiv>
                                    <Name>서용민</Name>
                                    <Name>back-end</Name>
                                </Profile>
                                <Article>
                                    <Text>저는 디시인사이드를 즐겨하는 서용민입니다.<br/>
                                        박설호 노트북에 몸캠을 설치했습니다.
                                    </Text>
                                </Article>
                            </Conteiner>
                        </ConteinerBox>
                    </Slider>
                    <Icon onClick={moveRight}><BiChevronRight size={30}/></Icon>
                </Wrapper>
                <BottomBar>
                    <Bar position = {sliderPosition} name="1"></Bar>
                    <Bar position = {sliderPosition} name="2"></Bar>
                </BottomBar>
            </Wrap>
        </>
    );
}