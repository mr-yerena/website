// Import React
import React from 'react'

// Import Elements
import Link from 'elements/link'

// Import Libraries
import { Button } from 'rbx'
import PropTypes from 'prop-types'

const CallToAction = (props) => {
  const {
    to,
    children,
    className,
    disabled,
  } = props

  return (
    <>
      {
        to ? (
          <Link to={to} className={`call-to-action ${className}`}>
            {
              children
            }
          </Link>
        ) : (
          <Button className={`call-to-action ${className}`} disabled={disabled}>
            {
              children
            }
          </Button>
        )
      }
    </>
  )
}

CallToAction.defaultProps = {
  to: null,
  className: null,
  disabled: false,
}

CallToAction.propTypes = {
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
}

export default CallToAction
