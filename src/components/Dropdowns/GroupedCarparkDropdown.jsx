import { FormControl, InputLabel, ListSubheader, MenuItem, Select } from "@material-ui/core"
import { useContext } from "react"
import { DataContext } from "../../context/DataContext"

export const GroupedCarparkDropdown = ({ onChange }) => {

    const { groupedCarpark } = useContext(DataContext);

    return (
        <FormControl>
            <InputLabel>Grouping</InputLabel>
            <Select defaultValue="" onChange={(e, v) => onChange(v)}>
                <MenuItem value="">
                    -
                </MenuItem>
                {
                    Object.entries(groupedCarpark).map(([district, carparks]) => (
                        <DistrictCategory district={district} carparks={carparks} />
                    ))
                }
            </Select>
        </FormControl>
    )
}

const DistrictCategory = ({ district, carparks }) => {
    return (
        <>
            <ListSubheader disableSticky>{district}</ListSubheader>
            {
                carparks.map(carpark => (
                    <MenuItem value={carpark.id}>{carpark.name}</MenuItem>
                ))
            }
        </>
    )
}