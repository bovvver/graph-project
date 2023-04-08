import React from "react";
import { StyledHeader } from "./Header.styles";

const Header = ({ content }: { content: string }) => {
    return <StyledHeader>{content}.</StyledHeader>;
};

export default Header;
