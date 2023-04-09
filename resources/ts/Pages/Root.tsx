import React from "react";
import GlobalStyle from "../assets/globalStyle";
import { ThemeProvider } from "styled-components";
import theme from "../assets/theme";
import Main from "../components/organisms/Main/Main";
import ContextProvider from "../providers/ContextsProvider";

const Root = (): JSX.Element => {
    return (
        <ThemeProvider theme={theme}>
            <ContextProvider>
                <GlobalStyle />
                <Main />
            </ContextProvider>
        </ThemeProvider>
    );
};

export default Root;
