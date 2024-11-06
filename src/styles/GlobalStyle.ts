import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
* {
    box-sizing: border-box;
}
body {
    background-color: #f5f5f5;
}
`;

export default GlobalStyle;
