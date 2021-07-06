import { useEffect, useState } from "react";
import { DistrictDropdown } from "./DistrictDropdown";
import { TimeDropdown } from "./TimeDropdown";

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
        <div style={{ backgroundColor: "#383439", borderRadius: 10, width: "max-content" }}>
            <div style={{ padding: "10px 20px", display: "flex" }}>
                <div style={{ marginRight: 20 }}>
                    <DistrictDropdown onChange={handleDistrictChange} />
                </div>
                <div>
                    <TimeDropdown district={district} onChange={handleTimeChange} />
                </div>
            </div>
        </div>
    )
}