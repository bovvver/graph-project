import React, { useContext, useRef } from "react";
import { createPortal } from "react-dom";
import { Wrapper, PortalBody, InputBlock } from "./ActionPortal.styles";
import { ButtonCtx } from "../../../providers/ButtonHandlerContext";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import {
    StyledIcon,
    IconContainer,
    CheckBoxContainer,
    ErrorSpan,
} from "./ActionPortal.styles";
import { useForm, SubmitHandler } from "react-hook-form";

interface Inputs {
    name: string;
    confirm: string;
    quantity: string;
    color: string;
}

const ActionPortal = () => {
    const { handleOpen, isOpen, portalType, setOpen } = useContext(ButtonCtx);
    const formRef = useRef<HTMLFormElement>(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        setOpen(false);
        if (formRef.current != null) formRef.current.reset();
    };

    return createPortal(
        <Wrapper onClick={handleOpen} isOpen={isOpen}>
            <PortalBody>
                <IconContainer onClick={handleOpen}>
                    <StyledIcon icon={faXmark} />
                </IconContainer>
                <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                    <h3>{portalType.toLowerCase()}.</h3>
                    {portalType == "ADD" ? (
                        <InputBlock>
                            <label htmlFor="name">Name</label>
                            <input
                                {...register("name", {
                                    required: true,
                                    maxLength: 20,
                                })}
                                id="name"
                                placeholder="Name"
                                type="text"
                            />
                            {errors.name && (
                                <ErrorSpan>Name is required.</ErrorSpan>
                            )}
                        </InputBlock>
                    ) : (
                        <InputBlock>
                            <label htmlFor="name">Name</label>
                            <select
                                {...register("name", { required: true })}
                                id="name"
                                placeholder="Name"
                            >
                                <option value="google">Google</option>
                                <option value="facebook">Facebook</option>
                                <option value="instagram">Instagram</option>
                                <option value="twitter">Twitter</option>
                                <option value="linkedin">LinkedIn</option>
                            </select>
                            {errors.name && (
                                <ErrorSpan>Name is required.</ErrorSpan>
                            )}
                        </InputBlock>
                    )}
                    {portalType == "DELETE" ? (
                        <CheckBoxContainer>
                            <input
                                {...register("confirm", { required: true })}
                                type="checkbox"
                                id="confirm"
                                value="confirm"
                            />
                            <label htmlFor="confirm">
                                {" "}
                                I want to delete this canal
                            </label>
                            <br />
                            {errors.confirm && (
                                <ErrorSpan>Confirmation is required.</ErrorSpan>
                            )}
                        </CheckBoxContainer>
                    ) : (
                        <>
                            <InputBlock>
                                <label htmlFor="quantity">Quantity</label>
                                <input
                                    {...register("quantity", {
                                        required: true,
                                        min: 1,
                                    })}
                                    id="quantity"
                                    placeholder="Quantity"
                                    type="number"
                                />
                                {errors.quantity && (
                                    <ErrorSpan>Quantity is required.</ErrorSpan>
                                )}
                            </InputBlock>
                            <InputBlock>
                                <label htmlFor="color">Color</label>
                                <input
                                    {...register("color", {
                                        pattern: /^#[A-Fa-f0-9]{6}$/i,
                                    })}
                                    id="color"
                                    type="color"
                                />
                            </InputBlock>
                        </>
                    )}

                    <input type="submit" value={portalType} />
                </form>
            </PortalBody>
        </Wrapper>,
        document.getElementById("actionPortal") as HTMLDivElement
    );
};

export default ActionPortal;
