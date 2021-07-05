import { FormControl, InputLabel, ListSubheader, MenuItem, Select } from "@material-ui/core"
import { timeInterval } from "../../res/basicInfo"
import {
    DatePicker,
    TimePicker,
    DateTimePicker,
    MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import { useState } from "react";

export const TimeDropdown = ({ onChange }) => {

    const [time, setTime] = useState(undefined);

    const handleChange = (e) => {
        setTime(e)
        onChange(e);
    }

    return (
        <FormControl style={{ width: 200 }}>
            <DateTimePicker label="Time" value={time} onChange={handleChange} />
        </FormControl>
    )
}