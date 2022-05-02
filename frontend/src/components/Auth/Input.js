import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React from 'react'

export default function Input({name, label, handleChange, autoFocus, handleShowPassword, type}) {
  return (
    <Grid item xs={6} md={12}>
        <TextField
        name={name}
        variant = "outlined"
        onChange = {handleChange}
        label = {label}
        required
        fullWidth
        autoFocus = {autoFocus}
        inputProps = {name === "password" &&{
            endAdornment:(
                <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}/>
                {type === "password" ? <Visibility/> : <VisibilityOff/>}
                </InputAdornment>
            )
        } }
        />
    </Grid>
  )
}
