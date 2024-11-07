import styled from "styled-components";
import SigninButton from "../components/SigninButton";
import Layout from "./Layout";

export default function Home() {
  return (
    <Layout>
      <Container>
        <div>
          <div>따로 또 같이 쓰는 가계부</div>
        </div>
        <ButtonContainer>
          <SigninButton
            bgColor="#fae300"
            imgSrc="./src/assets/KakaoLogo.png"
            text="카카오로 시작하기"
          />
          <SigninButton
            bgColor="#1ec800"
            imgSrc="./src/assets/NaverLogo.png"
            text="네이버로 시작하기"
            textColor="#ffffff"
          />
          <SigninButton
            imgSrc="./src/assets/GoogleLogo.png"
            text="구글로 시작하기"
            border
          />
        </ButtonContainer>
      </Container>
    </Layout>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px 0;
`;
