import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"
import { NavLink, useNavigate, useLocation } from "react-router-dom"
import useStyles from "./styles.js"
import { LOGOUT } from '../../constants/ActionTypes.js'


export default function Navbar() {
    const classes = useStyles()
    const dispatch = useDispatch()
    const history = useNavigate()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")))
    const logout = () => {
      dispatch({type : LOGOUT})
      history("/")
      setUser(null)
    }
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("profile")))  
    }, [location])
  return (
    <AppBar className={classes.appBar} position="sticky" color="inherit">
        <div className={classes.brandContainer}>
        <Typography className={classes.header} component={NavLink} to="/" variant="h2">
          capture
        </Typography>
       {/*  <img src="./images/redcam.jpg" alt="" className={classes.image} height="60" width="60"/> */}
        </div>
       <Toolbar className={classes.toolbar}>
        {
            (user) ? (
                <div className={classes.profile}> 
                <Typography className={classes.userName} > <Avatar className={classes.purple} alt={user.result.givenName} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>Hi, {user.result.givenName}</Typography>
                <Button variant="contained" className={classes.signout} color="secondary" onClick={logout}>Sign Out</Button>
                </div>
              
            ): (
<Button className={classes.signin} variant="contained"  component={NavLink} to="/auth" color='secondary'>Sign In</Button>
            )
        }
       </Toolbar>
      </AppBar>
  )
}
