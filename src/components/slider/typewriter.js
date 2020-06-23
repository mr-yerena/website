// Import React
import React from 'react'

// Import Libraries
import { Generic } from 'rbx'
import ReactTypingEffect from 'react-typing-effect'
import PropTypes from 'prop-types'

const Typewriter = (props) => {
  const { skills } = props

  return (
    <Generic as={`span`} className={`slider-text`}>
      Specialized in:
      <ReactTypingEffect
        text={skills}
        className={`skill-bold`}
      />
    </Generic>
  )
}

Typewriter.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Typewriter
