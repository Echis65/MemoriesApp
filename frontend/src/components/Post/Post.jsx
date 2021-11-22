import React from 'react'
import Posts from './Posts/Posts.jsx'
import useStyles from "./style.jsx"
export default function Post()
{
    const classes = useStyles()
    return (
        <div className="post">
            <h1>Posts</h1>
            <Posts />
            <Posts />
        </div>
    )
}
