import React from 'react';
import Post from './Post/Post'

const posts = (props) => (
    props.posts.map((post) => {
        return (
        <Post 
        content = {post.content}
        key = {post._id} />)
        
    })

)

export default posts;