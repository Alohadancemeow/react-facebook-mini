import React from 'react'
import PropTypes from 'prop-types'

function Post({ id, title, deletePost }) {
    return (
        <div className="post">
            <button
                className="post__delete"
                onClick={() => deletePost(id)}
            >
                x
            </button>
            <div className="post__title">{title}</div>
            <img
                className="post__image"
                src={`https://source.unsplash.com/random?sig=${id}`}
                alt="post"
            />
        </div>
    )
}

Post.prototype = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost: PropTypes.func.isRequired,
}

export default Post