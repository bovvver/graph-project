import React, { PropsWithChildren } from "react";
import ButtonContext from "./ButtonHandlerContext";
import DataContext from "./DataContext";

const ContextProvider = ({ children }: PropsWithChildren) => {
    return (
        <ButtonContext>
            <DataContext>{children}</DataContext>
        </ButtonContext>
    );
};

export default ContextProvider;
