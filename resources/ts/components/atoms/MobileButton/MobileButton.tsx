import React, { useContext } from "react";
import { StyledButton } from "./MobileButton.styles";
import { ButtonCtx } from "../../../providers/ButtonHandlerContext";

const MobileButton = ({
    icon,
    onClick,
}: {
    icon: JSX.Element;
    onClick: () => void;
}) => {
    const { handleOpen } = useContext(ButtonCtx);

    const changeStates = (e: React.MouseEvent<HTMLElement>) => {
        onClick();
        handleOpen(e);
    };

    return <StyledButton onClick={changeStates}>{icon}</StyledButton>;
};

export default MobileButton;
