export interface ChartInterface {
    labels: string[];
    datasets: [
        {
            label: string;
            data: number[];
            backgroundColor: string[];
            borderWidth: number;
        }
    ];
}

export interface DatabaseResponse {
    id: number,
    name: string;
    quantity: number;
    color: string;
}
