import React from "react";
import { ChartData } from "../../../helpers/types";
import { Pie } from "react-chartjs-2";
import { Wrapper } from "./Chart.styles";
import { Chart as ChartJS, ArcElement, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(ArcElement, Legend, ChartDataLabels);

export const data: ChartData = {
    labels: ["Google", "Facebook", "Instagram", "Twitter", "LinkedIn"],
    datasets: [
        {
            label: "Quantity",
            data: [725, 225, 15, 30, 45],
            backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
            ],
            borderWidth: 2,
        },
    ],
};

const Chart = () => {
    return (
        <Wrapper>
            <Pie data={data} options={{
                plugins: {
                    datalabels: {
                        formatter: (value, context) => {
                            const dataArray = context.chart.data.datasets[0].data as number[];
                            const totalPercentage = dataArray.reduce((total, item) => {
                                    return total + item;
                            },0);
                            const finalPercent = `${(value / totalPercentage * 100).toFixed(1)}%`; 
                            return finalPercent;
                        }
                    }
                }
            }}/>
        </Wrapper>
    );
};

export default Chart;
