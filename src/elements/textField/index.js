// Import React
import React from 'react'

// Import Libraries
import {
  Field,
  Control,
  Input,
  Textarea,
} from 'rbx'
import PropTypes from 'prop-types'

const TextField = (props) => {
  const {
    type,
    placeholder,
    className,
    onBlur,
    onChange,
    required,
  } = props
  const fieldName = placeholder.toLowerCase()
  const showStar = required ? ` *` : ``

  return (
    <Field>
      <Control>
        {
          type === `textarea` ? <Textarea className={`text-field ${className}`} name={fieldName} placeholder={`${placeholder}${showStar}`} onBlur={onBlur} onChange={onChange} /> : <Input type={type} name={fieldName} placeholder={`${placeholder}${showStar}`} className={`text-field ${className}`} onBlur={onBlur} onChange={onChange} />
        }
      </Control>
    </Field>
  )
}

TextField.defaultProps = {
  type: `text`,
  className: ``,
  onBlur: null,
  onChange: null,
  required: false,
}

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  className: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  required: PropTypes.bool,
}

export default TextField
