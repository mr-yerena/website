// Import React
import React from 'react'

// Import Elements
import Section from 'elements/section'
import Title from 'elements/title'

// Import Libraries
import { Generic, Container } from 'rbx'
import PropTypes from 'prop-types'

// Import Sub-components
import Typewriter from './typewriter'

const Slider = (props) => {
  const {
    title,
    description,
    skills,
    backgroundImage,
  } = props
  const sliderInlineStyle = { backgroundImage: `url(${backgroundImage})` }

  return (
    <Generic className={`slider`} style={sliderInlineStyle}>
      <Section className={`slider-container`}>
        <Container>
          <Title type={`h1`}>
            {
              title
            }
            <Generic as={`span`} className={`slider-text`}>
              {
                description.description
              }
            </Generic>
            <Typewriter
              skills={skills}
            />
          </Title>
        </Container>
      </Section>
    </Generic>
  )
}

Slider.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.objectOf(PropTypes.string).isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
  backgroundImage: PropTypes.string.isRequired,
}

export default Slider
