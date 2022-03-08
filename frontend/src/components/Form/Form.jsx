import React, { useState, useSelector } from 'react'
import useStyles from "./style.jsx"
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from "react-file-base64"
import { useDispatch } from 'react-redux'
import { createPost, updatePost } from '../../actions/post.js'
export default function Form({currentId, setCurrentId})
{
    const classes = useStyles()
    const dispatch = useDispatch()
    const post = useSelector( ( state ) => currentId ? state.posts.find((p) => (p._id === currentId)) : null) 
    const [postData, setPostData] = useState( {
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    } );
    const clear = () =>
    {

    }
    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        if(currentId){
            dispatch(updatePost(currentId, postData))
        }else{
            dispatch( createPost( postData ) )
        }
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">
                    Create Your Memory
                </Typography>
                <TextField className={classes.textfield} label="Creator" variant="outlined" name="creator" fullWidth value={postData.creator} onChange={( e ) => setPostData( { ...postData, creator: e.target.value } )} />
                <TextField className={classes.textfield} label="Title" variant="outlined" name="title" fullWidth value={postData.title} onChange={( e ) => setPostData( { ...postData, title: e.target.value } )} />
                <TextField className={classes.textfield} label="Message" variant="outlined" name="message" fullWidth value={postData.message} onChange={( e ) => setPostData( { ...postData, message: e.target.value } )} />
                <TextField className={classes.textfield} label="Tags(Comma separated)" variant="outlined" name="tags" fullWidth value={postData.tags} onChange={( e ) => setPostData( { ...postData, tags: e.target.value } )} />
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={( { base64 } ) => setPostData( { ...postData, selectedFile: base64 } )} />
                </div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button className={classes.buttonSubmit} variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>

            </form>
        </Paper>
    )
}
