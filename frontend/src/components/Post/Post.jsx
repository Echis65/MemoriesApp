import React from 'react'
import Posts from './Posts/Posts.jsx'
import {Grid, CircularProgress} from "@material-ui/core"
import useStyles from "./style.jsx"
import { useSelector } from 'react-redux'
export default function Post({setCurrentId})
{
    const classes = useStyles()
    const posts = useSelector( ( state ) => state.post )

    return (
       !posts.length ? <CircularProgress/> : (
           <Grid className = {classes.mainContainer} container alignItems="stretch" spacing={3}>
               {
                   posts.map((post) => (
                       <Grid item xs={12} sm={6} key={post._id}>
                                <Posts post={post} setCurrentId={setCurrentId}/>
                       </Grid>
                   ))
               }

           </Grid>
       )
    )
}
