import { ResponsiveLine } from '@nivo/line';
import { useEffect, useState } from "react";
import { getCarParkData } from "../api/carParkData";

const hours = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23"];
const quaters = ["00", "15", "30", "45"];

export const JsonDataPage = () => {

    const [data, setData] = useState();
    const [chartData, setChartData] = useState();

    useEffect(() => {
        getData();
    }, []);

    useEffect(() => {
        if (!data) return;

        const timeArray = hours.flatMap(d => quaters.map(v => [d, v]));
        const template = [{
            "id": "2011/06/16",
            "data": timeArray.map(timestamp => { return { x: timestamp[0] + timestamp[1], y: data[timestamp[0] + timestamp[1]] ?? 0 }; })
        }];

        setChartData(template);
    }, [data]);

    const getData = async () => {
        const timeArray = hours.flatMap(d => quaters.map(v => [d, v]));
        const resultArray = [];

        timeArray.forEach(async (timestamp) => {
            const dataJson = await getCarParkData("2021", "06", "16", timestamp[0], timestamp[1]);

            const tdc1p1Data = dataJson["car_park"].find(carpark => carpark["park_id"] === "tdc1p1");
            try {
                const vacancy = tdc1p1Data["vehicle_type"].find(ty => ty.type === "P")["service_category"].find(ty => ty.vacancy_type === "A").vacancy;
                setData(prev => { return { ...prev, [`${timestamp[0]}${timestamp[1]}`]: vacancy }; });
            }
            catch { }
        });
    };

    return (
        <>
            {/* {
                data && Object.entries(data).map(([timestamp, vacancy]) => {
                    return (
                        <div>
                            {timestamp}: {vacancy}
                        </div>
                    )
                })
            } */}

            {chartData &&
                <div style={{ height: 400, width: "100%" }}>
                    <ResponsiveLine
                        data={chartData}
                        margin={{ top: 50, right: 110, bottom: 60, left: 60 }}
                        xScale={{ type: 'point' }}
                        yScale={{ type: 'linear', min: 'auto', max: 'auto', stacked: true, reverse: false }}
                        yFormat=" >-.2f"
                        axisTop={null}
                        axisRight={null}
                        axisBottom={{
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 90,
                            legend: 'Time',
                            legendOffset: 48,
                            legendPosition: 'middle',
                        }}
                        axisLeft={{
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                            tickRotation: 0,
                            legend: 'Vacancy',
                            legendOffset: -40,
                            legendPosition: 'middle'
                        }}
                        pointSize={10}
                        pointColor={{ theme: 'background' }}
                        pointBorderWidth={2}
                        pointBorderColor={{ from: 'serieColor' }}
                        pointLabelYOffset={-12}
                        useMesh={true}
                        legends={[
                            {
                                anchor: 'bottom-right',
                                direction: 'column',
                                justify: false,
                                translateX: 100,
                                translateY: 0,
                                itemsSpacing: 0,
                                itemDirection: 'left-to-right',
                                itemWidth: 80,
                                itemHeight: 20,
                                itemOpacity: 0.75,
                                symbolSize: 12,
                                symbolShape: 'circle',
                                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                                effects: [
                                    {
                                        on: 'hover',
                                        style: {
                                            itemBackground: 'rgba(0, 0, 0, .03)',
                                            itemOpacity: 1
                                        }
                                    }
                                ]
                            }
                        ]}
                    />
                </div>
            }
        </>
    );
};