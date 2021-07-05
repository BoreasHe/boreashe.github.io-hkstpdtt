import { Divider, Grid } from "@material-ui/core";
import { addHours, differenceInMinutes, parse, subHours } from "date-fns";
import { useContext } from "react";
import { useEffect, useState } from "react"
import { getTodayVacancyData } from "../../api/carParkData";
import { predictVacancy, predictVacancyNow } from "../../api/predictVacancy";
import { DataContext } from "../../context/DataContext";
import { getColorAt } from "../../helper/color";
import { DashboardCard } from "../DashboardCard"
import { DistrictCarparkDropdownGroup } from "../Dropdowns/DistrictCarparkDropdownGroup";
import { DistrictCarparkTimeDropdownGroup } from "../Dropdowns/DistrictCarparkTimeDropdownGroup";
import { DistrictDropdown } from "../Dropdowns/DistrictDropdown";

export const ForecastCarparkVacancyByTimeCard = () => {

    const [loading, setLoading] = useState(false);
    const [selectedCarpark, setSelectedCarpark] = useState("");

    const [predictedVacancy, setPredictedVacancy] = useState();
    const [predictedVacancyBefore, setPredictedVacancyBefore] = useState();
    const [predictedVacancyAfter, setPredictedVacancyAfter] = useState();

    const [selectedTime, setSelectedTime] = useState(new Date());

    useEffect(() => {
        if (selectedCarpark !== undefined && selectedCarpark !== "" && selectedTime !== undefined && selectedTime !== "") {
            predict(selectedCarpark, selectedTime);
        }
        else {
            setPredictedVacancy("-");
            setPredictedVacancyBefore("-");
            setPredictedVacancyAfter("-");
        }
    }, [selectedCarpark, selectedTime])

    const predict = async (selectedCarpark, time) => {
        setLoading(true);

        try {
            const tasks = [predictByTime(selectedCarpark, subHours(time, 1)), predictByTime(selectedCarpark, time), predictByTime(selectedCarpark, addHours(time, 1))]
            const result = await Promise.all(tasks);

            setPredictedVacancyBefore(result[0]);
            setPredictedVacancy(result[1]);
            setPredictedVacancyAfter(result[2]);
        }
        catch (e) {
            console.error(e);
            setPredictedVacancy("Error :(");
        }
        finally {
            setLoading(false);
        }
    }

    const handleChange = (carpark, time) => {
        setSelectedCarpark(carpark);
        setSelectedTime(time);
    }

    const predictByTime = async (id, time) => {
        const predictedVacancy = await predictVacancy(selectedCarpark, time);
        return predictedVacancy;
    }

    return (
        <DashboardCard title="Predict Vacancy By Carpark (Specified)" loading={loading} headerDropdown={DistrictCarparkTimeDropdownGroup} onSelectDropdown={(v) => handleChange(v[0], v[1])}>
            <div style={{ height: 150, position: "relative" }}>
                <Grid container spacing={4} style={{ marginTop: 10 }} justify="center">
                    <Grid item xs={3}>
                        <div style={{ fontFamily: "AdobeClean", fontWeight: "bold", fontSize: 14, color: "#716873", marginBottom: -2 }}>
                            PREDICTED VACANCY<br />
                            <span style={{ fontSize: 12 }}>(1hr before)</span>
                        </div>
                        <div style={{
                            fontFamily: "AdobeClean", fontWeight: "bold", fontSize: 60, color: predictedVacancyBefore === "-" || predictedVacancyBefore === "Error :(" ? "#BCADBF" : getColorAt(Math.floor(predictedVacancyBefore / 50 * 10))
                        }}>
                            {
                                predictedVacancyBefore
                            }
                        </div>
                    </Grid>

                    <Grid item xs={1}>
                        <Divider orientation="vertical" flexItem style={{ height: "100%", width: 3 }} />
                    </Grid>

                    <Grid item xs={3}>
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

                    <Grid item xs={1}>
                        <Divider orientation="vertical" flexItem style={{ height: "100%", width: 3 }} />
                    </Grid>

                    <Grid item xs={3}>
                        <div style={{ fontFamily: "AdobeClean", fontWeight: "bold", fontSize: 14, color: "#716873", marginBottom: -2 }}>
                            PREDICTED VACANCY<br />
                            <span style={{ fontSize: 12 }}>(1hr after)</span>
                        </div>
                        <div style={{
                            fontFamily: "AdobeClean", fontWeight: "bold", fontSize: 60, color: predictedVacancyAfter === "-" || predictedVacancyAfter === "Error :(" ? "#BCADBF" : getColorAt(Math.floor(predictedVacancyAfter / 50 * 10))
                        }}>
                            {
                                predictedVacancyAfter
                            }
                        </div>
                    </Grid>

                </Grid>
            </div>
        </DashboardCard >
    )
}