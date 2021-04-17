import PropTypes from 'prop-types'
import React, { useState } from 'react'

function Input({ addPost }) {

    const [input, setInput] = useState('')

    // # Change ui and record changed data.
    function onChange(event) {
        setInput(event.target.value)
    }

    function onKeyDown(event) {
        const title = event.target.value

        // # When user presses Enter on keybroad,
        // # Add title into posts,
        // # Set inputField = empty
        if(event.key === "Enter" && title) {
            addPost(title)
            setInput('')
        }
    }


    return (
        <div className="input">
            <div className="input__header">Create Post</div>
            <input
                type="text"
                className="input__field"
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
        </div>
    )
}

Input.prototype = {
    addPost: PropTypes.func.isRequired
}

export default Input
