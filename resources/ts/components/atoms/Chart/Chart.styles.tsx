import styled from "styled-components";

export const Wrapper = styled.div`
    position: relative;
    margin: auto;
    max-width: 545px;
    max-height: 545px;
    text-align: center;

    p {
        font-size: 1.8rem;
        padding: 5em 1em;

        span {
            font-weight: bold;
        }
    }

    canvas {
        width: 100% !important;
        height: 100% !important;
    }
`;
