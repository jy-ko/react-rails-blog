import React from 'react'
import './Post.css';

const Post = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <div className="card-text">{props.body}</div>
            </div>
        </div>
    )
}

export default Post