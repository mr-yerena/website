// Import React
import React from 'react'

// Import Elements
import Title from 'elements/title'
import CallToAction from 'elements/callToAction'

// Import Libraries
import {
  Card as RbxCard,
  Image,
  Generic,
  Column,
} from 'rbx'
import PropTypes from 'prop-types'

const Card = (props) => {
  const {
    image,
    title,
    description,
    link,
    publishDate,
  } = props

  return (
    <RbxCard className={`card-element`}>
      <RbxCard.Image>
        <Image.Container>
          <Image src={image} />
        </Image.Container>
      </RbxCard.Image>

      <RbxCard.Content>
        <Title type={`h6`}>
          {
            title
          }
        </Title>

        <Generic as={`p`}>
          {
            description
          }
        </Generic>

        <Generic as={`hr`} />

        {
          (link || publishDate)
          && (
          <Column.Group>
            <Column size={6}>
              {
                <CallToAction to={link.to} className={`card-link`}>
                  {
                    link.title
                  }
                </CallToAction>
              }
            </Column>

            <Column size={6}>
              {
                publishDate
              }
            </Column>
          </Column.Group>
          )
        }
      </RbxCard.Content>
    </RbxCard>
  )
}

Card.defaultProps = {
  link: null,
  publishDate: null,
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.isRequired,
  link: PropTypes.shape({
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
  }),
  publishDate: PropTypes.string,
}

export default Card
