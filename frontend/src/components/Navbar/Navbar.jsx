import React from 'react'
import {  AppBar, Avatar, Button, Toolbar, Typography } from "@material-ui/core"
import { NavLink } from "react-router-dom"
import useStyles from "./styles.js"


export default function Navbar() {
    const classes = useStyles()
    const user = null;
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
                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                <Button variant="contained" className={classes.signout} color="secondary">Sign Out</Button>
                </div>
              
            ): (
<Button className={classes.signin} variant="contained"  component={NavLink} to="/auth">Sign In</Button>
            )
        }
       </Toolbar>
      </AppBar>
  )
}
