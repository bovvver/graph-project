import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html{
        font-size: 62.5%;
    }

    body{
        font-family: 'Chivo Mono', monospace;
    }
    
    #app{
        position: relative;
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        background-color: #020c1b;
        color: #0080ff;
    }
`;

export default GlobalStyle;
