import React, { ChangeEvent, useContext, useState } from "react";
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
import { DataCtx } from "../../../providers/DataContext";
import axios from "axios";
import { DatabaseResponse } from "../../../helpers/types";

interface Inputs {
    name: string;
    confirm: string;
    quantity: string;
    color: string;
}

const ActionPortal = () => {
    //hooks
    const { handleOpen, isOpen, portalType, setOpen } = useContext(ButtonCtx);
    const { data, reloadData } = useContext(DataCtx);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    // API requests

    const checkForDuplicate = async (name: string) => {
        const response = await axios.get("/api/main");

        response.data.forEach((el: { name: string }) => {
            if (el.name === name)
                throw new Error("This name is already in base.");
        });
        return true;
    };

    const addChannel = async ({ name, quantity, color }: Inputs) => {
        try {
            if (await checkForDuplicate(name)) {
                await axios.post("/api/add", {
                    name,
                    quantity,
                    color,
                });
                reloadData();
                setOpen(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const deleteChannel = async ({ name }: Inputs) => {
        try {
            await axios.delete(`/api/delete/${name}`);
            reloadData();
            setOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    const editChannel = async ({ name, quantity, color }: Inputs) => {
        try {
            await axios.put(`/api/edit/${name}`, {
                name,
                quantity,
                color,
            });
            reloadData();
            setOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    //submit

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        switch (portalType) {
            case "ADD":
                addChannel(data);
                break;
            case "EDIT":
                editChannel(data);
                break;
            case "DELETE":
                deleteChannel(data);
                break;
        }
    };

    //JSX

    return createPortal(
        <Wrapper onClick={handleOpen} isOpen={isOpen}>
            <PortalBody>
                <IconContainer onClick={handleOpen}>
                    <StyledIcon icon={faXmark} />
                </IconContainer>
                <form onSubmit={handleSubmit(onSubmit)}>
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
                                {data.labels.map((el) => (
                                    <option value={el}>{el}</option>
                                ))}
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
                                I want to delete this channel
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
