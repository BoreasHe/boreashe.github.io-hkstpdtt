import { useEffect } from "react";
import { useState } from "react";
import { DistrictDropdown } from "./DistrictDropdown"
import { TimeDropdown } from "./TimeDropdown"

export const DistrictTimeDropdownGroup = ({ onChange }) => {

    const [district, setDistrict] = useState("")
    const [selectedTime, setSelectedTime] = useState("");

    const handleDistrictChange = (v) => {
        if (district !== v) {
            setDistrict(v)
        }
    }

    const handleTimeChange = (v) => {
        setSelectedTime(v);
    }

    useEffect(() => {
        onChange([district, selectedTime]);
    }, [district, selectedTime])

    return (
        <div style={{ display: "flex" }}>
            <div style={{ marginRight: 20 }}>
                <DistrictDropdown onChange={handleDistrictChange} />
            </div>
            <div>
                <TimeDropdown district={district} onChange={handleTimeChange} />
            </div>
        </div>
    )
}