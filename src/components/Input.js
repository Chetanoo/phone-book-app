import React, { useState } from 'react'

const Input = props => {
  const [touched, setTouched] = useState(false)
  return (
    <div>
      <label htmlFor={props.htmlFor}></label>
      <input
        className="form-control"
        placeholder={props.placeholder}
        name={props.htmlFor}
        type={props.type}
        onChange={props.onChange}
        onBlur={() => setTouched(true)}
      />
      {touched && !props.valueData && props.submitted && (
        <div>
          <strong>{props.placeholder} is required.</strong>
        </div>
      )}
    </div>
  )
}

export default Input
