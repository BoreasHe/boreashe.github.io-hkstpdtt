import { differenceInMinutes, parse } from "date-fns";
import { useContext } from "react";
import { useEffect, useState } from "react"
import { predictVacancyNow } from "../../api/predictVacancy";
import { DataContext } from "../../context/DataContext";
import { DashboardCard } from "../DashboardCard"
import { DistrictDropdown } from "../Dropdowns/DistrictDropdown";
import { ResponsiveBar } from "@nivo/bar";
import { DistrictTimeDropdownGroup } from "../Dropdowns/DistrictTimeDropdownGroup";

export const ForecastDistrictVacancyCard = () => {

    const [loading, setLoading] = useState(false);
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedTime, setSelectedTime] = useState(undefined);

    const [updatedVacancies, setUpdatedVacancies] = useState();
    const [predictedVacancies, setPredictedVacancies] = useState();

    const [chartData, setChartData] = useState();

    const { groupedCarpark, updatedVacancy } = useContext(DataContext);

    useEffect(() => {
        if (selectedDistrict !== undefined && selectedDistrict !== "" && selectedTime !== undefined && selectedTime !== "") {
            getLastUpdateVacancies(selectedDistrict);
            predict(selectedDistrict, selectedTime);
        }
    }, [selectedDistrict, selectedTime])

    const getLastUpdateVacancies = (selectedDistrict) => {
        setUpdatedVacancies(
            groupedCarpark[selectedDistrict].reduce((buffer, carpark) => {
                const entry = updatedVacancy.data.car_park
                    .find(cp => cp.park_id === carpark.id)["vehicle_type"]
                    .find(vt => vt.type === "P")?.["service_category"]
                    ?.find(sc => sc.vacancy_type === "A");

                buffer[carpark.id] = entry?.vacancy ?? "-";
                return buffer;
            }, {})
        )
    }

    const predict = async (selectedDistrict, time) => {
        setLoading(true);

        const carparkIds = groupedCarpark[selectedDistrict].map(carpark => carpark.id);

        try {
            const predictedVacancies = await predictVacancyNow(carparkIds, time);
            setPredictedVacancies(predictedVacancies);
        }
        catch (e) {
            console.error(e);
            setPredictedVacancies("Error :(");
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if (updatedVacancies && predictedVacancies) {
            mapChartData();
        }
    }, [predictedVacancies]);

    const mapChartData = () => {
        const data = groupedCarpark[selectedDistrict].map(carpark => {
            return {
                "carpark": carpark.name,
                "Updated": updatedVacancies[carpark.id] === "-" ? 0 : updatedVacancies[carpark.id],
                "Predicted": predictedVacancies[carpark.id],
            };
        });
        setChartData(data.sort(function (a, b) {
            return b["Predicted"] - a["Predicted"];
        }));
    }

    const handleChange = (district, time) => {
        setSelectedDistrict(district);
        setSelectedTime(time);
    }

    return (
        <DashboardCard title="Predict Vacancy By District (Specified)" loading={loading} headerDropdown={DistrictTimeDropdownGroup} onSelectDropdown={(v) => handleChange(v[0], v[1])}>
            <div style={{ height: 350, position: "relative" }}>
                {
                    chartData &&
                    <BarPlot data={chartData} />
                }
            </div>
        </DashboardCard >
    )
}

const BarPlot = ({ data }) => (
    <ResponsiveBar
        isInteractive
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
        data={data}
        keys={["Predicted", "Updated"]}
        indexBy="carpark"
        groupMode="grouped"
        margin={{ top: 20, right: 100, bottom: 100, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        valueFormat={{ format: '', enabled: false }}
        colors={{ scheme: 'paired' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -20,
            legend: 'Carparks',
            legendPosition: 'end',
            legendOffset: 32
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'Vacancy',
            legendPosition: 'middle',
            legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
            {
                dataFrom: 'keys',
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 120,
                translateY: 0,
                itemsSpacing: 2,
                itemWidth: 100,
                itemHeight: 20,
                itemDirection: 'left-to-right',
                itemOpacity: 0.85,
                symbolSize: 20,
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)