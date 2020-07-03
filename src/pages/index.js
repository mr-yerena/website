// Import React
import React from 'react'

// Import Components
import Layout from 'components/layout'
import AboutMe from 'components/aboutMe'
import Services from 'components/services'
import CustomerTestimonial from 'components/customerTestimonial'
import Slider from 'components/slider'
import FunFacts from 'components/funFacts'
import ContactMe from 'components/contactMe'
import Portfolio from 'components/portfolio'

// Import Libraries
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

export const query = graphql`
  query HomePage {
    contentfulHomePage {
      seo {
        pageTitle
      }
      header {
        developersName
        navbarMenu {
          links {
            text
            to
          }
        }
      }
      slider {
        description {
          description
        }
        title
        skills
        backgroundImage {
          file {
            url
          }
        }
      }
      aboutMe {
        description {
          description
        }
        jobTitle
        title
        socialMedia {
          icon
          name
          url
        }
        profielImage {
          file {
            url
          }
        }
      }
      services {
        pageTitle
        smallTitle
        services {
          title
          description {
            ... on contentfulServicesDescriptionTextNode {
              description
            }
          }
          icon
        }
      }
      customerTestimonials {
        jobTitle
        name
        testimonial {
          testimonial
        }
      }
      contactMe {
        title
        subTitle
        buttonTitle
        formSuccessTitle
        contentfulfields {
          type
          name
        }
      }
      portfolio {
        titleSection
        pageDescription {
          content {
            content {
              value
            }
          }
        }
        projects {
          name
          projectImage {
            file {
              url
            }
          }
          description {
            description
          }
          to
        }
      }
      funFacts {
        factTitle
        fact
        icon
      }
      funFactBackground {
        file {
          url
        }
      }
    }
  }
`

const Index = ({ data }) => {
  const {
    seo,
    aboutMe,
    services,
    customerTestimonials,
    header,
    slider,
    funFacts,
    funFactBackground,
    contactMe,
    portfolio,
  } = data.contentfulHomePage

  return (
    <Layout header={header} seo={seo}>
      <Slider
        title={slider.title}
        description={slider.description}
        skills={slider.skills}
        backgroundImage={slider.backgroundImage.file.url}
      />
      <AboutMe
        title={aboutMe.title}
        jobTitle={aboutMe.jobTitle}
        description={aboutMe.description.description}
        socialMedia={aboutMe.socialMedia}
        profileImage={aboutMe.profielImage.file.url}
      />

      <Services
        title={services.pageTitle}
        subTitle={services.smallTitle}
        services={services.services}
      />

      <FunFacts
        facts={funFacts}
        background={funFactBackground.file.url}
      />

      <Portfolio
        title={portfolio.titleSection}
        subTitle={portfolio.pageDescription.content[0].content[0].value}
        portfolio={portfolio.projects}
      />

      <CustomerTestimonial
        testimonials={customerTestimonials}
      />

      <ContactMe
        title={contactMe.title}
        subTitle={contactMe.subTitle}
        buttonTitle={contactMe.buttonTitle}
        contentfulFields={contactMe.contentfulfields}
      />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    contentfulHomePage: PropTypes.shape({
      seo: PropTypes.shape({
        pageTitle: PropTypes.string.isRequired,
      }).isRequired,
      header: PropTypes.shape({
        developersName: PropTypes.string.isRequired,
        navbarMenu: PropTypes.object.isRequired,
      }),
      slider: PropTypes.shape({
        description: PropTypes.shape({
          description: PropTypes.string,
        }),
        title: PropTypes.string.isRequired,
        skills: PropTypes.arrayOf(PropTypes.string),
        backgroundImage: PropTypes.shape({
          file: PropTypes.object,
        }),
      }).isRequired,
      aboutMe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        jobTitle: PropTypes.string.isRequired,
        description: PropTypes.shape({
          description: PropTypes.string.isRequired,
        }),
        socialMedia: PropTypes.arrayOf(PropTypes.object),
        profielImage: PropTypes.objectOf(PropTypes.object),
      }),
      services: PropTypes.shape({
        pageTitle: PropTypes.string.isRequired,
        smallTitle: PropTypes.string.isRequired,
        services: PropTypes.arrayOf(PropTypes.object),
      }),
      customerTestimonials: PropTypes.arrayOf(PropTypes.object).isRequired,
      funFacts: PropTypes.arrayOf(PropTypes.object).isRequired,
      funFactBackground: PropTypes.shape({
        file: PropTypes.object,
      }).isRequired,
      portfolio: PropTypes.shape({
        titleSection: PropTypes.string,
        pageDescription: PropTypes.objectOf(PropTypes.object),
        projects: PropTypes.arrayOf(PropTypes.object),
      }).isRequired,
      contactMe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subTitle: PropTypes.string.isRequired,
        buttonTitle: PropTypes.string.isRequired,
        contentfulfields: PropTypes.arrayOf(PropTypes.object).isRequired,
      }).isRequired,
    }),
  }).isRequired,
}

export default Index
