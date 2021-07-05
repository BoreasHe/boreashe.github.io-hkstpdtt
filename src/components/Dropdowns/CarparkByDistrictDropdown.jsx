import { FormControl, InputLabel, ListSubheader, MenuItem, Select } from "@material-ui/core"
import { useContext, useEffect } from "react"
import { DataContext } from "../../context/DataContext"

export const CarparkByDistrictDropdown = ({ district, onChange }) => {

    const { groupedCarpark } = useContext(DataContext);

    return (
        <FormControl style={{ width: 225 }}>
            <InputLabel>Carpark</InputLabel>
            <Select defaultValue="" onChange={(e, v) => onChange(e.target.value ?? "")} disabled={district === ""}>
                <MenuItem value="">
                    -
                </MenuItem>
                {
                    district !== "" &&
                    groupedCarpark[district].map(carpark => (
                        <MenuItem value={carpark.id}>{carpark.name}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>
    )
}