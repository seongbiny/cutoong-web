interface Props {
  text: string;
  imgPath: string;
  backgroundColor?: string;
}

export default function SigninButton({
  text,
  imgPath,
  backgroundColor,
}: Props) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor || "transparent",
        borderRadius: "12px",
        height: "48px",
        width: "320px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        border: backgroundColor ? "none" : "1px solid black",
      }}
    >
      <img
        src={imgPath}
        alt="Logo"
        style={{
          position: "absolute",
          left: "15px",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />
      <div style={{ fontSize: "17px" }}>{`${text}로 시작하기`}</div>
    </div>
  );
}
