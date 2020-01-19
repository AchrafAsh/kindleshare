import React from 'react'
import PostDetails from '../home/PostDetails';

function Activity({ posts }) {
    return (
        <div>
            {posts.map(post => (
                <PostDetails post={post} />
            ))}
        </div>
    )
}

export default Activity;