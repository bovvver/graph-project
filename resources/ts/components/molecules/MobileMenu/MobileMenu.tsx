import React, { useContext } from "react";
import { MenuBody } from "./MobileMenu.styles";
import MobileButton from "../../atoms/MobileButton/MobileButton";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { StyledIcon } from "./MobileMenu.styles";
import { ButtonCtx } from "../../../providers/ButtonHandlerContext";

const MobileMenu = () => {
    const { handleTypeChange } = useContext(ButtonCtx);

    return (
        <MenuBody>
            <MobileButton
                onClick={() => handleTypeChange("EDIT")}
                icon={<StyledIcon icon={faPenToSquare} />}
            />
            <MobileButton
                onClick={() => handleTypeChange("ADD")}
                icon={<StyledIcon icon={faPlus} />}
            />
            <MobileButton
                onClick={() => handleTypeChange("DELETE")}
                icon={<StyledIcon icon={faTrashCan} />}
            />
        </MenuBody>
    );
};

export default MobileMenu;
