import React from "react";
import Header from "../../atoms/Header/Header";
import MobileMenu from "../../molecules/MobileMenu/MobileMenu";
import Chart from "../../atoms/Chart/Chart";
import ActionPortal from "../../molecules/ActionPortal/ActionPortal";
import { Wrapper } from "../../atoms/Chart/Chart.styles";

const Main = () => {
    return (
        <Wrapper>
            <Header content="graph project" />
            <Chart />
            <MobileMenu />
            <ActionPortal />
        </Wrapper>
    );
};

export default Main;
