import { useState } from "react";
import styled from "styled-components";

const data = [
  { image: "./src/assets/PinkPig.png", text: "따로 또 같이 쓰는 가계부" },
  { image: "./src/assets/PinkPig.png", text: "공유 가계부, 퉁퉁이" },
  { image: "./src/assets/PinkPig.png", text: "3번째 슬라이드" },
];

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <SliderContainer>
      <Slides leftMargin={-currentIndex * 100}>
        {data.map((item, index) => (
          <Slide key={index}>
            <ImageContainer>
              <img src={item.image} alt={`Slide ${index + 1}`} />
            </ImageContainer>
            <Text>{item.text}</Text>
          </Slide>
        ))}
      </Slides>
      <Indicators>
        {data.map((_, index) => (
          <Indicator key={index} active={index === currentIndex} />
        ))}
      </Indicators>
      <Button onClick={handlePrev}>Prev</Button>
      <Button onClick={handleNext}>Next</Button>
    </SliderContainer>
  );
}

const SliderContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden; /* overflow를 숨기기 위해 추가 */
  width: 400px; /* 부모 컨테이너의 너비를 설정 */
  position: relative;
`;

const Slides = styled.div<{ leftMargin?: number }>`
  display: flex;
  flex-grow: 6;
  width: 100%;
  transition: margin-left 0.5s ease-in-out;
  margin-left: ${({ leftMargin }) => leftMargin}%;
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

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;

  &:first-of-type {
    left: 10px;
  }

  &:last-of-type {
    right: 10px;
  }
`;
