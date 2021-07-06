import { useState } from "react";
import { CarparkByDistrictDropdown } from "./CarparkByDistrictDropdown";
import { DistrictDropdown } from "./DistrictDropdown";

export const DistrictCarparkDropdownGroup = ({ onChange }) => {

    const [district, setDistrict] = useState("")
    const [selectedCarpark, setSelectedCarPark] = useState("");

    const handleDistrictChange = (v) => {
        if (district !== v) {
            setSelectedCarPark(""); // Clear the current selected carpark because the district changed
            onChange("");
            setDistrict(v)
        }
    }

    const handleCarparkChange = (v) => {
        setSelectedCarPark(v);
        onChange(v);
    }

    return (
        <div style={{ backgroundColor: "#383439", borderRadius: 10, width: "max-content" }}>
            <div style={{ padding: "10px 20px", display: "flex" }}>
                <div style={{ marginRight: 20 }}>
                    <DistrictDropdown onChange={handleDistrictChange} />
                </div>
                <div>
                    <CarparkByDistrictDropdown district={district} onChange={handleCarparkChange} />
                </div>
            </div>
        </div>
    )
}