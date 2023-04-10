import React, { useContext } from "react";
import Header from "../../atoms/Header/Header";
import MobileMenu from "../../molecules/MobileMenu/MobileMenu";
import Chart from "../../atoms/Chart/Chart";
import ActionPortal from "../../molecules/ActionPortal/ActionPortal";
import { Wrapper } from "../../atoms/Chart/Chart.styles";
import ErrorPortal from "../../atoms/ErrorPortal/ErrorPortal";
import { ErrorCtx } from "../../../providers/ErrorContext";

const Main = () => {
    const { error } = useContext(ErrorCtx);

    return (
        <Wrapper>
            <Header content="graph project" />
            <Chart />
            <MobileMenu />
            <ActionPortal />
            {error !== "" ? <ErrorPortal content={error} /> : null}
        </Wrapper>
    );
};

export default Main;
