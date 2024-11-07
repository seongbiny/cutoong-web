import styled from "styled-components";

interface Props {
  bgColor?: string;
  imgSrc: string;
  text: string;
  textColor?: string;
  border?: boolean;
}

export default function SigninButton({
  bgColor = "#ffffff",
  imgSrc,
  text,
  textColor = "#000000",
  border = false,
}: Props) {
  return (
    <ButtonContainer bgColor={bgColor} border={border}>
      <ButtonImage src={imgSrc} />
      <ButtonText textColor={textColor}>{text}</ButtonText>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div<{ bgColor: string; border: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${({ bgColor }) => bgColor};
  width: 320px;
  height: 48px;
  border-radius: 12px;
  border: ${({ border }) => (border ? "1px solid #000000" : "none")};
`;

const ButtonImage = styled.img`
  padding-left: 15px;
`;

const ButtonText = styled.div<{ textColor: string }>`
  flex: 1;
  text-align: center;
  font-size: 17px;
  color: ${({ textColor }) => textColor};
`;
