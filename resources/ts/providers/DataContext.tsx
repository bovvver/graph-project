import React, { useState, createContext, PropsWithChildren } from "react";
import axios from "axios";
import { DatabaseResponse } from "../helpers/types";
import { ChartInterface } from "../helpers/types";

interface IDataContext {
    data: ChartInterface;
    reloadData: () => void;
}

export const initialData: ChartInterface = {
    labels: [],
    datasets: [
        {
            label: "Quantity",
            data: [],
            backgroundColor: [],
            borderWidth: 2,
        },
    ],
};

export const DataCtx = createContext<IDataContext>({
    data: initialData,
    reloadData: () => {},
});

const DataContext = ({ children }: PropsWithChildren) => {
    const [data, setData] = useState(initialData);

    const reloadData = async () => {
        const apiData = await axios.get("/api/main");
        let labels: string[] = [];
        let quantities: number[] = [];
        let colors: string[] = [];
        apiData.data.forEach((el: DatabaseResponse) => {
            labels.push(el.name);
            quantities.push(el.quantity);
            colors.push(el.color);
        });

        setData({
            labels,
            datasets: [
                {
                    label: "Quantity",
                    data: quantities,
                    backgroundColor: colors,
                    borderWidth: 2,
                },
            ],
        });
    };

    return (
        <DataCtx.Provider value={{ data, reloadData }}>
            {children}
        </DataCtx.Provider>
    );
};

export default DataContext;
