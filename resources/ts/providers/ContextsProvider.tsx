import React, { PropsWithChildren } from "react";
import ButtonContext from "./ButtonHandlerContext";

const ContextProvider = ({ children }: PropsWithChildren) => {
  return (
    <ButtonContext>
        {children}
    </ButtonContext>
  );
};

export default ContextProvider;