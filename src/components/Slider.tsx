import styled from "styled-components";

export default function Slider() {
  return (
    <SliderContainer>
      <Slides>
        <Slide>
          <ImageContainer>
            <img src="./src/assets/PinkPig.png" />
          </ImageContainer>
          <Text>따로 또 같이 쓰는 가계부</Text>
        </Slide>
        <Slide>
          <ImageContainer>
            <img src="./src/assets/PinkPig.png" />
          </ImageContainer>
          <Text>공유 가계부, 퉁퉁이</Text>
        </Slide>
        <Slide>
          <ImageContainer>
            <img src="./src/assets/PinkPig.png" />
          </ImageContainer>
          <Text>3번째 슬라이드</Text>
        </Slide>
      </Slides>
      <Indicators>
        <Indicator active />
        <Indicator />
        <Indicator />
      </Indicators>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* overflow를 숨기기 위해 추가 */
  width: 400px; /* 부모 컨테이너의 너비를 설정 */
`;

const Slides = styled.div`
  display: flex;
  flex-grow: 6;
  width: 100%;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 400px;
`;

const ImageContainer = styled.div`
  flex: 4;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.div`
  font-size: 24px;
  font-weight: bold;
  flex: 1;
  text-align: center;
`;

const Indicators = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  gap: 0 15px;
`;

const Indicator = styled.div<{ active?: boolean }>`
  height: 8px;
  width: 8px;
  border-radius: 100%;
  background-color: ${({ active }) => (active ? "#0066ff" : "#d9d9d9")};
`;
