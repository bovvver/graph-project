import styled from "styled-components";

export const StyledButton = styled.button`
    width: 3.5em;
    aspect-ratio: 1/1;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: ${({ theme }) => theme.colors.blue};
    border: 4px solid ${({ theme }) => theme.colors.blue};
    border-bottom: 7px solid ${({ theme }) => theme.colors.blue};
    border-radius: 50%;
    transform: translate(0px, -40%) scale(1);
    cursor: pointer;
    transition: transform 0.3s;

    &:hover {
        transform: translate(0, -50%) scale(1.05);
    }
`;
