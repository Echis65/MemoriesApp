import React, {useEffect, useState} from 'react'
import {Container, Avatar, Button, Paper, Grid, Typography, TextField} from "@material-ui/core"
import Input from "./Input"
import  { LockOutlined } from "@material-ui/icons"
import useStyles from "./styles"

export default function Auth() {
const classes = useStyles();
const [showPassword, setShowPassword] = useState(false);

const handleShowPassword = () => {
  console.log(1)
}
const handleSubmit = () => {
  console.log(1)
}
const handleChange = () => {

}
const isSignUp = false;
  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
      <Avatar className={classes.avatar}>
    <LockOutlined/>
      </Avatar>
      <Typography variant='h5'>{isSignUp ? "Sign Up" : "Sign In"}</Typography>
      <form onSubmit={handleSubmit} className={classes.form}>
      <Grid container spacing={2}>
        {isSignUp && (
          <>
          <Input name='firstName' label="First Name" handleChange={handleChange} autoFocus  variant="outlined" required/>   
          <Input name='lastName' label="Last Name" handleChange={handleChange}   variant="outlined" required/>    
          </>
        )}
        <Input name='email' label="Email Address" handleChange={handleChange} variant="outlined" type="email" required fullWidth/>  
        <Input name='password' label="Password" handleChange={handleChange}   variant="outlined" type={setShowPassword ? "text" : "password"} handleShowPassword={handleShowPassword} fullWidth/>  
      </Grid>
      </form>
      </Paper>
    </Container>
  )
}
