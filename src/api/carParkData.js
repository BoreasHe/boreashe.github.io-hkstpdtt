import axios from "axios";

const carParkDataApiUrl = "https://api.data.gov.hk/v1/historical-archive/get-file?url=https%3A%2F%2Fresource.data.one.gov.hk%2Ftd%2Fcarpark%2Fvacancy_all.json&time={year}{month}{day}-{hour}{minute}";
const carParkUpdatedVacancyUrl = "https://resource.data.one.gov.hk/td/carpark/vacancy_all.json";


export const getCarParkData = async (year, month, day, hour, minute) => {
    const apiUrl = carParkDataApiUrl
        .replace("{year}", year)
        .replace("{month}", month)
        .replace("{day}", day)
        .replace("{hour}", hour)
        .replace("{minute}", minute);

    const result = await axios.get(apiUrl);
    return result.data;
}

export const getUpdatedVacancyData = async () => {
    const result = await axios.get(carParkUpdatedVacancyUrl);
    return result;
}