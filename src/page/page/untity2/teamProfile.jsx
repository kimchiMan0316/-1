import styled from "styled-components";

const Wrap = styled.div`
    z-index: 1;
    position: relative;
    transition: all 0.3s ease-in-out;
    background-color: aqua;
    width: 250px;
    height: 350px;
    display: flex;
    border: none;
    justify-content: center;
    flex-direction: column;
    text-align: center;
`
const Cover = styled.div`
    z-index: 2;
    color: transparent;
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 0;
    text-align: center;
    align-items: center;
    width: 100%;
    height: 100%;
    &:hover{
        background-color: rgba(0,0,0,0.6);
        color: aliceblue;
    }
`
const Contenier = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Image = styled.div`
    height: 300px;
    width: 250px;
`
const CoverImage = styled.img`
    width: 100%;
    height: 100%;
    src: url("./image/park.JPEG");
`
const Text = styled.h1`
    font-size: 30px;
`


export default function Teamprofile({image, name, content}){
    return(
        <Wrap>
            <Text>박설호</Text>
            <Cover>
                <Text>박설호</Text>
                <Text name="subText">섹시한 남자</Text>
            </Cover>    
            <Contenier>
                <Image>
                    <CoverImage src="./image/park.JPEG"/>
                </Image>
            </Contenier>
        </Wrap>
    );
}