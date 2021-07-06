import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { DashboardCard } from "../DashboardCard";
import { PiePlot } from "./../PiePlot";

export const TotalCarparkAmountCard = () => {
    const { updatedVacancy } = useContext(DataContext);
    const [totalAmount, setTotalAmount] = useState();
    const [chartData, setChartData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (updatedVacancy?.data)
            calculateAmount(updatedVacancy.data);
    }, [updatedVacancy?.data])

    const calculateAmount = (data) => {

        const totalAmountBuffer = data.car_park.length;
        const totalValidAmount = data.car_park.filter(carpark => carpark["vehicle_type"].find(vt => vt.type === "P")?.["service_category"]?.find(sc => sc.vacancy_type === "A")?.vacancy)?.length;
        const totalUnValidAmount = totalAmountBuffer - totalValidAmount;

        setTotalAmount(totalAmountBuffer);

        setChartData(
            [
                {
                    "id": "Available",
                    "label": "Available",
                    "value": totalValidAmount,
                    "color": "#ACDEA8"
                },
                {
                    "id": "No Record",
                    "label": "No Record",
                    "value": totalUnValidAmount,
                    "color": "#D33E50"
                }
            ]
        )
    }

    return (
        <DashboardCard title="Listed Carpark By Enquirability" subtitle="Amount of carparks that can be enquired by the API" loading={loading}>
            <div style={{ height: 300, width: "100%", position: "relative" }}>
                {
                    chartData && <PiePlot data={chartData} totalAmount={totalAmount} onFinishRender={() => setLoading(false)} />
                }
            </div>
        </DashboardCard>
    )
}