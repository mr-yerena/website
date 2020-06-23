// Import React
import React from 'react'

// Import Libraries
import { Generic } from 'rbx'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import PropTypes from 'prop-types'

const RichText = (props) => {
  const { content } = props

  return (
    <Generic className={`rich-text`}>
      {
        documentToReactComponents(JSON.parse(content))
      }
    </Generic>
  )
}

RichText.propTypes = {
  content: PropTypes.string.isRequired,
}

export default RichText
