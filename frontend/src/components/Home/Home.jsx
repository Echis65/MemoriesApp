import React from 'react'
import { Container, Grow, Grid } from "@material-ui/core"
import Post from '../Post/Post'
import Form from '../Form/Form'
import { useDispatch } from "react-redux"
import { getPosts } from '../../actions/post'
import { useEffect, useState } from 'react';

import useStyles from "./styles.js"

export default function Home() {

    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles()
    const dispatch = useDispatch()
    useEffect( () =>
    {
      dispatch( getPosts() )
    }, [currentId, dispatch] )
  return (
    <Grow in>
        <Container>
          <Grid container justifyContent="space-between" className={classes.mainContainer} alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Post setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
  )
}
