import { createContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import { basicInfo } from "../res/basicInfo";
import { getUpdatedVacancyData } from "./../api/carParkData";

export const DataContext = createContext();

export const DataContextProvider = (props) => {
    const { children } = props;

    const updatedVacancyQuery = useQuery('updated_vacancy', getUpdatedVacancyData)

    useEffect(() => {
        setConfig(prev => {
            return {
                ...prev,
                updatedVacancy: updatedVacancyQuery.data
            }
        })
    }, [updatedVacancyQuery.data])

    const initNavBarConfig = {
        updatedVacancy: undefined,
        groupedCarpark: basicInfo.reduce((buffer, carpark) => {
            (buffer[carpark.district_en] = buffer[carpark.district_en] || []).push({ id: carpark.park_id, name: carpark.name_en });
            return buffer;
        }, {})
    };

    const [config, setConfig] = useState(initNavBarConfig);

    return (
        <DataContext.Provider value={config}>
            {children}
        </DataContext.Provider>
    )
}