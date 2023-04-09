import styled from "styled-components";
import mq from "../../../assets/responsiveDesign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Openable {
    isOpen: boolean;
}

export const Wrapper = styled.div<Openable>`
    position: absolute;
    top: ${({ isOpen }) => (isOpen ? "0" : "120%")};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.shadow};
    z-index: 5;
    transition: top 0.3s;
`;

export const PortalBody = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    max-width: 640px;
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.darkBlue};

    ${mq[0]} {
        height: 70vh;
        border-radius: 15px;
        border: 4px solid ${({ theme }) => theme.colors.blue};
        box-shadow: 0px 0px 24px 0px ${({ theme }) => theme.colors.blue};
    }

    form {
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;

        input[type="submit"] {
            padding: 0.5em;
            width: 60%;
            font-size: 1.5rem;
            border: 2px solid ${({ theme }) => theme.colors.blue};
            background-color: transparent;
            color: ${({ theme }) => theme.colors.blue};
            transition: background-color 0.3s, color 0.3s;
            cursor: pointer;

            &:hover {
                background-color: ${({ theme }) => theme.colors.blue};
                color: ${({ theme }) => theme.colors.darkBlue};
            }
        }

        h3 {
            padding: 1em 0;
            font-size: 3rem;
            text-align: center;
        }
    }
`;

export const InputBlock = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;

    label {
        margin: 0.5em 0;
    }

    input[type="text"],
    input[type="number"],
    select {
        padding: 0.5em;
        width: 100%;
        font-size: 1.5rem;
        border-color: ${({ theme }) => theme.colors.blue};
        border-radius: 5px;
    }

    input[type="color"] {
        width: 100%;
        cursor: pointer;
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    pointer-events: none;
`;

export const IconContainer = styled.div`
    position: absolute;
    top: 40px;
    right: 40px;
    transform: rotateY(0deg);
    transition: transform 0.6s;
    cursor: pointer;
    padding; 0.5em;
    font-size: 3rem;
    
    &:hover{
        transform: rotateZ(360deg);
    }
`;

export const CheckBoxContainer = styled.div`
    font-size: 1.5rem;
`;

export const ErrorSpan = styled.span`
    color: ${({ theme }) => theme.colors.red};
    margin-top: 0.4em;
`;
