import styled, { keyframes } from "styled-components";

const slideAnimation = keyframes`
  from {
    bottom: -40%;
  }
  to {
    bottom: 10%;
  }
`;

const loading = keyframes`
    from{
        width: 100%;
    } to{
        width: 0%;
    }
`;

export const ModalBody = styled.div`
    padding: 2em;
    position: absolute;
    bottom: -40%;
    left: 50%;
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.darkBlue};
    border: 2px solid ${({ theme }) => theme.colors.blue};
    box-shadow: 0px 0px 24px 0px ${({ theme }) => theme.colors.blue};
    border-radius: 15px;
    transform: translateX(-50%);
    z-index: 50;
    animation: ${slideAnimation} 1s ease-in-out 1 forwards,
        ${slideAnimation} 1s 6s ease-in-out 1 reverse forwards;
`;

export const TimeBar = styled.div`
    position: absolute;
    top: 25px;
    left: 50%;
    width: 40%;
    height: 4px;
    margin: auto;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.secondBlue};
    transform: translate(-50%);
    overflow: hidden;

    &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background-color: ${({ theme }) => theme.colors.blue};
        animation: ${loading} 5s 1s linear 1 forwards;
    }
`;
