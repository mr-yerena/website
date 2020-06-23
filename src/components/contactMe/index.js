// Import React
import React from 'react'

// Import Elements
import Section from 'elements/section'
import Title from 'elements/title'
import TextField from 'elements/textField'
import CallToAction from 'elements/callToAction'

// Import Libraries
import { Column, Container } from 'rbx'
import PropTypes from 'prop-types'

const ContactMe = (props) => {
  const {
    title,
    subTitle,
    buttonTitle,
    contentfulFields,
  } = props

  return (
    <Section>
      <Container>
        <Column.Group>
          <Column>
            <Title subTitle={subTitle}>
              {
                title
              }
            </Title>
          </Column>
        </Column.Group>

        <Column.Group>
          <Column>
            <Column.Group>
              <Column size={6}>
                <TextField type={contentfulFields[0].type} placeholder={contentfulFields[0].name} />
              </Column>
            </Column.Group>

            <Column.Group>
              <Column className={`has-text-centered`}>
                <CallToAction>
                  {
                    buttonTitle
                  }
                </CallToAction>
              </Column>
            </Column.Group>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  )
}

ContactMe.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  contentfulFields: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ContactMe
