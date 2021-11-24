import React from 'react'
import Posts from './Posts/Posts.jsx'
import useStyles from "./style.jsx"
import { useSelector } from 'react-redux'
export default function Post()
{
    const classes = useStyles()
    const posts = useSelector( ( state ) => state.post )
    console.log( posts )

    return (
        <div className="post">
            <h1>Posts</h1>
            <Posts />
            <Posts />
        </div>
    )
}
