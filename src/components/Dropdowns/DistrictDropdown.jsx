import { FormControl, InputLabel, ListSubheader, MenuItem, Select } from "@material-ui/core"
import { domains } from "../../res/district"

export const DistrictDropdown = ({ onChange }) => {

    return (
        <FormControl style={{ width: 125 }}>
            <InputLabel>District</InputLabel>
            <Select defaultValue="" onChange={(e) => onChange(e.target.value ?? "")}>
                <MenuItem value="">
                    -
                </MenuItem>
                {
                    Object.entries(domains).map(([domain, districts]) => (
                        [
                            <ListSubheader disableSticky>{domain}</ListSubheader>,
                            districts.map(district => (
                                <MenuItem value={district}>{district}</MenuItem>
                            ))
                        ]
                    ))
                }
            </Select>
        </FormControl>
    )
}