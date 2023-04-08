import React from "react";
import { MenuBody } from "./MobileMenu.styles";
import MobileButton from "../../atoms/MobileButton/MobileButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";

const MobileMenu = () => {
    return (
        <MenuBody>
            <MobileButton icon={<FontAwesomeIcon icon={faPenToSquare} />} />
            <MobileButton icon={<FontAwesomeIcon icon={faPlus} />} />
            <MobileButton icon={<FontAwesomeIcon icon={faTrashCan} />} />
        </MenuBody>
    );
};

export default MobileMenu;
