import SigninButton from "../components/SigninButton";
import Slider from "../components/Slider";

export default function Main() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100vh",
      }}
    >
      <Slider
        children={
          <div style={{ display: "flex" }}>
            <div>
              <img src="src/assets/PinkPig.png" alt="Logo" />
              <div style={{ fontWeight: "bold", fontSize: "24px" }}>
                따로 또 같이 쓰는 가계부
              </div>
            </div>

            <div>
              <img src="src/assets/PinkPig.png" alt="Logo" />
              <div style={{ fontWeight: "bold", fontSize: "24px" }}>
                공유 가계부, 퉁퉁이
              </div>
            </div>

            <div>
              <img src="src/assets/PinkPig.png" alt="Logo" />
              <div style={{ fontWeight: "bold", fontSize: "24px" }}>
                3번째 슬라이드
              </div>
            </div>
          </div>
        }
      />

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "13px",
          justifyContent: "center",
          marginBottom: "80px",
        }}
      >
        <SigninButton
          text={"카카오"}
          imgPath="src/assets/KakaoLogo.png"
          backgroundColor="#FAE300"
        />
        <SigninButton
          text={"네이버"}
          imgPath="src/assets/NaverLogo.png"
          backgroundColor="#1EC800"
        />
        <SigninButton text={"구글"} imgPath="src/assets/GoogleLogo.png" />
      </div>
    </div>
  );
}
