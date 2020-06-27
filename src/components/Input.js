import React from 'react'

const Input = props => (
    <div className="input container">
        <label htmlFor={props.htmlFor}>{props.placeholder}</label>
        <input
            placeholder={props.placeholder}
            name={props.htmlFor}
            type={props.type}
            onChange={props.onChange}
        />
    </div>
)

export default Input
