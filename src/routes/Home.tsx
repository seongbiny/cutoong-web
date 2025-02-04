import styled from "styled-components";
import SigninButton from "../components/SigninButton";
import Layout from "./Layout";
import Slider from "../components/Slider";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <Slider />
        <ButtonContainer>
          <div onClick={() => navigate("/nickname")}>
            <SigninButton
              bgColor="#fae300"
              imgSrc="./src/assets/KakaoLogo.png"
              text="카카오로 시작하기"
            />
          </div>

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
  height: 100vh;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px 0;
  margin-bottom: 80px;
`;
