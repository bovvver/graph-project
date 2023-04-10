import React from "react";
import { createPortal } from "react-dom";
import { ModalBody, TimeBar } from "./ErrorPortal.styles";

const ErrorPortal = ({ content }: { content: string }) => {
    return createPortal(
        <ModalBody>
            <TimeBar />
            <h3>Oops!</h3>
            <p>{content}</p>
        </ModalBody>,
        document.getElementById("errorPortal") as HTMLDivElement
    );
};

export default ErrorPortal;
