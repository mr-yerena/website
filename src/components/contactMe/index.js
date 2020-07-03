// Import React
import React, { useState } from 'react'

// Import Elements
import Section from 'elements/section'
import Title from 'elements/title'
import TextField from 'elements/textField'
import CallToAction from 'elements/callToAction'

// Import Libraries
import { Column, Container, Input } from 'rbx'
import {
  Formik,
  Form,
  ErrorMessage,
} from 'formik'
import * as Yup from 'yup'
import PropTypes from 'prop-types'

const ContactMe = (props) => {
  const [renderForm, setRenderForm] = useState(true)
  const [successMessage, setSuccessMessage] = useState(true)

  const encode = (data) => {
    return Object.keys(data).map(key => encodeURIComponent(key) + `=` + encodeURIComponent(data[key])).join(`&`)
  }

  const onSubmitHandler = (values, setSubmitting) => {
    setRenderForm(false)
    setSubmitting(false)
  }

  let formInitialValues = {
    name: ``,
    email: ``,
    comments: ``,
  }

  formInitialValues[`form-name`] = `contactForm`
  formInitialValues[`bot-field`] = ``

  const validationSchema = {
    name: Yup.string().required(`Name is a required field`).min(4, `Name field should be at least 4 characters long.`),
    email: Yup.string().required(`Email is a required field`).email(`Email field is invalid.`),
  }

  const {
    title,
    subTitle,
    buttonTitle,
    contentfulFields,
  } = props

  return (
    <Section className={`contact-form`}>
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
            renderForm
            && (<Formik
              initialValues={formInitialValues}
              validationSchema={Yup.object().shape(validationSchema)}
              onSubmit={ (values, {setSubmitting}) => { onSubmitHandler(values, setSubmitting) }}
            >
              { ({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                dirty,
                isValid,
              }) => (
                <Form
                  name={`contactForm`}
                  method={`post`}
                  data-netlify={`true`}
                  data-netlify-honeypot={`bot-field`}
                >
                  {/* Fields required for netlify */}
                  <Input
                    type={`hidden`}
                    name={`form-name`}
                    value={values[`form-name`]}
                  />
                  <Input
                    type={`hidden`}
                    name={`bot-field`}
                    value={values[`bot-field`]}
                  />

                  <Column size={8} className={`is-offset-2`}>
                    <Column.Group>
                      <Column size={6}>
                        <TextField
                          type={contentfulFields[0].type}
                          placeholder={contentfulFields[0].name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                          className={(errors.name && touched.name) ? `is-invalid` : ``}
                          required
                        />
                        <ErrorMessage className={`field-error-message`} name="name" component="span" />
                      </Column>

                      <Column size={6}>
                        <TextField
                          type={contentfulFields[1].type}
                          placeholder={contentfulFields[1].name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                          className={(errors.email && touched.email) ? `is-invalid` : ``}
                          required
                        />
                        <ErrorMessage className={`field-error-message`} name="email" component="span" />
                      </Column>
                    </Column.Group>

                    <Column.Group>
                      <Column>
                        <TextField
                          type={contentfulFields[2].type}
                          placeholder={contentfulFields[2].name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.comments}
                          className={(errors.comments && touched.comments) ? `is-invalid` : ``}
                        />
                      </Column>
                    </Column.Group>

                    <Column.Group>
                      <Column className={`has-text-centered`}>
                        <CallToAction disabled={(!dirty || !isValid) ? true : false}>
                          {
                            buttonTitle
                          }
                        </CallToAction>
                      </Column>
                    </Column.Group>
                  </Column>
                </Form>
              ) }
            </Formik>)
          }
        </Column.Group>
      </Container>
    </Section>
  )
}

ContactMe.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  buttonTitle: PropTypes.string.isRequired,
  contentfulFields: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ContactMe
