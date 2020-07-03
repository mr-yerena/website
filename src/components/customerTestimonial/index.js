/* eslint-disable react/jsx-props-no-spreading */

// Import React
import React from 'react'

// Import Elements
import Section from 'elements/section'
import Title from 'elements/title'

// Import Modifiers
import ElementKey from 'modifiers/functions/elementKey'

// Import Libraries
import { Column, Generic } from 'rbx'
import PropTypes from 'prop-types'
import Slider from 'react-slick'

const CustomerTestimonial = (props) => {
  const { testimonials } = props

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  }

  return (
    <Section>
      <Column.Group>
        <Column size={8} className={`is-offset-2`}>
          <Slider {...settings}>
            {
              testimonials.map((item, index) => (
                <Generic key={`testimonial-item-${ElementKey(index)}`} className={`has-text-centered`}>
                  <Title type={`h5`}>
                    {
                      item.name
                    }
                  </Title>
                  <Title type={`h6`}>
                    {
                      item.jobTitle
                    }
                  </Title>
                  <Generic as={`p`}>
                    {
                      item.testimonial.testimonial
                    }
                  </Generic>
                </Generic>
              ))
            }
          </Slider>
        </Column>
      </Column.Group>
    </Section>
  )
}

CustomerTestimonial.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CustomerTestimonial
