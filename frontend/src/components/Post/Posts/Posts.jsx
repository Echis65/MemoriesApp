import React from 'react'
import useStyles from "./style.jsx"
import { Card, CardActions, CardMedia, CardContent,Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import { deletePost } from '../../../actions/post.js';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from "moment"
export default function Posts({post, setCurrentId})
{
    const dispatch = useDispatch()
    const classes = useStyles()
    return (
      <Card className = {classes.card}>
          <CardMedia className={classes.media} image={post.selectedFile} title={post.title}/>
        <div className={classes.overlay}>
            <Typography variant="h6">{post.creator}</Typography>
            <Typography variant="body2">{moment(post.createdAt).local().fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
              <Button style={{color:"white"}} size="small" onClick={() => setCurrentId(post._id)}>
                <MoreHorizIcon fontSize="medium" titleAccess="Edit"/>
            </Button>
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
              {post.tags.map((tag) => 
                    `#${tag}`
              )}
          </Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>
            {post.title}
          </Typography>
        <CardContent>
        <Typography variant="h5" gutterBottom className={classes.message}>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='small' color='primary' onClick={() => {
        }}>
          <ThumbUpAltIcon fontSize='small'/>
                  Like
                  {post.likeCount }
                </Button>
                <Button size='small' color='primary' onClick={() => 
               { let confirmationMessage = window.confirm("Are you sure you want to delete this post");
                if(confirmationMessage){
                  dispatch(deletePost(post._id))
                }}
                }>
                  <DeleteIcon fontSize="small"/>
                  Delete
                </Button>
        </CardActions>
      </Card>
    )
}
