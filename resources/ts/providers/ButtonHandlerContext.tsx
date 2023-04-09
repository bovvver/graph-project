import React, {
    useState,
    createContext,
    PropsWithChildren,
    Dispatch,
    SetStateAction,
} from "react";

interface IButtonContext {
    isOpen: boolean;
    handleOpen: (_e: React.MouseEvent<HTMLElement>) => void;
    portalType: string;
    handleTypeChange: (_type: string) => void;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

export const ButtonCtx = createContext<IButtonContext>({
    isOpen: false,
    handleOpen: () => {},
    portalType: "",
    handleTypeChange: () => {},
    setOpen: () => {},
});

const ButtonContext = ({ children }: PropsWithChildren) => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const [portalType, setPortalType] = useState<string>("");

    const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
        if (e.target === e.currentTarget) {
            setOpen((prevState) => !prevState);
        }
    };

    const handleTypeChange = (type: string) => {
        setPortalType(type);
    };

    return (
        <ButtonCtx.Provider
            value={{
                isOpen,
                handleOpen,
                portalType,
                handleTypeChange,
                setOpen,
            }}
        >
            {children}
        </ButtonCtx.Provider>
    );
};

export default ButtonContext;
