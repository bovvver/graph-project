import React, { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import theme from "../ts/assets/theme";
import { ButtonCtx } from "../ts/providers/ButtonHandlerContext";
import { ErrorCtx } from "../ts/providers/ErrorContext";

const mockContext = (portalType: string) => {
    return {
        isOpen: false,
        handleOpen: () => {},
        portalType,
        handleTypeChange: () => {},
        setOpen: () => {},
    };
};

const mockErrorContext = { error: "", handleErrorSlide: () => {} };

interface Portal {
    portalType: string;
}

export const TestWrapper = ({
    portalType,
    children,
}: PropsWithChildren<Portal>) => {
    return (
        <ThemeProvider theme={theme}>
            <ErrorCtx.Provider value={mockErrorContext}>
                <ButtonCtx.Provider value={mockContext(portalType)}>
                    {children}
                </ButtonCtx.Provider>
            </ErrorCtx.Provider>
        </ThemeProvider>
    );
};
