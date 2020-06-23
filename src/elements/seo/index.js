// Import React
import React from 'react'

// Import Libraries
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const SEO = (props) => {
  const { pageTitle } = props

  return (
    <Helmet>
      <title>
        {
          pageTitle
        }
      </title>
    </Helmet>
  )
}

SEO.propTypes = {
  pageTitle: PropTypes.string.isRequired,
}

export default SEO
