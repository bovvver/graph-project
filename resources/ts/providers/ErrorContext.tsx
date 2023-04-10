import React, { PropsWithChildren, createContext, useState } from "react";

interface IError {
    error: string;
    handleErrorSlide: (error: string) => void;
}

export const ErrorCtx = createContext<IError>({
    error: "",
    handleErrorSlide: () => {},
});

const ErrorContext = ({ children }: PropsWithChildren) => {
    const [error, setError] = useState("");

    const handleErrorSlide = (error: string) => {
        setError(error);
        setTimeout(() => {
            setError("");
        }, 7000);
    };

    return (
        <ErrorCtx.Provider value={{ error, handleErrorSlide }}>
            {children}
        </ErrorCtx.Provider>
    );
};

export default ErrorContext;
