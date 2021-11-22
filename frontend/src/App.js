import React from 'react'
import './styles.js';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import Post from "./components/Post/Post.jsx"
/* import memories from "./Images/memories.png" */
import Form from './components/Form/Form.jsx';
import useStyles from "./styles.js"
function App()
{
  const classes = useStyles()
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="center" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img src="./Images/memories.png" className={classes.image} alt="memories" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Post />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
