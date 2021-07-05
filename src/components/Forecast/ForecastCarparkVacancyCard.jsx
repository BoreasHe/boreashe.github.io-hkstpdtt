import { Divider, Grid } from "@material-ui/core";
import { differenceInMinutes, parse } from "date-fns";
import { useContext } from "react";
import { useEffect, useState } from "react"
import { getTodayVacancyData } from "../../api/carParkData";
import { predictVacancyNow } from "../../api/predictVacancy";
import { DataContext } from "../../context/DataContext";
import { getColorAt } from "../../helper/color";
import { DashboardCard } from "../DashboardCard"
import { DistrictCarparkDropdownGroup } from "../Dropdowns/DistrictCarparkDropdownGroup";
import { DistrictDropdown } from "../Dropdowns/DistrictDropdown";

export const ForecastCarparkVacancyCard = () => {

    const [loading, setLoading] = useState(false);
    const [selectedCarpark, setSelectedCarpark] = useState("");
    const [predictedVacancy, setPredictedVacancy] = useState();

    const [recentVacancy, setRecentVacancy] = useState();
    const [recentVacancyTime, setRecentVacancyTime] = useState("-");

    const { updatedVacancy } = useContext(DataContext);

    useEffect(() => {
        if (selectedCarpark !== undefined && selectedCarpark !== "") {
            getLastUpdateVacancy(selectedCarpark);
            predict(selectedCarpark);
        }
        else {
            setRecentVacancy("-");
            setPredictedVacancy("-");
        }
    }, [selectedCarpark])

    const getLastUpdateVacancy = (selectedCarpark) => {
        const entry = updatedVacancy.data.car_park
            .find(carpark => carpark.park_id === selectedCarpark)["vehicle_type"]
            .find(vt => vt.type === "P")?.["service_category"]
            ?.find(sc => sc.vacancy_type === "A");

        const vac = entry?.vacancy ?? "-";
        const updateTime = entry?.lastupdate ?? "-";

        let diffString = "-";

        if (updateTime !== "-") {
            const updatedTime = parse(updateTime, "yyyy-MM-dd HH:mm:ss", new Date());
            const diff = differenceInMinutes(new Date(), updatedTime);
            diffString = `(${diff} min${diff !== 1 ? "s" : ""} ago)`
        }

        setRecentVacancy(vac);
        setRecentVacancyTime(diffString);
    }

    const predict = async (selectedCarpark) => {
        setLoading(true);

        try {
            const predictedVacancy = await predictVacancyNow([selectedCarpark]);
            setPredictedVacancy(predictedVacancy[selectedCarpark]);
        }
        catch (e) {
            console.error(e);
            setPredictedVacancy("Error :(");
        }
        finally {
            setLoading(false);
        }
    }

    return (
        <DashboardCard title="Predict Vacancy By Carpark (Now)" loading={loading} headerDropdown={DistrictCarparkDropdownGroup} onSelectDropdown={(v) => setSelectedCarpark(v)}>
            <div style={{ height: 150, position: "relative" }}>
                <Grid container spacing={4} style={{ marginTop: 10 }} justify="center">
                    <Grid item xs={5}>
                        <div style={{ fontFamily: "AdobeClean", fontWeight: "bold", fontSize: 14, color: "#716873", marginBottom: -2 }}>
                            LAST UPDATE<br />
                            <span style={{ fontSize: 12 }}>{recentVacancyTime}</span>
                        </div>
                        <div style={{ fontFamily: "AdobeClean", fontWeight: "bold", fontSize: 60, color: recentVacancy === "-" || recentVacancy === "Error :(" ? "#BCADBF" : getColorAt(Math.floor(recentVacancy / 50 * 10)) }}>
                            {
                                recentVacancy
                            }
                        </div>
                    </Grid>

                    <Grid item xs={1}>
                        <Divider orientation="vertical" flexItem style={{ height: "100%", width: 3 }} />
                    </Grid>

                    <Grid item xs={5}>
                        <div style={{ fontFamily: "AdobeClean", fontWeight: "bold", fontSize: 14, color: "#716873", marginBottom: 15 }}>
                            PREDICTED VACANCY
                        </div>
                        <div style={{
                            fontFamily: "AdobeClean", fontWeight: "bold", fontSize: 60, color: predictedVacancy === "-" || predictedVacancy === "Error :(" ? "#BCADBF" : getColorAt(Math.floor(predictedVacancy / 50 * 10))
                        }}>
                            {
                                predictedVacancy
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
        </DashboardCard >
    )
}