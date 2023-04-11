import React from "react";
import ActionPortal from "../ts/components/molecules/ActionPortal/ActionPortal";
import { render, screen } from "@testing-library/react";
import { TestWrapper } from "./TestingHelpers";
import userEvent from "@testing-library/user-event";
import Main from "../ts/components/organisms/Main/Main";

describe("It should correctly render", () => {
    test("EDIT form", () => {
        document.body.innerHTML = '<div id="actionPortal" />';

        render(
            <TestWrapper portalType="EDIT">
                <ActionPortal />
            </TestWrapper>
        );

        expect(screen.getByLabelText("Name"));
        expect(screen.getByLabelText("Quantity"));
        expect(screen.getByLabelText("Color"));
    });

    test("ADD form", () => {
        document.body.innerHTML = '<div id="actionPortal" />';

        render(
            <TestWrapper portalType="ADD">
                <ActionPortal />
            </TestWrapper>
        );

        expect(screen.getByLabelText("Name"));
        expect(screen.getByLabelText("Quantity"));
        expect(screen.getByLabelText("Color"));
    });

    test("DELETE form", () => {
        document.body.innerHTML = '<div id="actionPortal" />';

        render(
            <TestWrapper portalType="DELETE">
                <ActionPortal />
            </TestWrapper>
        );

        expect(screen.getByLabelText("Name"));
        expect(screen.getByLabelText("I want to delete this channel"));
    });
});

describe("It should work correctly", () => {
    test("in EDIT form", () => {
        document.body.innerHTML = '<div id="actionPortal" />';

        render(
            <TestWrapper portalType="EDIT">
                <ActionPortal />
            </TestWrapper>
        );

        userEvent.type(screen.getByLabelText("Name"), "Google");
        userEvent.type(screen.getByLabelText("Quantity"), "300");
        userEvent.click(
            screen.getByText("EDIT").closest("button") as HTMLButtonElement
        );

        expect(screen.queryByText(/^.*is required*/i)).toBeNull();
    });

    test("in ADD form", () => {
        document.body.innerHTML = '<div id="actionPortal" />';

        render(
            <TestWrapper portalType="ADD">
                <ActionPortal />
            </TestWrapper>
        );

        userEvent.type(screen.getByLabelText("Name"), "Google");
        userEvent.type(screen.getByLabelText("Quantity"), "300");
        userEvent.click(
            screen.getByText("ADD").closest("button") as HTMLButtonElement
        );

        expect(screen.queryByText(/^.*is required*/i)).toBeNull();
    });
});
