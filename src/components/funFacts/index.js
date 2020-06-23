// Import React
import React from 'react'

// Import Elements
import Section from 'elements/section'
import Icon from 'elements/icon'

// Import Modifiers
import ElementKey from 'modifiers/functions/elementKey'

// Import Libraries
import { Column, Generic, Container } from 'rbx'
import PropTypes from 'prop-types'

const FunFacts = (props) => {
  const { facts, background } = props

  return (
    <Section className={`fun-fact-background`} style={{ backgroundImage: `url(${background})` }}>
      <Container>
        <Column.Group>
          <Column>
            <Column.Group>
              {
                facts.map((item, index) => (
                  <Column size={3} className={`has-text-centered fun-facts`} key={`fun-fact-item-${ElementKey(index)}`}>
                    <Generic>
                      <Icon name={item.icon} />
                    </Generic>
                    <Generic as={`p`} className={`fact-text`}>
                      {
                        item.fact
                      }
                    </Generic>
                    <Generic as={`p`}>
                      {
                        item.factTitle
                      }
                    </Generic>
                  </Column>
                ))
              }
            </Column.Group>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  )
}

FunFacts.propTypes = {
  facts: PropTypes.arrayOf(PropTypes.object).isRequired,
  background: PropTypes.string.isRequired,
}

export default FunFacts
