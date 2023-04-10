import React, { useState, useEffect, useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Wrapper } from "./Chart.styles";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { DataCtx } from "../../../providers/DataContext";
import Loading from "../Loading/Loading";

ChartJS.register(ArcElement, Legend, ChartDataLabels);

const Chart = () => {
    const { data, reloadData } = useContext(DataCtx);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        reloadData();
        setLoading(false);
    }, []);

    return (
        <Wrapper>
            {loading ? (
                <Loading />
            ) : data.labels.length === 0 ? (
                <p>Pie chart is empty. Add your <span>first</span> channel!</p>
            ) : (
                <Pie
                    data={data}
                    options={{
                        plugins: {
                            datalabels: {
                                formatter: (value, context) => {
                                    const dataArray = context.chart.data
                                        .datasets[0].data as number[];
                                    const totalPercentage = dataArray.reduce(
                                        (total, item) => {
                                            return total + item;
                                        },
                                        0
                                    );
                                    const finalPercent = `${(
                                        (value / totalPercentage) *
                                        100
                                    ).toFixed(1)}%`;
                                    return finalPercent;
                                },
                            },
                        },
                    }}
                />
            )}
        </Wrapper>
    );
};

export default Chart;
