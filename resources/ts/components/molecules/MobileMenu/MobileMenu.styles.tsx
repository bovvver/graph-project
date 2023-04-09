import styled from "styled-components";
import mq from "../../../assets/responsiveDesign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MenuBody = styled.div`
    padding-bottom: 1em;
    margin: auto;
    position: fixed;
    bottom: 0;
    left: 50%;
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    max-width: 1050px;
    border-top: 4px solid ${({ theme }) => theme.colors.blue};
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    transform: translate(-50%, 0);

    ${mq[1]} {
        border-radius: 15px;
        border-top: 6px solid ${({ theme }) => theme.colors.blue};
        border-left: 4px solid ${({ theme }) => theme.colors.blue};
        border-right: 4px solid ${({ theme }) => theme.colors.blue};
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    pointer-events: none;
`;
