// Import React
import React from 'react'

// Import Components
import ContentColumns from 'components/contentColumns'

// Import Elements
import Section from 'elements/section'
import Title from 'elements/title'

// Import Libraries
import { Column, Container } from 'rbx'
import PropTypes from 'prop-types'

const Services = (props) => {
  const { title, subTitle, services } = props

  return (
    <Section className={`services`} backgroundColor={`grey`}>
      <Container>
        <Column.Group>
          <Column>
            <Title subTitle={subTitle}>
              { title }
            </Title>
          </Column>
        </Column.Group>

        <ContentColumns columns={services} />
      </Container>
    </Section>
  )
}

Services.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  services: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Services
