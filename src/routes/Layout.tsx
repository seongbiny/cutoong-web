import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div
      style={{
        maxWidth: "400px",
        backgroundColor: "#fff",
        height: "100vh",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
}
