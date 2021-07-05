import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataContext";
import { getSpectralColor } from "../../helper/color";
import { basicInfo } from "../../res/basicInfo";
import { DashboardCard } from "../DashboardCard";
import { districts } from "../../res/district"
import { differenceInMinutes, parse } from "date-fns";
import { PiePlot } from "../PiePlot";

export const LastUpdateDistCard = () => {
    const { updatedVacancy } = useContext(DataContext);
    const [chartData, setChartData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (updatedVacancy?.data)
            mapChartData(updatedVacancy.data);
    }, [updatedVacancy?.data])


    const mapChartData = (data) => {
        const chartBuffer = {
            "1": {
                id: "<= 1 min",
                label: "<=1 min",
                value: 0,
                color: "#3887BA"
            },
            "2": {
                id: "2 mins",
                label: "2 mins",
                value: 0,
                color: "#6AC2A6"
            },
            "3": {
                id: "3 mins",
                label: "3 mins",
                value: 0,
                color: "#ACDEA8"
            },
            "4": {
                id: "4 - 5 mins",
                label: "4 - 5 mins",
                value: 0,
                color: "#E6F69F"
            },
            "6": {
                id: "6 - 10 mins",
                label: "6 - 10 mins",
                value: 0,
                color: "#FFFFC3"
            },
            "11": {
                id: "11 - 20 mins",
                label: "11 - 20 mins",
                value: 0,
                color: "#FDE192"
            },
            "21": {
                id: "21 - 30 mins",
                label: "21 - 30 mins",
                value: 0,
                color: "#FBAF69"
            },
            "31": {
                id: "31 - 60 mins",
                label: "31 - 60 mins",
                value: 0,
                color: "#F16E49"
            },
            "61": {
                id: "1 - 2 hr(s)",
                label: "> 1 - 2 hr(s)",
                value: 0,
                color: "#D33E50"
            },
            "121": {
                id: "> 2 hrs",
                label: "> 2 hrs",
                value: 0,
                color: "#9C0041"
            }
        }

        const now = new Date();
        const aggregation = data.car_park.filter(carpark => carpark["vehicle_type"].find(vt => vt.type === "P")?.["service_category"]?.find(sc => sc.vacancy_type === "A")?.vacancy)

        aggregation.forEach(carpark => {
            const lastupdate = carpark["vehicle_type"].find(vt => vt.type === "P")?.["service_category"]?.find(sc => sc.vacancy_type === "A")?.lastupdate;
            const updatedTime = parse(lastupdate, "yyyy-MM-dd HH:mm:ss", new Date());
            const diff = differenceInMinutes(now, updatedTime);

            if (diff <= 1)
                chartBuffer["1"].value++;
            else if (diff <= 2)
                chartBuffer["2"].value++;
            else if (diff <= 3)
                chartBuffer["3"].value++;
            else if (diff <= 5)
                chartBuffer["4"].value++;
            else if (diff <= 10)
                chartBuffer["6"].value++;
            else if (diff <= 20)
                chartBuffer["11"].value++;
            else if (diff <= 30)
                chartBuffer["21"].value++;
            else if (diff <= 60)
                chartBuffer["31"].value++;
            else if (diff <= 120)
                chartBuffer["61"].value++;
            else
                chartBuffer["121"].value++;
        });

        setChartData(Object.values(chartBuffer));
    }

    return (
        <DashboardCard title="Vacancy Last Update Distribution" subtitle="An overview in the degree of accuracy of vacancy" loading={loading}>
            <div style={{ height: 300, position: "relative" }}>
                {
                    chartData && <PiePlot data={Object.values(chartData)} onFinishRender={() => setLoading(false)} />
                }
            </div>
        </DashboardCard>
    )
}

const SwarmPlot = (props) => {
    const { data, onFinishRender } = props

    useEffect(() => {
        onFinishRender();
    }, []);

    return (
        <ResponsiveSwarmPlot
            theme={{
                textColor: '#F0F9F3',
                fontFamily: 'AdobeClean',
                grid: {
                    line: {
                        stroke: "#474249"
                    }
                },
                tooltip: {
                    container: {
                        background: '#2C292D',
                        color: '#F0F9F3',
                        fontSize: 'inherit',
                        borderRadius: '5px',
                        padding: '5px 9px',
                    },
                    basic: {
                        whiteSpace: 'pre',
                        display: 'flex',
                        alignItems: 'center',
                    },
                },
            }}
            colors={getSpectralColor(18)}
            colorBy="group"
            data={data}
            groups={districts}
            identity="name"
            value="vacancy"
            valueScale={{ type: 'linear', min: 0, max: 500, reverse: false }}
            forceStrength={4}
            simulationIterations={100}
            borderColor={{
                from: 'color',
                modifiers: [
                    [
                        'darker',
                        0.6
                    ],
                    [
                        'opacity',
                        0.5
                    ]
                ]
            }}
            margin={{ top: 10, right: 40, bottom: 60, left: 60 }}
            axisTop={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: -30,
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 10,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Vacancy',
                legendPosition: 'middle',
                legendOffset: -50
            }}
        />
    )
}