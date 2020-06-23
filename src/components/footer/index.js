// Import React
import React from 'react'

// Import Elements
import Section from 'elements/section'

// Import Libraries
import { Column } from 'rbx'
import PropTypes from 'prop-types'

const Footer = (props) => {
  const { children } = props

  return (
    <Section className={`footer-container`}>
      <Column.Group>
        <Column size={6}>
          {
            children
          }
        </Column>
      </Column.Group>
    </Section>
  )
}

Footer.defaultProps = {
  children: null,
}

Footer.propTypes = {
  children: PropTypes.node,
}

export default Footer
