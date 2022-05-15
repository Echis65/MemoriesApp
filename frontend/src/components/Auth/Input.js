import { Grid, IconButton, InputAdornment, TextField } from '@material-ui/core'
import { Visibility, VisibilityOff } from '@material-ui/icons'
import React from 'react'

export default function Input({name, label, handleChange, autoFocus, handleShowPassword, type, half}) {
  return (
    <Grid item xs={6} sm={half ? 6 : 12}>
        <TextField
        name={name}
        variant = "outlined"
        onChange = {handleChange}
        label = {label}
        fullWidth
        required
        type={type}
        autoFocus = {autoFocus}
        InputProps = {(name === "password" ?{
            endAdornment:(
                <InputAdornment position='end'>
                <IconButton onClick={handleShowPassword}>
                {type === "password" ? <Visibility/> : <VisibilityOff/>}</IconButton>
                </InputAdornment>
            )
        } : {null:null})} 
        />
    </Grid>
  )
}
