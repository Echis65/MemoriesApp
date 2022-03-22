import React from 'react'
import {  AppBar, Typography } from "@material-ui/core"
import useStyles from "./styles.js"


export default function Navbar() {
    const classes = useStyles() 
  return (
    <AppBar className={classes.appBar} position="sticky" color="inherit">
        <Typography  variant="h2" align="center">
          Memories
        </Typography>
        <img src="../../../Images/memories.png" className={classes.image} alt="memories" height="60" />
      </AppBar>
  )
}
