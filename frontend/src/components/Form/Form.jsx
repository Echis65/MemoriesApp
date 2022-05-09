import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core'
import FileBase from "react-file-base64"
import { useDispatch } from 'react-redux'
import { createPost, updatedPost } from '../../actions/post.js'
import useStyles from "./style.jsx"
export default function Form({currentId, setCurrentId})
{ 
    const classes = useStyles()
    let post = useSelector(state => currentId ? state.post.find((p) => p._id === currentId): null)
    const dispatch = useDispatch()
    const [postData, setPostData] = useState( {
        creator: "",
        title: "",
        message: "",
        tags: "",
        selectedFile: ""
    } );
   useEffect(()=>{
    if(post) setPostData(post)
   }, [post])
const handleChange = (e) =>{
    e.preventDefault()
    if(e.target.name === "tags"){
        setPostData({...postData, [e.target.name] : e.target.value.split(",")})
    }else{
        setPostData({...postData, [e.target.name] : e.target.value})
    }
}
    const clear = () =>
    {
         setCurrentId(null);
         setPostData(  {creator: "",
         title: "",
         message: "",
         tags: "",
         selectedFile: ""})
    }
    const handleSubmit = ( e ) =>
    {
        e.preventDefault();
        if(currentId){
            dispatch(updatedPost(currentId, postData))
        }else{
            dispatch( createPost( postData ) )
        }
        clear();
    }
    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h6">
                   {currentId ? "Editing " : "Create "}Your Memory
                </Typography>
                <TextField className={classes.form_field} label="Creator" variant="outlined" name="creator" required fullWidth value={postData.creator} onChange={handleChange} />
                <TextField className={classes.form_field} label="Title" variant="outlined" name="title" fullWidth value={postData.title} onChange={handleChange} />
                <TextField className={classes.form_field} label="Message" variant="outlined" name="message" fullWidth value={postData.message} onChange={handleChange} />
                <TextField className={classes.form_field} label="Tags(Comma separated)" variant="outlined" name="tags" fullWidth value={postData.tags} onChange={handleChange} />
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
