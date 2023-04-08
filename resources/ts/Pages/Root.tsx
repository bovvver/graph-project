import React from "react";
import GlobalStyle from "../assets/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../assets/theme";
import Main from "../components/organisms/Main/Main";

const Root = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Main />
        </ThemeProvider>
    );
};

export default Root;
