import SigninButton from "../../components/SigninButton";

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
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="src/assets/PinkPig.png" alt="Logo" />
        <div style={{ fontWeight: "bold", fontSize: "24px" }}>
          따로 또 같이 쓰는 가계부
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "13px",
          justifyContent: "center",
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
