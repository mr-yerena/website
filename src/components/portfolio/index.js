// Import React
import React from 'react'

// Import Elements
import Section from 'elements/section'
import Title from 'elements/title'
import Card from 'elements/card'

// Import Modifiers
import ElementKey from 'modifiers/functions/elementKey'

// Import Libraries
import { Container, Column } from 'rbx'
import PropTypes from 'prop-types'

const Portfolio = (props) => {
  const { title, subTitle, portfolio } = props

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
          {
            portfolio.map((item, index) => (
              <Column size={4} key={`portfolio-card-${ElementKey(index)}`}>
                <Card
                  title={item.title}
                />
              </Column>
            ))
          }
        </Column.Group>
      </Container>
    </Section>
  )
}

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  portfolio: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Portfolio
