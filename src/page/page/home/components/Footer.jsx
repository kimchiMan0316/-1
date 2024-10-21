import styled from "styled-components";

const Wrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 70px 0;
    border-top: 1px solid #dedede;
`
const Conteiner = styled.div`
    width: 1000px;
    height: 100px;
    display: flex;
    align-items: stretch;
    margin: 20px 0;
`
const Ul = styled.ul`
    padding: 0 10px;
`
const Li = styled.li`
    margin: 0 5px 5px 5px;
    color: #b9b9b9;
    font-size: 13px;
    &[name = "title"]{
        color: #737373;;
        font-weight: 500;
        font-size: 15px;
        margin-bottom: 10px;
    }
`
const Text = styled.div`
        color: #bfbfbf;
        font-weight: 400;
        font-size: 13px;
    &[name="inf"]{
        font-size: 15px;
        color: #737373;
        font-weight: 500;
        margin-bottom: 10px;
    }
`

export default function Footer(){
    return(
        <Wrap>
            <Conteiner>
                <Ul>
                    <Li name="title">서비스</Li>
                    <Li>untity2</Li>
                </Ul>
                <Ul>
                    <Li name="title">맴버</Li>
                    <Li>박설호</Li>
                    <Li>서용민</Li>
                </Ul>
                <Ul>
                    <Li name="title">지원</Li>
                    <Li>지원하기</Li>
                </Ul>
                <Ul>
                    <Li name="title">문의</Li>
                    <Li>대표번호 : 010-3228-1332</Li>
                </Ul>
                <div style={{marginLeft:"130px"}}>
                    <Text name="inf">㈜엠창산업<br/>
                        Copyright ⓒ Untity2. All Rights Reserved
                    </Text>
                    <Text>
                    영진전문대학교 복현캠퍼스 | 학생 : 박설호<br/>
                    주소 : 대구광역시 북구 복현로 35 (복현동, 영진전문대학) | 우편번호 : (41527)<br/>
                    </Text>
                </div>
            </Conteiner>
        </Wrap>
    );
}