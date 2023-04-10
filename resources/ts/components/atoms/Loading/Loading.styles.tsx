import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
    from{
        transform: rotate(0deg);
    } to {
        transform: rotate(360deg);
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    padding: 5em 0;
    text-align: center;
    font-size: 4rem;
    color: ${({ theme }) => theme.colors.blue};
    animation: 1s ${spin} ease infinite;
`;
