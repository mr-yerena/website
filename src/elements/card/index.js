// Import React
import React from 'react'

// Import Elements
import Title from 'elements/title'

// Import Libraries
import { Card, Image, Generic } from 'rbx'
import PropTypes from 'prop-types'

const Card = (props) => {
  const { image, title, description, link, publishData } = props

  return (
    <Card>
      <Card.Image>
        <Image.Container>
          <Image src={image} />
        </Image.Container>
      </Card.Image>

      <Card.Content>
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

        {
          link
        }
        {
          publishData
        }
      </Card.Content>
    </Card>
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
