// Import React
import React from 'react'

// Import Components
import Header from 'components/header'
import Footer from 'components/footer'

// Import Elements
import SEO from 'elements/seo'

// Import Libraries
import PropTypes from 'prop-types'

const Layout = (props) => {
  const { children, header, seo } = props

  return (
    <>
      <SEO
        pageTitle={seo.pageTitle}
      />
      <Header logoName={header.developersName} navbar={header.navbarMenu} />
      {
        children
      }
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  children: null,
}

Layout.propTypes = {
  children: PropTypes.node,
  seo: PropTypes.shape({
    pageTitle: PropTypes.string,
  }).isRequired,
  header: PropTypes.shape({
    developersName: PropTypes.string.isRequired,
    navbarMenu: PropTypes.shape({
      links: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
  }).isRequired,
}

export default Layout
