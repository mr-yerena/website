// Import React
import React from 'react'

// Import Elements
import Section from 'elements/section'
import Title from 'elements/title'
import RichText from 'elements/richText'

// Import Libraries
import {
  Column,
  Generic,
  Image,
  Container,
} from 'rbx'
import PropTypes from 'prop-types'

// Import Sub-components
import SocialMedia from './socialMedia'

const AboutMe = (props) => {
  const {
    title,
    jobTitle,
    description,
    socialMedia,
    profileImage,
  } = props

  return (
    <Section className={`about-me`}>
      <Container>
        <Column.Group>
          <Column size={5}>
            <Image.Container size={256}>
              <Image src={profileImage} />
            </Image.Container>
          </Column>
          <Column size={7}>
            <Generic className={`about-me-header`}>
              <Title className={`has-text-left`}>
                {
                  title
                }
              </Title>
              <Title type={`h3`}>
                {
                  jobTitle
                }
              </Title>
            </Generic>
            <RichText content={description} />
            <SocialMedia items={socialMedia} />
          </Column>
        </Column.Group>
      </Container>
    </Section>
  )
}

AboutMe.propTypes = {
  title: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  socialMedia: PropTypes.arrayOf(PropTypes.object).isRequired,
  profileImage: PropTypes.string.isRequired,
}

export default AboutMe
