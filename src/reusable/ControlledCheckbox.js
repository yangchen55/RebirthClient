import { FormControlLabel, Checkbox } from '@mui/material'
import React from 'react'


const ControlledCheckbox = ({ label, checked, onChange }) => {
    return (
        <FormControlLabel control={<Checkbox checked={checked} onChange={onChange} color="success" />}
            label={label} />
    )
}

export default ControlledCheckbox

