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
        overflow: hidden;
        height: 100vh;
        weight: 100%;
    }
    
    #app{
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #020c1b;
        color: #0080ff;
    }
`;

export default GlobalStyle;
