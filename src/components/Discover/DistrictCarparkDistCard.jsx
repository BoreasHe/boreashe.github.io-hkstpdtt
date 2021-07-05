import { PiePlot } from "../PiePlot"
import { useContext, useEffect, useState } from "react";
import { DashboardCard } from "../DashboardCard";
import { basicInfo } from "../../res/basicInfo";
import { getSpectralColor } from "../../helper/color";

export const DistrictCarparkDistCard = () => {
    const [chartData, setChartData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        generateChartData(basicInfo);
    }, [])

    const generateChartData = (data) => {
        const colors = getSpectralColor(18);
        const groupCount = data.reduce((buffer, carpark) => {
            (buffer[carpark.district_en] = (buffer[carpark.district_en] || 0) + 1);
            return buffer;
        }, {});

        setChartData(Object.entries(groupCount).map(([district, count], index) => {
            return {
                id: district,
                label: district,
                value: count,
                color: colors[index]
            }
        }))

        setLoading(false);
    }

    return (
        <DashboardCard title="Listed Carparks By District" subtitle="Amount of carparks grouped by district" loading={loading}>
            <div style={{ height: 300, position: "relative" }}>
                {
                    chartData && <PiePlot data={chartData} textSize={12} onFinishRender={() => setLoading(false)} />
                }
            </div>
        </DashboardCard>
    )
}