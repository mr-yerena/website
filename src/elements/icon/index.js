// Import React
import React from 'react'

// Import Libraries
import * as Icons from 'react-icons/fa'
import PropTypes from 'prop-types'

const Icon = (props) => {
  const { name, className } = props
  const Component = Icons[name]

  return <Component className={className} />
}

Icon.defaultProps = {
  className: null,
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
}

export default Icon
