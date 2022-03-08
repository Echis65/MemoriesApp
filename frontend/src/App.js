import React, { useState } from 'react'
import './styles.js';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import Post from "./components/Post/Post.jsx"
/* import memories from "./Images/memories.png" */
import Form from './components/Form/Form.jsx';
import useStyles from "./styles.js"
import { useDispatch } from "react-redux"
import { getPosts } from "./actions/post.js"
import { useEffect } from 'react';



function App()
{
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles()
  const dispatch = useDispatch()
  useEffect( () =>
  {
    dispatch( getPosts() )
  }, [dispatch] )

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="sticky" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img src="./Images/memories.png" className={classes.image} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Post setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
