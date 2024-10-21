import styled from "styled-components";
import Layer2Box from "./layer2-Component/layer2-GirdBox";

const Wrap = styled.div`
    margin: 20px 0;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Logo = styled.div`
    width: 400px;
    height: 100px;
`
const Text = styled.h1`
    margin-top: 100px;
    text-align: center;
    font-size: 36px;
    font-weight: 600;
    color: #353535;
    line-height: 1.4;
    &[name="smT"]{
        font-size: 20px;
        font-weight: 500;
        margin: 40px 0 50px  0;
        color: #787878;
    }
`
const Conteiner = styled.div`
    height: 700px;
    width: 1000px;
    margin-bottom: 200px;
    background-color: #ffffff;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`

export default function Layer2(){
    return(
        <Wrap>
            <Logo>
                <img src="./image/untity2.png" style={{width:"100%"}}/>
            </Logo>
            <Text>어떤 것이 달라졌나요?</Text>
            <Text name="smT">전체적인 UI가 변경되었습니다.
                <br/>
                개인의 프로필 가진을 관리할 수 있어요 !
                <br/>
                친구들과 팔로우도 하고 채팅도 즐겨보세요.
                </Text>
            <Conteiner>
                <Layer2Box
                    sTitle="DESIGN"
                    title="디자인"
                    text="디자이너 구합니다"
                />
                <Layer2Box
                    sTitle="MULTIPLE PHOTOS"
                    title="사진 업로드"
                    text="옆으로 스크롤하면서 여러장의 사진을 보세요"
                />
                <Layer2Box
                    sTitle="CHAT"
                    title="채팅"
                    text="줫빠지게 해서 채팅기능도 넣었어요"
                />
                <Layer2Box
                    sTitle="PERSONAL PROFILE"
                    title="프로필"
                    text="자신만의 프로필 페이지가 있어요"
                />
            </Conteiner>
        </Wrap>
    );
}

