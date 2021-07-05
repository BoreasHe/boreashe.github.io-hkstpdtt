import axios from "axios";
import { basicInfo } from "../res/basicInfo";

const DEV_URL = "http://192.168.0.198:8000/predict";
const PROD_URL = "https://hkstpdtt-ds04.herokuapp.com/predict"

export const predictVacancyNow = async (parkIds, time) => {
    const now = time ?? new Date();

    let hours = now.getHours();
    let mins = now.getMinutes();

    const newMin = (parseInt((mins + 7.5) / 15) * 15) % 60;
    const newHour = mins > 52 ? (hours === 23 ? 0 : ++hours) : hours;

    const tasks = parkIds.map(parkId => {
        const carparkInfo = basicInfo.find(carpark => carpark.park_id === parkId);
        return axios.get(PROD_URL, {
            params: {
                park_id: parkId,
                weekday: now.getDay(),
                hour: newHour,
                minute: newMin,
                district_en: carparkInfo.district_en,
                latitude: carparkInfo.latitude,
                longitude: carparkInfo.longitude
            }
        })
    })

    const result = await Promise.all(tasks);

    const predictedVacancy = result.reduce((buffer, r, index) => {
        buffer[parkIds[index]] = r.data.vacancy < 0 ? 0 : Math.round(r.data.vacancy);
        return buffer;
    }, {});

    return predictedVacancy;
}


export const predictVacancy = async (parkId, time) => {
    const now = time;

    const carparkInfo = basicInfo.find(carpark => carpark.park_id === parkId);

    let hours = now.getHours();
    let mins = now.getMinutes();

    const newMin = (parseInt((mins + 7.5) / 15) * 15) % 60;
    const newHour = mins > 52 ? (hours === 23 ? 0 : ++hours) : hours;

    const result = await axios.get(PROD_URL, {
        params: {
            park_id: parkId,
            weekday: now.getDay(),
            hour: newHour,
            minute: newMin,
            district_en: carparkInfo.district_en,
            latitude: carparkInfo.latitude,
            longitude: carparkInfo.longitude
        }
    })

    let predictedVacancy = result.data.vacancy

    if (predictedVacancy < 0)
        predictedVacancy = 0;

    return Math.round(predictedVacancy);
}