// Import React
import React from 'react'

// Import Elements
import CallToAction from 'elements/callToAction'

// Import Modifiers
import ElementKey from 'modifiers/functions/elementKey'

// Import Libraries
import { Navbar } from 'rbx'
import PropTypes from 'prop-types'

const Header = (props) => {
  const { logoName, navbar } = props

  return (
    <Navbar className={`header`} fixed={`top`}>
      <Navbar.Brand>
        <Navbar.Item href={`/`} className={`logo-name`}>
          {
            logoName
          }
        </Navbar.Item>
        <Navbar.Burger />
      </Navbar.Brand>
      <Navbar.Menu>
        <Navbar.Segment align={`end`}>
          {
            navbar.links.map((item, index) => (
              <CallToAction to={item.to} key={`navbaer-link-${ElementKey(index)}`} className={`navbar-links-item`}>
                {
                  item.text
                }
              </CallToAction>
            ))
          }
        </Navbar.Segment>
      </Navbar.Menu>
    </Navbar>
  )
}

Header.propTypes = {
  logoName: PropTypes.string.isRequired,
  navbar: PropTypes.shape({
    links: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
}

export default Header
