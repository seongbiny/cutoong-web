// import styled from "styled-components";

// const pageContainer = styled.div`
//   background-color: ${({ theme }) => theme.pageBackground};
//   min-height: 100vh;
// `;

export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="page-container">{children}</div>;
}
