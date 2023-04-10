import React, { PropsWithChildren } from "react";
import ButtonContext from "./ButtonHandlerContext";
import DataContext from "./DataContext";
import ErrorContext from "./ErrorContext";

const ContextProvider = ({ children }: PropsWithChildren) => {
    return (
        <ButtonContext>
            <ErrorContext>
                <DataContext>{children}</DataContext>
            </ErrorContext>
        </ButtonContext>
    );
};

export default ContextProvider;
