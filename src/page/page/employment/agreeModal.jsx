import styled from "styled-components";

const Modal = styled.div`
    z-index: 99;
    position: fixed;
    top:0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Wrap = styled.div`
    z-index: 100;
    height: 720px;
    width: 850px;
    border: none;
    border-radius: 8px;
    background-color: #17171c;
`
const CloseButton = styled.h1`
    color: #e8e8e897;
    margin: 10px;
    cursor: pointer;
`
const Text = styled.div`
    color:#c3c3c6;
    margin: 20px;
    font-size: 19px;
    margin-bottom: 20px;
    height: auto;
    font-weight: 600;
    line-height: 24px;
    &[name="title"]{
        font-size: 30px;
        color: #e4e4e5;
        font-weight: 500;
    }
    &[name="main"]{
        color: #e4e4e5;
    }
    &[name="inf"]{
        margin: 20px 0 20px 50px;
        color: #a7a7a7;
    }
`

const Conteiner = styled.div`
    height: 570px;
    overflow: auto;
    &::-webkit-scrollbar {
        display: none;
    }
`


export default function AgreeModal({closeModal}){
    
    return(
        <Modal  onClick={closeModal}>
            <Wrap>
                <CloseButton onClick={closeModal}>X</CloseButton>
                <Text name="title">개인정보 수집 및 이용 동의</Text>
                <Conteiner>
                    <Text name="main">운티티, 운티티증권, 운티티 페이먼츠, 운티티뱅크는 다음과 
                        같이 입사지원자 여러분의 개인정보를 수집하고 이용하고자 개인정보 처리에 대한 동의를 요청 드립니다.
                    </Text>
                    <Text name="inf">
                        개인정보 처리 주체: (주)엠창산업
                    </Text>
                    <Text name="inf">
                        처리 목적: 입사지원자 식별, 본인확인, 입사전형 및 문의의 원활한 처리,지원내역확인
                    </Text>
                    <Text name="inf">
                        처리 항목 : 이름, 이메일, 전화번호, 포트폴리오 ,커리어 플랫폼
                    </Text>
                    <Text name="inf">
                        보유 및 이용 기간 : 지원일로부터 3년
                    </Text>
                    <Text>[채용서류 반환에 관한 안내]</Text>
                    <Text>
                        (1) 본 안내는 "채용절차의 공정화에 관한 법률"(채용절차법) 제11조에 따른 것으로, 최종합격자를 제외한 지원자 분들은 제출한 채용서류를 반환 받으실 수 있습니다.
                    </Text>
                    <Text>
                        (2) 채용서류 반환청구서를 채용 여부가 확정된 날을 기준으로 180일 이내에 작성하여 전화(010-3228-1332) 또는 이메일 (ppwqlho@naver.com)로 제출해 주시면, 반환청구서가 수신된 날로부터 14일 이내에 우편(수신자 부담)으로 반환해 드립니다.다만, 운티티2의 채용사이트 또는 서면으로 제출된 경우, 구직자께서 자발적으로 제출한 경우, 불가항력 사유로 서류가 멸실된 경우에는 반환하지 아니합니다.
                    </Text>
                    <Text>※ 이메일 작성 시 제목은 [채용서류 반환청구]로 작성해주시면 감사하겠습니다.</Text>
                    <Text>※ 반환청구서 양식은 국가법령정보센터에서 제공하는 채용절차의 공정화에 관한 법률 시행규칙[별지 제3호 서식]을 사용해주시면 됩니다.</Text>
                    <Text>(3) 운티티는 채용 여부가 확정된 날을 기준으로 3년까지 제출하신 서류를 보관하며 그 이후에는 개인정보보호법에 따라 파기합니다.</Text>
                    <Text>(4) 제출하신 포트폴리오는 채용을 위한 검증 목적으로만 이용되며, 그 이외의 목적으로는 이용되지 않습니다.</Text>
                    <Text>위 동의는 운티티 채용을 위해 필수적인 동의로, 거부하실 수 있으나 동의를 하지 않은 경우 운티티 채용에 제한이 있을 수 있습니다.</Text>
                    <Text style={{textAlign:"center"}}>㈜엠창산업 드림</Text>
                </Conteiner>
            </Wrap>
        </Modal>
    );
}