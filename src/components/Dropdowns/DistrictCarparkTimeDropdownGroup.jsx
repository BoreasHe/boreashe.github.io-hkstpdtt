import { useEffect } from "react";
import { useState } from "react";
import { CarparkByDistrictDropdown } from "./CarparkByDistrictDropdown";
import { DistrictDropdown } from "./DistrictDropdown"
import { TimeDropdown } from "./TimeDropdown"

export const DistrictCarparkTimeDropdownGroup = ({ onChange }) => {

    const [district, setDistrict] = useState("")
    const [selectedCarpark, setSelectedCarPark] = useState("");
    const [selectedTime, setSelectedTime] = useState("");

    const handleDistrictChange = (v) => {
        if (district !== v) {
            setSelectedCarPark(""); // Clear the current selected carpark because the district changed
            onChange("");
            setDistrict(v)
        }
    }

    const handleCarparkChange = (v) => {
        setSelectedCarPark(v);
    }

    const handleTimeChange = (v) => {
        setSelectedTime(v);
    }

    useEffect(() => {
        onChange([selectedCarpark, selectedTime]);
    }, [selectedCarpark, selectedTime])

    return (
        <div style={{ display: "flex" }}>
            <div style={{ marginRight: 20 }}>
                <DistrictDropdown onChange={handleDistrictChange} />
            </div>
            <div style={{ marginRight: 20 }}>
                <CarparkByDistrictDropdown district={district} onChange={handleCarparkChange} />
            </div>
            <div>
                <TimeDropdown district={district} onChange={handleTimeChange} />
            </div>
        </div>
    )
}