import React from 'react'
import { TextField } from '@mui/material'

const TextTypeField = ({ value, setValue, label }) => {
    return (
        <>
            <TextField
                autoFocus
                value={value}
                onChange={(e) => setValue(e.target.value)}
                variant="standard"
                label={label}
                type={"text"}
                fullWidth
                sx={{
                    mb: 3,
                    "& .MuiOutlinedInput-root": {
                        "& fieldset": { borderColor: "#ccc", borderWidth: "2px" },
                        "&:hover fieldset": { borderColor: "  #ff6036" },
                        "& .Mui-focused fieldset": { borderColor: "blueviolet" },
                        "&:active fieldset": { borderColor: "pink" },
                        padding: 1,
                        borderRadius: 10,
                        width: "100%",
                        height: "45px",
                    },
                }}
            />
        </>
    )
}

export default TextTypeField
