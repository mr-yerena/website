// Import React
import React from 'react'

// Import Modifiers
import IsExternalLink from 'modifiers/functions/isExternalLink'

// Import Libraries
import { Link as GatsbyLink } from 'gatsby'
import PropTypes from 'prop-types'

const Link = (props) => {
  const { to, children, className } = props

  return (
    <>
      {
        IsExternalLink(to) ? (
          <a href={to} target={`_blank`} className={`call-to-action ${className}`}>
            {
              children
            }
          </a>
        ) : (
          <GatsbyLink to={to} className={`call-to-action ${className}`}>
            {
              children
            }
          </GatsbyLink>
        )
      }
    </>
  )
}

Link.defaultProps = {
  className: null,
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

export default Link
