// Import React
import React from 'react'

// Import Libraries
import { Title as RbxTitle, Generic } from 'rbx'
import PropTypes from 'prop-types'

const Title = (props) => {
  const {
    children,
    className,
    type,
    subTitle,
  } = props

  const titleType = type === `sectionTitle` ? `h2` : type

  return (
    <RbxTitle as={titleType} className={`${type} ${className}`}>
      {
        subTitle && <Generic as={`span`}>{ subTitle }</Generic>
      }
      {
        children
      }
    </RbxTitle>
  )
}

Title.defaultProps = {
  children: null,
  className: ``,
  type: `sectionTitle`,
  subTitle: null,
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf([`sectionTitle`, `h1`, `h2`, `h3`, `h4`, `h5`, `h6`]),
  subTitle: PropTypes.string,
}

export default Title
