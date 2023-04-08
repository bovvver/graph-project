import React from "react";
import Header from "../../atoms/Header/Header";
import MobileMenu from "../../molecules/MobileMenu/MobileMenu";
import Chart from "../../atoms/Chart/Chart";


const Main = () => {
    return (
        <>
            <Header content="graph project" />
            <Chart />
            <MobileMenu />
        </>
    );
};

export default Main;
