// Import React
import React from 'react'

// Import Libraries
import { Field, Control, Input } from 'rbx'
import PropTypes from 'prop-types'

const TextField = (props) => {
  const { type, placeholder } = props

  return (
    <Field>
      <Control>
        <Input
          type={type}
          placeholder={placeholder}
          className={`text-field`}
        />
      </Control>
    </Field>
  )
}

TextField.defaultProps = {
  type: `text`,
}

TextField.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
}

export default TextField
