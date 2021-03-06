import React, {useState} from 'react'
import {Container, Avatar, Button, Paper, Grid, Typography} from "@material-ui/core"
import Input from "./Input"
import { useDispatch } from 'react-redux'
import  { LockOutlined } from "@material-ui/icons"
import GoogleLogin from "react-google-login"
import { AUTH } from "../../constants/ActionTypes"
import { useNavigate } from 'react-router-dom'
import { signUp, signIn} from "../../actions/auth"
import useStyles from "./styles"

export default function Auth() {
const classes = useStyles();
const [showPassword, setShowPassword] = useState(false);
const dispatch = useDispatch()
const history = useNavigate()
const [formData, setFormData] = useState({
  "givenName" : "",
  "familyName" : "",
  "email" : "",
  "password" : "",
  "confirmPassword" : ""
})
const handleShowPassword = () => setShowPassword(previousVal => !previousVal)
const handleSubmit = (e) => {
 e.preventDefault()
 if(isSignUp){
dispatch(signUp(formData, history))
 }else{
  dispatch(signIn(formData, history))
 }
}
const handleSuccess = async(res) => {
let result = res?.profileObj;
let token = res?.tokenId;
try {
  dispatch({type : AUTH, data:{result, token}})
history("/")
} catch (error) {
  console.log(error)
}
}
const handleFailure = (error) => {
  console.log(error)
  console.log("Error Signing in with google. Try again Later")
}
const handleChange = (e) => {
  setFormData({...formData, [e.target.name] : e.target.value})
}
const [isSignUp, setIsSignUp] = useState(false)
const switchForm = () => {
  setIsSignUp(previous => !previous)
  setShowPassword(false)
}
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
          <Input name='givenName' label="First Name" handleChange={handleChange} autoFocus   sm={6} half/>   
          <Input name='familyName' label="Last Name" handleChange={handleChange}  half  sm={6} />    
          </>
        )}
        <Input name='email' label="Email Address" handleChange={handleChange}  type="email" />  
        <Input name='password' label="Password" handleChange={handleChange}    type={showPassword ? "text" : "password"} handleShowPassword={handleShowPassword} />  
        {isSignUp && (
          <Input name="confirmPassword" label="Confirm Password" handleChange={handleChange}  type="password"></Input>
        )
        }
      </Grid>
      <Button type='submit' className={classes.submit} fullWidth variant='contained' color='primary'>{isSignUp ? "Create New Account" :  "Sign In"}</Button>
      <Grid container justifyContent='flex-end'>
        <Grid item>
        <Button onClick={switchForm} >{isSignUp ? "Already Have an account? Sign In" : "Don't have an account? Sign Up"}</Button>
        </Grid>
      </Grid>
      <div className={classes.separator}>
  <div className={classes.line}></div>
  <p>OR</p>
  <div className={classes.line}></div>
</div>
<div className={classes.googleButton}>
<GoogleLogin 
clientId='716099661354-tvdh5tl9eun03cl8cdha5mlp8hfi6u7q.apps.googleusercontent.com'
onSuccess={handleSuccess}
cookiePolicy="single_host_origin"
onFailure={handleFailure} />
</div>
      </form>
      </Paper>
    </Container>
  )
}
