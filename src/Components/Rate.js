import { Rating } from '@mui/material';
import React from 'react'

export default function Rate(props) {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <Rating value={value} onChange={(event, newValue) => {
                setValue(newValue);
            }} onClick={props.handleInputChange} />
        </div>
    )
}
