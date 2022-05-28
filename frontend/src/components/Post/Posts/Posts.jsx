import React from 'react'
import useStyles from "./style.jsx"
import { Card, CardActions, CardMedia, CardContent,Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbUpAltOutlinedIcon  from '@material-ui/icons/ThumbUpAltOutlined';
import DeleteIcon from '@material-ui/icons/Delete';
import { deletePost, updatedLikedPost } from '../../../actions/post.js';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import { useDispatch } from 'react-redux';
import moment from "moment"
export default function Posts({post, setCurrentId})
{
    const dispatch = useDispatch()
    const classes = useStyles()
    const user = JSON.parse(localStorage.getItem("profile"))
    const Likes = () => {
      if (post.likes.length > 0) {
        return post.likes.find((like) => like === (user?.result?.googleId || user?.result?._id))
          ? (
            <><ThumbUpAltIcon fontSize="small" />&nbsp;{post.likes.length > 2 ? `You and ${post.likes.length - 1} others` : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}` }</>
          ) : (
            <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}</>
          );
      }
  
      return <><ThumbUpAltOutlinedIcon fontSize="small" />&nbsp;Like</>;
    };
    return (
      <Card className = {classes.card} >
          <CardMedia  className={classes.media}  image={post.selectedFile} title={post.title} component="div"/>
        <div className={classes.overlay}>
            <Typography variant="h6">{post.name}</Typography>
            <Typography variant="body2">{moment(post.createdAt).local().fromNow()}</Typography>
        </div>
        <div className={classes.overlay2}>
          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) &&(
            <Button style={{color:"white"}} size="small" onClick={() => setCurrentId(post._id)}>
                <MoreHorizIcon fontSize="medium" titleAccess="Edit"/>
            </Button>
          )}      
        </div>
        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary">
             { post.tags.map((tag) => (`${tag}`.length === 0 ) ? `no tags` : `#${tag}`)}
          </Typography>
        </div>
        <Typography className={classes.title} variant="h5" gutterBottom>
            {post.title}
          </Typography>
        <CardContent>
        <Typography  gutterBottom className={classes.message}>
            {post.message}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
        <Button size='small' disabled={!user?.result} color='primary' onClick={() => 
          dispatch(updatedLikedPost(post._id))
        }>
       <Likes/>
                </Button>
                {(user?.result?.googleId === post?.creator || user?.result._id === post?.creator) &&(
                     <Button size='small' color='primary' onClick={() => 
                      { let confirmationMessage = window.confirm("Are you sure you want to delete this post");
                       if(confirmationMessage){
                         dispatch(deletePost(post._id)) 
                       }}
                       }>
                         <DeleteIcon fontSize="small"/>
                         Delete
                       </Button>
                )}
             
        </CardActions>
      </Card>
    )
}
