// Import React
import React from 'react'

// Import Libraries
import { Section as RbxSection } from 'rbx'
import PropTypes from 'prop-types'

const Section = (props) => {
  const {
    children,
    className,
    backgroundColor,
    style,
  } = props

  return (
    <RbxSection style={style} className={`${className} ${backgroundColor}`}>
      {
        children
      }
    </RbxSection>
  )
}

Section.defaultProps = {
  className: ``,
  children: null,
  backgroundColor: null,
  style: null,
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  backgroundColor: PropTypes.oneOf([`grey`]),
  style: PropTypes.objectOf(PropTypes.object),
}

export default Section
