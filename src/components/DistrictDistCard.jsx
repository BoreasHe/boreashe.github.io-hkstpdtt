import { ResponsiveSwarmPlot } from "@nivo/swarmplot";
import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { basicInfo } from "../res/basicInfo";
import { DashboardCard } from "./DashboardCard";

export const DistrictDistCard = () => {
    const { updatedVacancy } = useContext(DataContext);
    const [chartData, setChartData] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (updatedVacancy?.data)
            mapChartData(updatedVacancy.data);
    }, [updatedVacancy?.data])

    const mapChartData = (data) => {
        const aggregation = data.car_park
            .filter(carpark => carpark["vehicle_type"].find(vt => vt.type === "P")?.["service_category"]?.find(sc => sc.vacancy_type === "A")?.vacancy)
            .reduce((buffer, carpark) => {
                buffer[carpark.park_id] = {
                    "id": carpark.park_id,
                    "name": basicInfo.find(cp => cp.park_id === carpark.park_id).name_en,
                    "vacancy": carpark["vehicle_type"].find(vt => vt.type === "P")?.["service_category"]?.find(sc => sc.vacancy_type === "A")?.vacancy ?? -1,
                    "group": basicInfo.find(cp => cp.park_id === carpark.park_id).district_en
                }
                return buffer;
            }, {})

        console.log(aggregation);
        setChartData(aggregation);
    }

    return (
        <DashboardCard title="District Vacancy Distribution" subtitle="Base on the most updated data from the government API" loading={loading}>
            <div style={{ height: 300, position: "relative" }}>
                {
                    chartData && <SwarmPlot data={Object.values(chartData)} onFinishRender={() => setLoading(false)} />
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
            colors={{ "scheme": "spectral" }}
            data={data}
            groups={
                [
                    "Kwun Tong",
                    "Sha Tin",
                    "Wong Tai Sin",
                    "Sai Kung",
                    "Yuen Long",
                    "Eastern",
                    "Tuen Mun",
                    "Kwai Tsing",
                    "Islands",
                    "North",
                    "Southern",
                    "Tai Po",
                    "Yau Tsim Mong",
                    "Sham Shui Po",
                    "Wan Chai",
                    "Tsuen Wan",
                    "Kowloon City",
                    "Central & Western"
                ]}
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