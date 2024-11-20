import styled from "styled-components";
import Layout from "./Layout";

export default function Nickname() {
  return (
    <Layout>
      <Header>CURTOONG</Header>
      <div style={{ margin: "87px 27px 20px" }}>
        <Hello>반가워요 👋</Hello>
        <Introduce>사용할 닉네임을 입력해주세요.</Introduce>
      </div>

      <Box>
        <NicknameText>닉네임</NicknameText>
        <NicknameInput placeholder="닉네임을 입력해주세요" />
      </Box>

      <div>시작하기</div>
    </Layout>
  );
}

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
`;

const NicknameText = styled.div`
  font-size: 12px;
  color: #0066ff;
`;

const NicknameInput = styled.input``;
