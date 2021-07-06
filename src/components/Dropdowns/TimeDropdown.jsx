import { FormControl } from "@material-ui/core";
import {
    DateTimePicker
} from '@material-ui/pickers';
import { useState } from "react";

export const TimeDropdown = ({ onChange }) => {

    const [time, setTime] = useState(undefined);

    const handleChange = (e) => {
        setTime(e)
        onChange(e);
    }

    return (
        <FormControl style={{ width: 150 }}>
            <DateTimePicker label="Time" value={time} onChange={handleChange} />
        </FormControl>
    )
}