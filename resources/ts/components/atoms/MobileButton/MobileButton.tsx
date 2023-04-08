import React from "react";
import { StyledButton } from "./MobileButton.styles";

const MobileButton = ({ icon }: { icon: JSX.Element }) => {
    return <StyledButton>{icon}</StyledButton>;
};

export default MobileButton;
