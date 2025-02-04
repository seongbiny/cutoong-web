import styled from "styled-components";
import Layout from "./Layout";
import { useForm } from "react-hook-form";

export default function Nickname() {
  const { register } = useForm({
    defaultValues: {
      nickname: "",
    },
  });

  return (
    <Layout>
      <Container>
        <Header>CURTOONG</Header>
        <MainContainer>
          <div style={{ margin: "87px 27px 20px" }}>
            <Hello>반가워요 👋</Hello>
            <Introduce>사용할 닉네임을 입력해주세요.</Introduce>
          </div>

          <Box>
            <NicknameText>닉네임</NicknameText>
            <NicknameInput
              placeholder="닉네임을 입력해주세요"
              onChange={(e) => console.log("", e.target.value)}
            />
          </Box>
        </MainContainer>

        <ButtonContainer>
          <Button disabled={false}>시작하기</Button>
        </ButtonContainer>
      </Container>
    </Layout>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const Button = styled.button`
  width: 335px;
  height: 56px;
  text-align: center;
  border-radius: 12px;
  font-size: 17px;
`;

const Header = styled.div`
  height: 68px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  font-weight: bold;
`;

const Hello = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 11px;
`;

const Introduce = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Box = styled.div`
  background-color: #ebf3ff;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 12px;
  width: 335px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px 20px 16px 20px;
`;

const NicknameText = styled.div`
  font-size: 12px;
  color: #0066ff;
  margin-bottom: 6px;
`;

const NicknameInput = styled.input`
  height: 24px;
  border: none;
  background-color: transparent;

  &:focus {
    outline: none;
  }
`;
