// Import React
import React from 'react'

// Import Elements
import Title from 'elements/title'
import Icon from 'elements/icon'

// Import Modifiers
import ElementKey from 'modifiers/functions/elementKey'

// Import Libraries
import { Column, Generic } from 'rbx'
import PropTypes from 'prop-types'

const ContentColumns = (props) => {
  const { columns } = props

  return (
    <Column.Group className={`content-columns is-multiline`}>
      {
        columns.map((item, index) => (
          <Column size={4} key={`column-number-${ElementKey(index)}`}>
            <Generic className={`icon-container has-text-centered`}>
              <Generic as={`span`}>
                <Icon name={item.icon} />
              </Generic>
            </Generic>
            <Title type={`h4`}>
              {
                item.title
              }
            </Title>
            <Generic as={`p`} className={`has-text-centered`}>
              {
                item.description.description
              }
            </Generic>
          </Column>
        ))
      }
    </Column.Group>
  )
}

ContentColumns.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ContentColumns
