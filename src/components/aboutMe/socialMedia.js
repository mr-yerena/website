// Import React
import React from 'react'

// Import Elements
import Icon from 'elements/icon'
import CallToAction from 'elements/callToAction'

// Import Modifiers
import ElementKey from 'modifiers/functions/elementKey'

// Import Libraries
import { Generic } from 'rbx'
import PropTypes from 'prop-types'

const SocialMedia = (props) => {
  const { items } = props

  return (
    <Generic as={`ul`} className={`social-media`}>
      {
        items.map((item, index) => (
          <Generic as={`li`} key={`social-media-item-${ElementKey(index)}`}>
            <CallToAction to={item.url} className={`social-media-link`}>
              <Icon name={item.icon} />
            </CallToAction>
          </Generic>
        ))
      }
    </Generic>
  )
}

SocialMedia.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default SocialMedia
